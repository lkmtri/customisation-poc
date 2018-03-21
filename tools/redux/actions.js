const createAction = (shouldUpdateFrame = false) => (action) => (...param) => {
  return {
    ...action(...param),
    shouldUpdateFrame
  }
}

const getAction = (action) => typeof action === 'function'
  ? action()
  : ({ type: action })

export const asyncAction = ({
  api,
  requestAction,
  successAction,
  failureAction,
  shouldHandleRaceCondition = false
}) => (_requestPayload) => async (dispatch, getState) => {
  dispatch({ ...getAction(requestAction) })
  const requestPayload = typeof _requestPayload === 'function' ? _requestPayload(getState) : _requestPayload
  const payload = await api(requestPayload)
  const timestamp = new Date()
  if (payload.error) {
    dispatch({
      ...getAction(failureAction),
      error: payload.error,
      errorCode: payload.errorCode,
      _hrc: {
        shouldHandleRaceCondition,
        timestamp
      }
    })
  } else {
    dispatch({
      ...getAction(successAction),
      payload,
      _hrc: {
        shouldHandleRaceCondition,
        timestamp
      }
    })
  }
}

export const withFrameUpdate = createAction(true)

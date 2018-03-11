const createAction = (shouldUpdateFrame = false) => (action) => (...param) => {
  return {
    ...action(...param),
    shouldUpdateFrame
  }
}

export const withFrameUpdate = createAction(true)

import * as C from './constants'

export const initialState = {
  frame: null,
  currentFrameUrl: 'index',
  currentAction: {}
}

export const reducers = (state = initialState, action) => {
  const nextState = { ...state, currentAction: action }
  switch (action.type) {
    case C.REGISTER_PREVIEW_FRAME:
      return { ...nextState, frame: action.payload }
    case C.UPDATE_NEXT_FRAME_URL:
      return { ...nextState, currentFrameUrl: action.payload }
    default:
      return nextState
  }
}

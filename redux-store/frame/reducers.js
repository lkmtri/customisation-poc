import * as C from './constants'

export const initialState = {
  frame: null,
  currentFrameUrl: 'index',
  currentAction: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case C.REGISTER_PREVIEW_FRAME:
      return { ...state, frame: action.payload }
    case C.UPDATE_NEXT_FRAME_URL:
      return { ...state, currentFrameUrl: action.payload }
    default:
      return { ...state, currentAction: action }
  }
}

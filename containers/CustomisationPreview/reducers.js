import { REGISTER_PREVIEW_FRAME, UPDATE_NEXT_FRAME_URL } from './constants'

export const initialState = {
  frame: null,
  currentFrameUrl: 'index'
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PREVIEW_FRAME:
      return { ...state, frame: action.payload }
    case UPDATE_NEXT_FRAME_URL:
      return { ...state, currentFrameUrl: action.payload }
    default:
      return state
  }
}

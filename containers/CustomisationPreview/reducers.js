import { REGISTER_PREVIEW_FRAME } from './constants'

export const initialState = {
  frame: null
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PREVIEW_FRAME:
      return { ...state, frame: action.payload }
    default:
      return state
  }
}

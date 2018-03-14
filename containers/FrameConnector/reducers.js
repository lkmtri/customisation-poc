import { PUSH_UPDATE_TO_PREVIEW_FRAME } from './constants'

export const initialState = {
  currentAction: {},
  pushUpdate: 0
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_UPDATE_TO_PREVIEW_FRAME:
      return {
        ...state,
        currentAction: action,
        pushUpdate: state.pushUpdate + 1
      }
    default:
      return { ...state, currentAction: action }
  }
}

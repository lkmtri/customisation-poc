import { CHANGE_THEME_SETTINGS } from './constants'

export const initialState = {
  customisation: {
    color: 'red'
  },
  themeSettings: {

  }
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_SETTINGS:
      return { ...state, themeSettings: { ...state.themeSettings, [action.payload.key]: action.payload.value } }
    default:
      return state
  }
}

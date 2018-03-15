import { LOAD_THEME, CHANGE_THEME_SETTINGS } from './constants'

export const initialState = {
  customisation: {
    color: 'red'
  },
  themeSettings: {

  },
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THEME:
      return { ...state, ...action.payload }
    case CHANGE_THEME_SETTINGS:
      return {
        ...state,
        themeSettingData: {
          ...state.themeSettingData,
          current: {
            ...state.themeSettingData.current,
            [action.payload.key]: action.payload.value
          }
        }
      }
    default:
      return state
  }
}

import { LOAD_THEME, UPDATE_THEME_SETTINGS, UPDATE_SECTIONS_SETTINGS, UPDATE_SECTIONS_CONTENT } from './constants'

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
    case UPDATE_THEME_SETTINGS:
      return {
        ...state,
        themeSettingData: {
          ...state.themeSettingData,
          [action.payload.key]: action.payload.value
        }
      }
    case UPDATE_SECTIONS_SETTINGS:
      return {
        ...state,
        sectionSettingData: {
          ...state.sectionSettingData,
          sections: {
            ...state.sectionSettingData.sections,
            [action.payload.sectionId]: {
              ...state.sectionSettingData.sections[action.payload.sectionId],
              settings: {
                ...state.sectionSettingData.sections[action.payload.sectionId].settings,
                [action.payload.key]: action.payload.value
              }
            }
          }
        }
      }
    case UPDATE_SECTIONS_CONTENT:
      return {
        ...state,
        sectionSettingData: {
          ...state.sectionSettingData,
          sections: {
            ...state.sectionSettingData.sections,
            [action.payload.sectionId]: {
              ...state.sectionSettingData.sections[action.payload.sectionId],
              blocks: {
                ...state.sectionSettingData.sections[action.payload.sectionId].blocks,
                [action.payload.blockId]: {
                  ...state.sectionSettingData.sections[action.payload.sectionId].blocks[action.payload.blockId],
                  settings: {
                    ...state.sectionSettingData.sections[action.payload.sectionId].blocks[action.payload.blockId].settings,
                    [action.payload.key]: action.payload.value
                  }
                }
              }
            }
          }
        }
      }
    default:
      return state
  }
}

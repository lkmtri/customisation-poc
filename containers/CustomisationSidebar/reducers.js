import produce from 'immer'
import * as C from './constants'

export const initialState = {
  isThemeLoaded: false,
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
}

export const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case C.LOAD_THEME: {
      const { themeSettingData, themeSettingSchema, sectionSettingData, sectionSettingSchema } = action.payload
      return produce(state, draftState => {
        draftState.isThemeLoaded = true
        draftState.themeSettingData = themeSettingData
        draftState.themeSettingSchema = themeSettingSchema
        draftState.sectionSettingData = sectionSettingData
        draftState.sectionSettingSchema = sectionSettingSchema
      })
    }
    case C.UPDATE_THEME_SETTINGS: {
      const { key, value } = action.payload
      return produce(state, draftState => {
        draftState.themeSettingData[key] = value
      })
    }
    case C.UPDATE_SECTIONS_SETTINGS: {
      const { sectionId, key, value } = action.payload
      return produce(state, draftState => {
        draftState.sectionSettingData.sections[sectionId].settings[key] = value
      })
    }
    case C.UPDATE_SECTIONS_CONTENT: {
      const { sectionId, blockId, key, value } = action.payload
      return produce(state, draftState => {
        draftState.sectionSettingData.sections[sectionId].blocks[blockId].settings[key] = value
      })
    }
    case C.REORDER_SECTIONS: {
      const { page, nextSectionsOrder } = action.payload
      return produce(state, draftState => {
        draftState.sectionSettingData.pages[page] = nextSectionsOrder
      })
    }
    case C.REORDER_BLOCKS: {
      const { sectionId, nextBlocksOrder } = action.payload
      return produce(state, draftState => {
        draftState.sectionSettingData.sections[sectionId].blocksOrder = nextBlocksOrder
      })
    }
    case C.GET_PREVIEW_TOKEN_SUCCESS:
    case C.GET_PREVIEW_TOKEN_FAILURE:
      console.log(action)
      return state
    default:
      return state
  }
}

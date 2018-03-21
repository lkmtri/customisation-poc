import produce from 'immer'
import * as C from './constants'

export const initialState = {
  previewToken: '',
  isThemeLoaded: false,
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
}

export const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case C.LOAD_THEME:
      return produce(state, draftState => {
        const { themeSettingData, themeSettingSchema, sectionSettingData, sectionSettingSchema } = action.payload
        draftState.isThemeLoaded = true
        draftState.themeSettingData = themeSettingData
        draftState.themeSettingSchema = themeSettingSchema
        draftState.sectionSettingData = sectionSettingData
        draftState.sectionSettingSchema = sectionSettingSchema
      })
    case C.UPDATE_THEME_SETTINGS:
      return produce(state, draftState => {
        const { key, value } = action.payload
        draftState.themeSettingData[key] = value
      })
    case C.UPDATE_SECTIONS_SETTINGS:
      return produce(state, draftState => {
        const { sectionId, key, value } = action.payload
        draftState.sectionSettingData.sections[sectionId].settings[key] = value
      })
    case C.UPDATE_SECTIONS_CONTENT:
      return produce(state, draftState => {
        const { sectionId, blockId, key, value } = action.payload
        draftState.sectionSettingData.sections[sectionId].blocks[blockId].settings[key] = value
      })
    case C.REORDER_SECTIONS:
      return produce(state, draftState => {
        const { page, nextSectionsOrder } = action.payload
        draftState.sectionSettingData.pages[page] = nextSectionsOrder
      })
    case C.REORDER_BLOCKS:
      return produce(state, draftState => {
        const { sectionId, nextBlocksOrder } = action.payload
        draftState.sectionSettingData.sections[sectionId].blocksOrder = nextBlocksOrder
      })
    case C.GET_PREVIEW_TOKEN_SUCCESS:
      return produce(state, draftState => {
        console.log(action.payload)
        draftState.previewToken = action.payload
      })
    case C.GET_PREVIEW_TOKEN_FAILURE:
      return state
    default:
      return state
  }
}

import { fromJS } from 'immutable'
import * as C from './constants'

export const initialState = fromJS({
  isThemeLoaded: false,
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
})

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case C.LOAD_THEME:
      const { themeSettingData, themeSettingSchema, sectionSettingData, sectionSettingSchema } = action.payload
      return state.get('isThemeLoaded') ? state : state
        .set('isThemeLoaded', true)
        .set('themeSettingSchema', fromJS(themeSettingSchema))
        .set('themeSettingData', fromJS(themeSettingData))
        .set('sectionSettingSchema', fromJS(sectionSettingSchema))
        .set('sectionSettingData', fromJS(sectionSettingData))
    case C.UPDATE_THEME_SETTINGS:
      return state.setIn(['themeSettingData', action.payload.key], fromJS(action.payload.value))
    case C.UPDATE_SECTIONS_SETTINGS:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case C.UPDATE_SECTIONS_CONTENT:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'blocks',
          action.payload.blockId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case C.REORDER_SECTIONS:
      return state.setIn(
        ['sectionSettingData', 'pages', action.payload.page],
        fromJS(action.payload.nextSectionsOrder)
      )
    case C.REORDER_BLOCKS:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'blocksOrder'],
        fromJS(action.payload.nextBlocksOrder)
      )
    case C.GET_PREVIEW_TOKEN_SUCCESS:
    case C.GET_PREVIEW_TOKEN_FAILURE:
      console.log(action)
      return state
    default:
      return state
  }
}

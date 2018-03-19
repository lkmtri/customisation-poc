import { fromJS } from 'immutable'
import { LOAD_THEME, UPDATE_THEME_SETTINGS, UPDATE_SECTIONS_SETTINGS, UPDATE_SECTIONS_CONTENT, REORDER_SECTIONS, REORDER_BLOCKS } from './constants'

export const initialState = fromJS({
  isThemeLoaded: false,
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
})

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THEME:
      const { themeSettingData, themeSettingSchema, sectionSettingData, sectionSettingSchema } = action.payload
      return state.get('isThemeLoaded') ? state : state
        .set('isThemeLoaded', true)
        .set('themeSettingSchema', fromJS(themeSettingSchema))
        .set('themeSettingData', fromJS(themeSettingData))
        .set('sectionSettingSchema', fromJS(sectionSettingSchema))
        .set('sectionSettingData', fromJS(sectionSettingData))
    case UPDATE_THEME_SETTINGS:
      return state.setIn(['themeSettingData', action.payload.key], fromJS(action.payload.value))
    case UPDATE_SECTIONS_SETTINGS:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case UPDATE_SECTIONS_CONTENT:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'blocks',
          action.payload.blockId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case REORDER_SECTIONS:
      return state.setIn(
        ['sectionSettingData', 'pages', action.payload.page],
        fromJS(action.payload.nextSectionsOrder)
      )
    case REORDER_BLOCKS:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'blocksOrder'],
        fromJS(action.payload.nextBlocksOrder)
      )
    default:
      return state
  }
}

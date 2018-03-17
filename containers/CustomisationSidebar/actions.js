import { withFrameUpdate } from 'tools/redux/actions'
import { LOAD_THEME, UPDATE_THEME_SETTINGS, UPDATE_SECTIONS_SETTINGS, UPDATE_SECTIONS_CONTENT } from './constants'

export const updateThemeSettingsAction = withFrameUpdate(
  ({ key, value }) => ({ type: UPDATE_THEME_SETTINGS, payload: { key, value } })
)

export const updateSectionSettingsAction = withFrameUpdate(
  ({ sectionId, key, value }) => ({ type: UPDATE_SECTIONS_SETTINGS, payload: { sectionId, key, value } })
)

export const updateSectionContentAction = withFrameUpdate(
  ({ sectionId, blockId, key, value }) => ({ type: UPDATE_SECTIONS_CONTENT, payload: { sectionId, blockId, key, value } })
)

export const loadTheme = (payload) => ({ type: LOAD_THEME, payload })

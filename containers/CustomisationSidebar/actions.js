import { withFrameUpdate } from 'tools/redux/actions'
import { LOAD_THEME, CHANGE_THEME_SETTINGS } from './constants'

export const changeThemeSettingsAction = withFrameUpdate(
  ({ key, value }) => ({ type: CHANGE_THEME_SETTINGS, payload: { key, value } })
)

export const loadTheme = (payload) => ({ type: LOAD_THEME, payload })

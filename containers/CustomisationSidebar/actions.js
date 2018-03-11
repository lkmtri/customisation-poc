import { withFrameUpdate } from 'tools/redux/actions'
import { CHANGE_THEME_SETTINGS } from './constants'

export const changeThemeSettingsAction = withFrameUpdate(
  ({ key, value }) => ({ type: CHANGE_THEME_SETTINGS, payload: { key, value } })
)

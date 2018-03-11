import { withFrameUpdate } from 'tools/redux/actions'
import { CHANGE_HEADING_FONT } from './constants'

export const changeHeadingFont = withFrameUpdate(
  (font) => ({ type: CHANGE_HEADING_FONT, payload: font })
)

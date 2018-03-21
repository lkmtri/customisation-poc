import { REGISTER_PREVIEW_FRAME } from './constants'

export const registerPreviewFrame = (frame) => ({ type: REGISTER_PREVIEW_FRAME, payload: frame })

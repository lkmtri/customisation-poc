import * as C from './constants'

export const registerPreviewFrame = (frame) => ({
  type: C.REGISTER_PREVIEW_FRAME,
  payload: frame
})

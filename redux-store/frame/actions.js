import * as C from './constants'

export const registerPreviewFrame = (frame) => ({
  type: C.REGISTER_PREVIEW_FRAME,
  payload: frame
})

export const updateFrameUrlAction = (page) => ({
  type: C.UPDATE_NEXT_FRAME_URL,
  payload: page
})

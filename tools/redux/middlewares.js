import { STORE_KEY } from 'containers/CustomisationPreview/constants'

export const updatePreviewFrameMiddleware = (store) => (next) => (action) => {
  const frame = store.getState()[STORE_KEY].frame
  frame && frame.contentWindow.postMessage(action, 'http://localhost:3001')
  return next(action)
}

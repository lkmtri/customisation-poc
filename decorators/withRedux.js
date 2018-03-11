import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { updatePreviewFrameMiddleware } from 'tools/redux/middlewares'

const middlewares = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  updatePreviewFrameMiddleware
))

export default (wrappedComponent, reducers, initialState) => withRedux(
  () => createStore(reducers, initialState, middlewares)
)(wrappedComponent)

import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { updatePreviewFrameMiddleware } from 'tools/redux/middlewares'

const reduxMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  updatePreviewFrameMiddleware
))

export default (wrappedComponent, reducers, _initialState) => withRedux(
  (initialState = _initialState) => createStore(reducers, initialState, reduxMiddleware)
)(wrappedComponent)

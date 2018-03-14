import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const middlewares = composeWithDevTools(applyMiddleware(
  thunkMiddleware
))

export default (wrappedComponent, reducers, initialState) => withRedux(
  () => createStore(reducers, initialState, middlewares)
)(wrappedComponent)

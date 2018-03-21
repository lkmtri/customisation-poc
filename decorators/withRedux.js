import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducers } from 'redux-store'
import { loggerMiddlewares } from 'tools/redux/middlewares'

const middlewares = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddlewares
))

export default (wrappedComponent) => withRedux(
  (initialState) => createStore(reducers, initialState, middlewares)
)(wrappedComponent)

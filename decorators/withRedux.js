import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const reduxMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default (wrappedComponent, reducers, _initialState) => withRedux(
  (initialState = _initialState) => createStore(reducers, initialState, reduxMiddleware)
)(wrappedComponent)

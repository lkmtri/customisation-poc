import { combineReducers } from 'redux'
import withRedux from 'decorators/withRedux'

export default (wrappedComponent) => {
  const reducers = combineReducers(wrappedComponent.getReducers())
  const initialState = wrappedComponent.getInitialState()
  return withRedux(wrappedComponent, reducers, initialState)
}

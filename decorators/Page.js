import { combineReducers } from 'redux'
import withRedux from 'decorators/withRedux'

export default (wrappedComponent) => {
  const reducers = combineReducers(wrappedComponent.getReducers())
  return withRedux(wrappedComponent, reducers)
}

import { combineReducers } from 'redux'
import customisationStore from 'redux-store/customisation'
import frameStore from 'redux-store/frame'

export const actions = {
  ...customisationStore.actions,
  ...frameStore.actions
}

export const reducers = combineReducers({
  ...customisationStore.reducers,
  ...frameStore.reducers
})

export const initialState = {
  ...customisationStore.initialState,
  ...frameStore.initialState
}

export const storeKeys = {
  customisation: customisationStore.storeKey,
  frame: frameStore.storeKey
}

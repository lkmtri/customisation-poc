import { makeSubStore } from 'tools/redux'
import { STORE_KEY } from './constants'
import * as actions from './actions'
import { initialState, reducers } from './reducers'

export default makeSubStore(STORE_KEY, actions, reducers, initialState)

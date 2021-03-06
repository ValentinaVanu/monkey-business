import { combineReducers } from 'redux'
import { monkeyReducer } from './monkey.reducer'

const createReducer = asyncReducers => combineReducers({
  monkey: monkeyReducer,
  ...asyncReducers
})

export default createReducer

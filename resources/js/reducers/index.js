import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { valueReducer } from './value'

const allReducers = combineReducers({
  value: valueReducer
})

const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export default store

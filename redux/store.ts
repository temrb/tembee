import { configureStore, combineReducers } from '@reduxjs/toolkit'

//import slice as reducer
import postReducer from './features/postSlice'

const rootReducer = combineReducers({
  //combine all reducers
  post: postReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

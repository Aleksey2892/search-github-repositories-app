import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './githubApi/githubApi'

export const store = configureStore({
  reducer: {
    rootData: rootReducer,
  },
})

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'  // импортируем reducer

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

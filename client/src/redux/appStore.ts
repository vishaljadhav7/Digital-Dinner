import { configureStore } from '@reduxjs/toolkit'
import userReducer from  '../features/user/index'
import cartReducer from '../features/cart/index'

export const store = configureStore({
  reducer: {
   user : userReducer,
   cart : cartReducer
  },
})
 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
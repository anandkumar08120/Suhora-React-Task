// src/redux/store.ts
import { configureStore, createReducer } from '@reduxjs/toolkit';
import userReducer from './authSlice';
import cartReducer from './dataSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

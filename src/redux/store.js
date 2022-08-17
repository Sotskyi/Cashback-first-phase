import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import storesSlice from './slices/storesSlice';
import cashbackSlice from './slices/cashbackSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stores: storesSlice,
    cashback: cashbackSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

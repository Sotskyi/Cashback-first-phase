import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import storesSlice from './slices/storesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stores: storesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

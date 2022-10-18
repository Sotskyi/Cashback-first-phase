import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import storesSlice from './slices/storesSlice';
import cashbackSlice from './slices/cashbackSlice';
import withdrawMoneySlice from './slices/withdrawMoneySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stores: storesSlice,
    cashback: cashbackSlice,
    withdrawMoney: withdrawMoneySlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

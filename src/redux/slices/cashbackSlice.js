import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CashbackService from '../../api/services/CashbackService';
import { getError } from '../../utils/helpers';

const initialState = {
  cashbackList: {
    cashback: [
      {
        date: '',
        dailyTotal: '',
        items: [
          {
            cashbackId: '',
            logoImageId: '',
            logoImageUrl: '',
            reward: '',
            saleAmount: '',
            storeTitle: '',
            withdrawalAt: '',
          },
        ],
      },
    ],
    cashbackTotals: [],
  },
  withdrawalsList: [],
  withdrawalItemsCount: 0,
  isLoading: false,
};

export const getCashback = createAsyncThunk(
  'cashback/getCashback ',
  async (params, thunkAPI) => {
    try {
      const response = await CashbackService.getCashback(params);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getWithdrawals = createAsyncThunk(
  'cashback/getWithdrawals ',
  async (params, thunkAPI) => {
    try {
      const response = await CashbackService.getWithdrawals(params);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const cashbackSlice = createSlice({
  name: 'cashback',
  initialState,
  reducers: {},
  extraReducers: {
    [getCashback.fulfilled]: (state, action) => {
      state.cashbackList = action.payload;
      state.isLoading = false;
    },
    [getCashback.pending]: (state) => {
      state.isLoading = true;
    },
    [getCashback.rejected]: (state) => {
      state.isLoading = false;
    },
    [getWithdrawals.fulfilled]: (state, action) => {
      state.withdrawalsList = action.payload.withdrawals;
      state.isLoading = false;
    },
    [getWithdrawals.pending]: (state) => {
      state.isLoading = true;
    },
    [getWithdrawals.rejected]: (state) => {
      state.isLoading = false;
    },
    // [getStore.fulfilled]: (state, action) => {
    //   state.store = action.payload;
    //   state.isLoading = false;
    // },
    // [getStore.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getStore.rejected]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export const { reset } = cashbackSlice.actions;
export default cashbackSlice.reducer;

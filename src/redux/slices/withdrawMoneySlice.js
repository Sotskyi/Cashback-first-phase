import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WithdrawService from '../../api/services/WithdrawService';
import { getError } from '../../utils/helpers';

const initialState = {
  withdrawInfo: {},
  isLoading: false,
};

export const withdrawMoney = createAsyncThunk(
  'withdraw/withdrawMoney ',
  async (params, thunkAPI) => {
    try {
      const response = await WithdrawService.withdrawMoney(params);
      return await response.data;
    } catch (error) {
      toast.error(getError(error), { autoClose: false });
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const withdrawMoneySlice = createSlice({
  name: 'withdraw',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [withdrawMoney.fulfilled]: (state, action) => {
      state.withdrawInfo = action.payload;
      state.isLoading = false;
    },
    [withdrawMoney.pending]: (state) => {
      state.isLoading = true;
    },
    [withdrawMoney.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = withdrawMoneySlice.actions;
export default withdrawMoneySlice.reducer;

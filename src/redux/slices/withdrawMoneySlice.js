import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WithdrawService from '../../api/services/WithdrawService';
import { getError } from '../../utils/helpers';

const initialState = {
  withdrawInfo: {},
};

export const withdrawMoney = createAsyncThunk(
  'withdraw/withdrawMoney ',
  async (params, thunkAPI) => {
    try {
      const response = await WithdrawService.withdrawMoney(params);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
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
    },
  },
});

export const { reset } = withdrawMoneySlice.actions;
export default withdrawMoneySlice.reducer;

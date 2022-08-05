import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StoresService from '../../api/services/StoresService';
import { getError } from '../../utils/helpers';

const initialState = {
  storesList: [],
  itemsCount: 0,
  store: {
    backgroundImage: { url: '' },
    baseReward: '',
    translations: [
      { id: '', title: '', description: '', specialRewardTitle: null },
    ],
  },

  isLoading: false,
};

export const getStores = createAsyncThunk(
  'stores/getStores',
  async (params, thunkAPI) => {
    try {
      const response = await StoresService.getStores(params);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getStore = createAsyncThunk(
  'stores/getStore',
  async (id, thunkAPI) => {
    try {
      const response = await StoresService.getStore(id);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const redirectToStore = createAsyncThunk(
  'stores/redirectToStore',
  async (id, thunkAPI) => {
    try {
      const response = await StoresService.redirectToStore(id);
      const data = await response.data;
      if (data.url) {
        window.location.href = `${data.url}`;
      }
      return null;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    reset: (state) => {
      state.storesList = [];
      state.store = {
        backgroundImage: { url: '' },
        baseReward: '',
        translations: [
          { id: '', title: '', description: '', specialRewardTitle: null },
        ],
      };
    },
  },
  extraReducers: {
    [getStores.fulfilled]: (state, action) => {
      state.storesList = [...state.storesList, ...action.payload.items];
      state.isLoading = false;
      state.itemsCount = action.payload.count;
    },
    [getStores.pending]: (state) => {
      state.isLoading = true;
    },
    [getStores.rejected]: (state) => {
      state.isLoading = false;
    },
    [getStore.fulfilled]: (state, action) => {
      state.store = action.payload;
      state.isLoading = false;
    },
    [getStore.pending]: (state) => {
      state.isLoading = true;
    },
    [getStore.rejected]: (state) => {
      state.isLoading = false;
    },
    [redirectToStore.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [redirectToStore.pending]: (state) => {
      state.isLoading = true;
    },
    [redirectToStore.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = storesSlice.actions;
export default storesSlice.reducer;

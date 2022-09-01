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
  search: '',
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

export const getStoresBySearch = createAsyncThunk(
  'stores/getStoresBySearch',
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
      if (data.url && data.url.includes('https')) {
        window.location.href = `${data.url}`;
      }
      return data;
    } catch (error) {
      toast.error('This store is not connected to Telcorewards');
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const redirectToSpecialOffer = createAsyncThunk(
  'stores/redirectToStore',
  async (offerId, thunkAPI) => {
    try {
      const response = await StoresService.redirectToSpecialOffer(offerId);
      const data = await response.data;
      if (data.url && data.url.includes('https')) {
        window.location.href = `${data.url}`;
      }
      return data;
    } catch (error) {
      toast.error('This offer is not active');
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },

  extraReducers: {
    [getStores.fulfilled]: (state, action) => {
      if (action.meta.arg.page === 1) {
        state.storesList = action.payload.items;
      } else {
        state.storesList = [...state.storesList, ...action.payload.items];
      }
      state.isLoading = false;
      state.itemsCount = action.payload.count;
    },
    [getStores.pending]: (state) => {
      state.isLoading = true;
    },
    [getStores.rejected]: (state) => {
      state.isLoading = false;
    },

    [getStoresBySearch.fulfilled]: (state, action) => {
      state.storesList = action.payload.items;
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

export const { reset, setSearch } = storesSlice.actions;
export default storesSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../api/services/AuthService';

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isAuth: false,
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.register(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// Login user
export const login = createAsyncThunk('auth/login', async (creds, thunkAPI) => {
  try {
    const response = await AuthService.login(creds);
    return await response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const checkAuth = createAsyncThunk(
  'auth/refresh',
  async (refreshToken, thunkAPI) => {
    try {
      const response = await AuthService.checkAuth(refreshToken);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isError = false;
    },
    [login.pending]: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [register.pending]: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [checkAuth.pending]: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    [checkAuth.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    [checkAuth.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

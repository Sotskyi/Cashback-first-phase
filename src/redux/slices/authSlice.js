import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../api/services/AuthService';

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isAuth: false,
  confirmSms: null,
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

export const loginConfirm = createAsyncThunk(
  'auth/loginConfirm',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.loginConfirm(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resetPasswordConfirm = createAsyncThunk(
  'auth/resetPasswordConfirm',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.resetPasswordConfirm(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const registerConfirm = createAsyncThunk(
  'auth/resetPasswordConfirm',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.registerConfirm(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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

export const verifyPhone = createAsyncThunk(
  'auth/confirmSms',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await AuthService.confirmSms(phoneNumber);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resetPasswordBysms = createAsyncThunk(
  'auth/resetPasswordBysms',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await AuthService.resetPasswordBySms(phoneNumber);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const setNewPassword = createAsyncThunk(
  'auth/setNewPassword ',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.setNewPassword(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
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
      state.isError = false;
      state.confirmSms = action.payload.code;
      state.isLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [loginConfirm.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isError = false;
    },
    [loginConfirm.pending]: (state) => {
      state.isLoading = true;
    },
    [loginConfirm.rejected]: (state) => {
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
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isAuth = false;
      state.user = null;
      state.confirmSm = null;
    },
    [verifyPhone.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyPhone.fulfilled]: (state, action) => {
      state.confirmSms = action.payload.code;
      state.isLoading = false;
    },
    [verifyPhone.rejected]: (state) => {
      state.isLoading = false;
    },
    [resetPasswordBysms.pending]: (state) => {
      state.isLoading = true;
    },
    [resetPasswordBysms.fulfilled]: (state, action) => {
      state.confirmSms = action.payload.code;
      state.isLoading = false;
      state.isError = false;
    },
    [resetPasswordBysms.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

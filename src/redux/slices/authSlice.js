import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthService from '../../api/services/AuthService';
import { getError } from '../../utils/helpers';

const initialState = {
  user: {},
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
      toast.error(getError(error));
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
    toast.error(getError(error));
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
      toast.error(getError(error));
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
      toast.error(getError(error));
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
      toast.error(getError(error));
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
      localStorage.setItem('auth', JSON.stringify({}));
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
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resendSms = createAsyncThunk(
  'auth/signin/resend',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await AuthService.resendSms(phoneNumber);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resetPasswordBySms = createAsyncThunk(
  'auth/resetPasswordBySms',
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await AuthService.resetPasswordBySms(phoneNumber);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resetPasswordByEmail = createAsyncThunk(
  'auth/resetPasswordBySms',
  async (email, thunkAPI) => {
    try {
      const response = await AuthService.resetPasswordByEmail(email);
      return await response.data;
    } catch (error) {
      toast.error(getError(error));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const setNewPasswordByPhone = createAsyncThunk(
  'auth/setNewPasswordByPhone',
  async (creds, thunkAPI) => {
    try {
      const response = await AuthService.setNewPasswordByPhone(creds);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const setNewPasswordByEmail = createAsyncThunk(
  'auth/setNewPasswordByEmail ',
  async (params, thunkAPI) => {
    try {
      const response = await AuthService.setNewPasswordByEmail(params);
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // state.confirmSms = action.payload.code;
      state.user = action.payload.user;
      state.isLoading = false;
      state.isAuth = true;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
    // [loginConfirm.fulfilled]: (state, action) => {
    //   state.user = action.payload.user;
    //   state.isAuth = true;
    // },
    // [loginConfirm.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [loginConfirm.rejected]: (state) => {
    //   state.isLoading = false;
    // },
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
    },
    [checkAuth.pending]: (state) => {
      state.isLoading = true;
    },
    [checkAuth.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [checkAuth.rejected]: (state) => {
      state.isLoading = false;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
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
    [resendSms.pending]: (state) => {
      state.isLoading = true;
    },
    [resendSms.fulfilled]: (state, action) => {
      state.confirmSms = action.payload.code;
      state.isLoading = false;
    },
    [resendSms.rejected]: (state) => {
      state.isLoading = false;
    },
    [resetPasswordBySms.pending]: (state) => {
      state.isLoading = true;
    },
    [resetPasswordBySms.fulfilled]: (state, action) => {
      state.confirmSms = action.payload.code;
      state.isLoading = false;
    },
    [resetPasswordBySms.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reset, setUser } = authSlice.actions;
export default authSlice.reducer;

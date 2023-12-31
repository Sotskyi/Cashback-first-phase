// Usage: put as separate file and use in login request
// import { saveTokens } from "../helpers/axios-refresh-token"
// axios.post(`${API_URL}/login`, data).then(saveTokens);
// in case of different data format, replace .then(saveTokens) with .then((response) => saveTokens(response.some));

import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { Navigate } from 'react-router-dom';
// import router from "../router";
const API_URL = `${process.env.REACT_APP_API_URL}`;
const REFRESH_TOKEN_URL = `${API_URL}/auth/refresh`;
const MIN_TOKEN_REFRESH_INTERVAL = 2000;
// const adminRoles = ['MASTER_ADMIN', 'CFA_ADMIN'];
axios.defaults.baseURL = API_URL;

export const getSavedAuthData = () =>
  JSON.parse(localStorage.getItem('auth') || '{}');

// const hasAuthData = () => !!getSavedAuthData().token;

const saveAuthData = (data) => {
  localStorage.setItem('auth', JSON.stringify(data));
};

const clearAuthData = () => saveAuthData({});

// const redirectToLogin = () => router.push("/login");

export const saveTokens = (axiosData) => {
  const { access_token, refresh_token } = axiosData.data.tokens;
  axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  saveAuthData({ access_token, refresh_token });

  return Promise.resolve(axiosData);
};

// Refresh request itself
let previousRefreshTokenPromise = null;
let refreshTokenTimeout = null;
const refreshAuthToken = () => {
  const { refresh_token } = getSavedAuthData();
  // Do not execute if have no token
  if (!refresh_token) {
    return Promise.reject();
  }

  // Make just one refresh request for all failed requests
  if (previousRefreshTokenPromise) {
    return previousRefreshTokenPromise;
  }

  clearTimeout(refreshTokenTimeout);
  previousRefreshTokenPromise = axios
    .patch(REFRESH_TOKEN_URL, {
      refreshToken: refresh_token,
    })
    .finally(() => {
      // Do not refresh token few times during lifetime
      // for example, if additional response was received after refreshing
      refreshTokenTimeout = setTimeout(() => {
        clearTimeout(refreshTokenTimeout);
        previousRefreshTokenPromise = null;
      }, MIN_TOKEN_REFRESH_INTERVAL);
    });

  return previousRefreshTokenPromise;
};

// Intercept unauth responses, refresh token and recall request
const refreshTokenInterceptor = (error) => {
  // Do not refresh on external fails or refresh request

  if (
    !error.config.baseURL.includes(API_URL) ||
    error.config.baseURL.includes(REFRESH_TOKEN_URL)
  ) {
    clearAuthData();
    /* eslint-disable */
    <Navigate to='/login' replace />;

    return Promise.reject(error);
  }

  if (error.response.status === 401) {
    clearAuthData();
    <Navigate to='/' replace />;
  }

  return refreshAuthToken()
    .then(saveTokens)
    .then((axiosData) => {
      error.config.headers.Authorization =
        axios.defaults.headers.common.Authorization;
      return axiosData;
    })
    .catch(() => {
      clearAuthData();
      /* eslint-disable */
      <Navigate to='/login' replace />;
      // Uncomment in case of global router/history usage
      // redirectToLogin();
      return Promise.reject(error);
    });
};
createAuthRefreshInterceptor(axios, refreshTokenInterceptor);

// Set existed token to config
axios.defaults.headers.common.Authorization = `Bearer ${
  getSavedAuthData().access_token
}`;

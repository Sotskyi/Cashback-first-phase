import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { getSavedAuthData } from '../../api/requestsInterceptor';

const AuthLayout = () => {
  const { refresh_token } = getSavedAuthData();

  return <div>{refresh_token ? <Outlet /> : <Navigate to='/' />}</div>;
};

export default AuthLayout;

import React from 'react';
// import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getSavedAuthData } from '../../api/requestsInterceptor';

const ProtectedRoutesLayout = () => {
  // const { isAuth } = useSelector((state) => state.auth);
  const { refresh_token } = getSavedAuthData();

  return (
    <div>{refresh_token ? <Outlet /> : <Navigate to='/login' replace />}</div>
  );
};

export default ProtectedRoutesLayout;

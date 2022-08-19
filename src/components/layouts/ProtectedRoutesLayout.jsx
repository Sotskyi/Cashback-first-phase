import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { getSavedAuthData } from '../../api/requestsInterceptor';

const ProtectedRoutesLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  // const { refresh_token } = getSavedAuthData();

  return <div>{isAuth && <Outlet />}</div>;
};

export default ProtectedRoutesLayout;

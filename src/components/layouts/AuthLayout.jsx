import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import UnloginedHeader from '../UnloginedHeader';
import LoginedHeader from '../LoginedHeader';
import { getSavedAuthData } from '../../api/requestsInterceptor';
import { checkAuth } from '../../redux/slices/authSlice';

const AuthLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const { refresh_token } = getSavedAuthData();

    if (refresh_token && !isAuth) {
      dispatch(checkAuth(refresh_token));
    }
  }, []);

  // if (!isAuth && location.pathname === '/missing_transaction') {
  //   return <Navigate to='/login' state={{ from: location }} replace />;
  // }

  return (
    <main className='App'>
      {isAuth ? <LoginedHeader /> : <UnloginedHeader />}
      <Outlet />
    </main>
  );
};

export default AuthLayout;

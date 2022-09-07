import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSavedAuthData } from '../../api/requestsInterceptor';
import { checkAuth } from '../../redux/slices/authSlice';
import UnloginedHeader from '../UnloginedHeader';
import LoginedHeader from '../LoginedHeader';
import { HowItWorksCarouselProvider } from '../lib/howItWorksCarousel/HowItWorksCarouselProvider';

const AuthLayout = () => {
  const dispatch = useDispatch();

  const { isAuth, user } = useSelector((state) => state.auth);

  const { refresh_token } = getSavedAuthData();

  useEffect(() => {
    if (refresh_token && !isAuth) {
      dispatch(checkAuth(refresh_token));
    }
  }, []);

  return (
    <div>
      <HowItWorksCarouselProvider>
        {isAuth ? (
          <LoginedHeader availableBalance={user.wallet.balance} />
        ) : (
          <UnloginedHeader />
        )}

        <Outlet />
      </HowItWorksCarouselProvider>
    </div>
  );
};

export default AuthLayout;

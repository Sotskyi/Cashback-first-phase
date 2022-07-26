import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import LoginAccount from './Tabs/LoginAccount';
import VerifyPhone from '../../components/VerifyPhone';
import AuthLandingLayout from '../../components/layouts/AuthLandingLayout';
import Loader from '../../components/lib/Loader';
// import { loginConfirm } from '../../redux/slices/authSlice';

const LogIn = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [creds, setCreds] = useState({
    phoneNumber: '+1',
    password: '',
  });

  const { isLoading } = useSelector((state) => state.auth);

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (event) => {
    const value = event.target.value.split(' ').join('');
    setCreds({
      ...creds,
      [event.target.id]: value,
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && (
        <LoginAccount
          creds={creds}
          setCreds={setCreds}
          next={next}
          handleChange={handleChange}
        />
      )}
      {activeStep === 1 && (
        <VerifyPhone
          next={false}
          setCreds={setCreds}
          creds={creds}
          useFor='login'
        />
      )}
    </AuthLandingLayout>
  );
};
export default LogIn;

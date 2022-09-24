import { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginAccount from './Tabs/LoginAccount';
import AuthLandingLayout from '../../components/layouts/AuthLandingLayout';
import Loader from '../../components/lib/Loader';

const LogIn = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [creds, setCreds] = useState({
    phoneNumber: '',
    password: '',
  });

  const { isLoading } = useSelector((state) => state.auth);

  const next = () => {
    if (activeStep !== 2) {
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
    </AuthLandingLayout>
  );
};
export default LogIn;

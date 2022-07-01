import { useState } from 'react';

import LoginAccount from './Tabs/LoginAccount';
import VerifyPhone from '../../components/VerifyPhone';
import AuthLandingLayout from '../../components/AuthLandingLayout';

const LogIn = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && <LoginAccount next={next} />}
      {activeStep === 1 && <VerifyPhone next={next} />}
    </AuthLandingLayout>
  );
};
export default LogIn;

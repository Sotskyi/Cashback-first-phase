import { useState } from 'react';

import ResetPassword from './Tabs/ResetPassword';
import VerifyPhone from '../../components/VerifyPhone';
import SetNewPassword from './Tabs/SetNewPassword';
import AuthLandingLayout from '../../components/AuthLandingLayout';

const LogIn = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && <ResetPassword next={next} />}
      {activeStep === 1 && <VerifyPhone next={next} />}
      {activeStep === 2 && <SetNewPassword next={next} />}
    </AuthLandingLayout>
  );
};
export default LogIn;

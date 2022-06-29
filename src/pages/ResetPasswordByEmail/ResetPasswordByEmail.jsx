import { useState } from 'react';

import ResetPassword from './Tabs/ResetPassword';
import SetNewPasswordSuccess from './Tabs/SetNewPasswordSuccess';
import AuthLandingLayout from '../../components/AuthLandingLayout';

const ResetPasswordByEmail = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && <ResetPassword next={next} />}
      {activeStep === 1 && <SetNewPasswordSuccess next={next} />}
    </AuthLandingLayout>
  );
};
export default ResetPasswordByEmail;

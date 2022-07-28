import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import ResetPassword from './Tabs/ResetPassword';
import SetNewPasswordSuccess from './Tabs/SetNewPasswordSuccess';
import SetNewPassword from '../../components/SetNewPassword';
import AuthLandingLayout from '../../components/layouts/AuthLandingLayout';

const ResetPasswordByEmail = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [email, setEmail] = useState('');
  const { search } = useLocation();
  const token = search.split('token=')[1];

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
      {activeStep === 0 && !token && (
        <ResetPassword next={next} email={email} setEmail={setEmail} />
      )}
      {activeStep === 1 && !token && (
        <SetNewPasswordSuccess next={next} email={email} />
      )}
      {!!token && <SetNewPassword token={token} />}
    </AuthLandingLayout>
  );
};
export default ResetPasswordByEmail;

import { useState } from 'react';

import ResetPassword from './Tabs/ResetPassword';
import VerifyPhone from '../../components/VerifyPhone';
import SetNewPassword from '../../components/SetNewPassword';
import AuthLandingLayout from '../../components/layouts/AuthLandingLayout';

const ResetPasswordByPhone = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [creds, setCreds] = useState({
    phoneNumber: '',
  });

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setCreds({ ...creds, [e.target.id]: value });
  };

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && (
        <ResetPassword
          next={next}
          creds={creds}
          setCreds={setCreds}
          handleChange={handleChange}
        />
      )}
      {activeStep === 1 && (
        <VerifyPhone
          next={next}
          setCreds={setCreds}
          creds={creds}
          useFor='resetPasswordBySms'
        />
      )}
      {activeStep === 2 && <SetNewPassword next={next} creds={creds} />}
    </AuthLandingLayout>
  );
};
export default ResetPasswordByPhone;

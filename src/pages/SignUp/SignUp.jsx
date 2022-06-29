import { useState } from 'react';

import AuthLandingLayout from '../../components/AuthLandingLayout';
import CreateAcount from './Tabs/CreateAcount';
import VeriphyPhone from './Tabs/VerifyPhone';
import PersonalDetails from './Tabs/PersonalDetails';
import NetworkDetails from './Tabs/NetworkDetails';

const SignUp = () => {
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
      {activeStep === 0 && <CreateAcount next={next} />}
      {activeStep === 1 && <VeriphyPhone next={next} />}
      {activeStep === 2 && <PersonalDetails next={next} />}
      {activeStep === 3 && <NetworkDetails next={next} />}
    </AuthLandingLayout>
  );
};
export default SignUp;

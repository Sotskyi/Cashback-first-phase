import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthLandingLayout from '../../components/AuthLandingLayout';
import CreateAcount from './Tabs/CreateAcount';
import VeriphyPhone from '../../components/VerifyPhone';
import PersonalDetails from './Tabs/PersonalDetails';
import NetworkDetails from './Tabs/NetworkDetails';
import { register, reset } from '../../redux/slices/authSlice';
import Loader from '../../components/Loader';

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [creds, setCreds] = useState({
    phoneNumber: '+1',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verificationCode: '',
    billingNumber: '+13213212222',
    phonePlan: 'monthly',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, isError } = useSelector((state) => state.auth);

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
    if (activeStep === 3) {
      setCreds({ ...creds });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value.split(' ').join('');
    setCreds({
      ...creds,
      [event.target.id]: value,
    });
  };

  const onSubmit = async () => {
    if (Object.values(creds).every((element) => element !== '')) {
      const resultAction = await dispatch(register(creds));
      if (register.fulfilled.match(resultAction)) {
        navigate('/home');
        dispatch(reset());
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthLandingLayout back={back} activeStep={activeStep}>
      {activeStep === 0 && (
        <CreateAcount creds={creds} handleChange={handleChange} next={next} />
      )}
      {activeStep === 1 && (
        <VeriphyPhone next={next} setCreds={setCreds} creds={creds} />
      )}
      {activeStep === 2 && (
        <PersonalDetails
          creds={creds}
          setCreds={setCreds}
          next={next}
          handleChange={handleChange}
        />
      )}
      {activeStep === 3 && (
        <NetworkDetails
          handleChange={handleChange}
          creds={creds}
          setCreds={setCreds}
          isError={isError}
          onSubmit={onSubmit}
        />
      )}
    </AuthLandingLayout>
  );
};
export default SignUp;

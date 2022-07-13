import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginAccount from './Tabs/LoginAccount';
// import VerifyPhone from '../../components/VerifyPhone';
import AuthLandingLayout from '../../components/AuthLandingLayout';
import { login, reset } from '../../redux/slices/authSlice';
import Loader from '../../components/Loader';

const LogIn = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [creds, setCreds] = useState({
    phoneNumber: '+1',
    password: '',
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
  };

  const handleSubmit = async () => {
    if (Object.values(creds).every((element) => element !== '')) {
      const resultAction = await dispatch(login(creds));
      if (login.fulfilled.match(resultAction)) {
        navigate('/home');
        dispatch(reset());
      }
    }
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
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isError={isError}
        />
      )}
      {/* {activeStep === 1 && (
        <VerifyPhone
          next={next}
          handleSubmit={handleSubmit}
          setCreds={false}
          creds={false}
        />
      )} */}
    </AuthLandingLayout>
  );
};
export default LogIn;

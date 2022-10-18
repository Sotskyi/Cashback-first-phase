import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import AuthLandingLayout from '../../components/layouts/AuthLandingLayout';
import CreateAccount from './Tabs/CreateAccount';
import VerifyPhone from '../../components/VerifyPhone';
import PersonalDetails from './Tabs/PersonalDetails';
import NetworkDetails from './Tabs/NetworkDetails';
import { register, reset } from '../../redux/slices/authSlice';
import Loader from '../../components/lib/Loader';
import { insertString } from '../../utils/helpers';

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const [creds, setCreds] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verificationCode: '',
    billingNumber: '+11111111111',
    phonePlan: 'prepaid',
    carrier: '',
    language: 'en',
    acceptEmails: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const onSubmit = async () => {
    if (Object.values(creds).every((element) => element !== '')) {
      const resultAction = await dispatch(
        register({
          ...creds,
          phoneNumber: insertString('+1', creds.phoneNumber),
        }),
      );

      if (register.fulfilled.match(resultAction)) {
        toast.success(t('NEW_USER_CREATED'));
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
        <CreateAccount creds={creds} handleChange={handleChange} next={next} />
      )}
      {activeStep === 1 && (
        <VerifyPhone
          next={next}
          setCreds={setCreds}
          creds={creds}
          useFor='signup'
        />
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
          onSubmit={onSubmit}
        />
      )}
    </AuthLandingLayout>
  );
};
export default SignUp;

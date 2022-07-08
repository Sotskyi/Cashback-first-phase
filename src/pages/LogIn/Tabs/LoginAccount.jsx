import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import PasswordInput from '../../../components/PasswordInput';

const LoginAccount = ({ next }) => {
  const [creds, setCreds] = useState({ phone: '+1 ', password: '' });
  const classes = useStyles();
  const [checkIsValid, setIsShowError] = useValidator();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setCreds({ ...creds, [e.target.id]: value });
  };

  const onSubmit = () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'phone',
        data: creds.phone,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'password',
        data: creds.password,
        showErrorSync: true,
      })
    ) {
      next();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Log In</div>
        <PhoneNumberInput
          handleChange={handleChange}
          data={creds.phone}
          isError={!checkIsValid({ nameOfData: 'phone', data: creds.phone })}
        />
        <PasswordInput
          handleChange={handleChange}
          isError={
            !checkIsValid({
              nameOfData: 'password',
              data: creds.password,
            })
          }
        />
        <div
          onClick={() => navigate('/reset_password_by_phone')}
          className={classes.navigateLink}
        >
          Forgot password?
        </div>
        <SubmitButton onSubmit={onSubmit} title='Continue' />
      </div>
      <div className={classes.alreadyHaveAcount}>
        Already have an accont?{' '}
        <span
          onClick={() => navigate('/signup')}
          className={classes.navigateLink}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};
export default LoginAccount;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '28px',
    height: '412px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
  },

  alreadyHaveAcount: {
    marginTop: '96px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  navigateLink: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#33CC55',
    cursor: 'pointer',
  },
}));

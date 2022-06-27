import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';

const CreateAcount = ({ next }) => {
  const [phone, setPhone] = useState('+1 ');
  const classes = useStyles();
  const [checkIsValid, setIsShowError] = useValidator();

  const handleChange = (e) => setPhone(e.target.value);

  const onSubmit = () => {
    setIsShowError(true);

    if (
      checkIsValid({ nameOfData: 'phone', data: phone, showErrorSync: true })
    ) {
      next();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Create an account</div>

        <div className={classes.phoneNumberContainer}>
          <label className={classes.phoneNumberLabel} htmlFor='myInput'>
            Phone number
          </label>
          <div className={classes.phoneNumberInputContainer}>
            <img
              className={classes.flag}
              src='assets/images/flags/ca.png'
              alt='menu'
            />
            <div className={classes.divider} />
            <input
              onChange={handleChange}
              className={classes.phoneNumberInput}
              id='myInput'
              type='tel'
              value={phone}
            />
          </div>
        </div>
        {!checkIsValid({ nameOfData: 'phone', data: phone }) && (
          <div className={classes.phoneNumberError}>
            Please enter valid phone number format +1 9999999999{' '}
          </div>
        )}
        <SubmitButton onSubmit={onSubmit} title='Continue' />
      </div>
      <div className={classes.alreadyHaveAcount}>
        Already have an accont?{' '}
        <span className={classes.alreadyHaveAcountLogIn}>Log In</span>
      </div>
    </div>
  );
};
export default CreateAcount;

const useStyles = makeStyles(() => ({
  signUpContainer: {
    width: '1280px',
    height: '720px',
    display: 'flex',
  },
  artSide: {
    width: '720px',
    backgroundColor: '#D9D9D9',
    height: '100%',
  },
  contentSide: {
    flex: '1',
    padding: '40px 56px 48px;',
  },
  languageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageMenuContainer: {
    width: '80px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  languageName: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '125%',
    fontFamily: 'Inter',
    justifyContent: 'space-evenly',
  },

  contentContainer: {
    marginTop: '96px',
    height: '252px',
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
  phoneNumberLabel: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '125%',
  },

  phoneNumberContainer: {
    height: '75px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  phoneNumberInputContainer: {
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
  },
  flag: {
    margin: '16px',
  },
  divider: {
    top: '50%',
    right: '0',
    width: '1px',
    height: '32px',
    backgroundColor: '#0000000f',
  },
  phoneNumberInput: {
    marginLeft: '16px',
    outline: 'none',
    border: 'none',
    height: '32px',
    fontSize: '20px',
    fontFamily: 'Inter',
  },
  phoneNumberError: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
  },
  alreadyHaveAcount: {
    marginTop: '216px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  alreadyHaveAcountLogIn: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#33CC55',
  },
}));

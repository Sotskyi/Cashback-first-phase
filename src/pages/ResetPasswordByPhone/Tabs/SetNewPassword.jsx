import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PasswordInput from '../../../components/PasswordInput';

const SetNewPassword = ({ next }) => {
  const [creds, setCreds] = useState({ password: '', confirmPassword: '' });
  const classes = useStyles();
  const [checkIsValid, setIsShowError] = useValidator();

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
        nameOfData: 'passwordEqual',
        data: creds,
        showErrorSync: true,
      })
    ) {
      next();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Set new password</div>
        <PasswordInput
          handleChange={handleChange}
          isError={
            !checkIsValid({
              nameOfData: 'password',
              data: creds.password,
            })
          }
        />
        <PasswordInput
          title='Confirm new password'
          handleChange={handleChange}
          errorMessage='Passwords do not match'
          id='confirmPassword'
          isError={
            !checkIsValid({
              nameOfData: 'passwordEqual',
              data: creds,
            })
          }
        />

        <SubmitButton onSubmit={onSubmit} title='Continue' />
      </div>
    </div>
  );
};
export default SetNewPassword;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '68px',
    height: '380px',
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
}));

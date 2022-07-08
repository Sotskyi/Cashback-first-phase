import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

const ResetPassword = ({ next }) => {
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
      })
    ) {
      next();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Reset your password</div>
        <PhoneNumberInput
          handleChange={handleChange}
          data={creds.phone}
          isError={!checkIsValid({ nameOfData: 'phone', data: creds.phone })}
        />
        <div className={classes.alreadyHaveAcount}>
          Already have an accont?{' '}
          <span
            onClick={() => navigate('/reset_password_by_email')}
            className={classes.navigateLink}
            style={{ fontSize: '16px', marginLeft: '8px' }}
          >
            Use email
          </span>
        </div>
        <div className={classes.navigateLink}>
          <span onClick={() => navigate('/login')}>Back to Log in</span>{' '}
          <div className={classes.submitWrapper}>
            <SubmitButton onSubmit={onSubmit} title='Send code' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '68px',
    height: '324px',
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
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'start',
  },

  navigateLink: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '0.02em',
    color: '#33CC55',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitWrapper: {
    width: '234px',
  },
}));

import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import PasswordInput from '../../../components/PasswordInput';
import { login } from '../../../redux/slices/authSlice';

const LoginAccount = ({ creds, handleChange, next }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checkIsValid, setIsShowError] = useValidator();
  const navigate = useNavigate();

  const onSubmit = async () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'phone',
        data: creds.phoneNumber,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'password',
        data: creds.password,
        showErrorSync: true,
      })
    ) {
      const resultAction = await dispatch(login(creds));
      if (login.fulfilled.match(resultAction)) {
        next();
        // dispatch(reset());
      }
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Log In</div>
        <PhoneNumberInput
          handleChange={handleChange}
          data={creds.phoneNumber}
          isError={
            !checkIsValid({
              nameOfData: 'phone',
              data: creds.phoneNumber,
            })
          }
        />
        <PasswordInput
          value={creds.password}
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
      <div className={classes.newAccount}>
        New to Telco Rewards?{' '}
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

  newAccount: {
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

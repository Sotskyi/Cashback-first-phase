import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/form/SubmitButton';
import { resetPasswordByEmail } from '../../../redux/slices/authSlice';

const ResetPassword = ({ next, email, setEmail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [checkIsValid, setIsShowError] = useValidator();
  const navigate = useNavigate();

  const handleChange = (e) => setEmail(e.target.value);

  const onSubmit = () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'email',
        data: email,
        showErrorSync: true,
      })
    ) {
      dispatch(resetPasswordByEmail(email));
      next();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Reset your password</div>
        <div className={classes.subTitle}>
          Enter the email address you used to register with.
        </div>
        <div className={classes.inputWrapper}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
            }}
          >
            Email
          </InputLabel>
          <OutlinedInput
            onChange={handleChange}
            id='email'
            sx={{
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
              '& input': {
                padding: '8px 8px 8px 16px',
              },
            }}
            error={
              !checkIsValid({
                nameOfData: 'email',
                data: email,
              })
            }
          />
          {!checkIsValid({
            nameOfData: 'email',
            data: email,
          }) && (
            <div className={classes.errorMessage}>
              Please enter valid email example@gmail.com
            </div>
          )}
        </div>
        <span
          onClick={() => navigate('/reset_password_by_phone')}
          className={classes.navigateLink}
        >
          Do not have access to this email?
        </span>
        <div className={classes.navigateLink}>
          <div
            onClick={() => navigate('/login')}
            className={classes.navigateLinkBackToLogin}
          >
            Back to Log in
          </div>
          <div className={classes.submitWrapper}>
            <SubmitButton onSubmit={onSubmit} title='Send code' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '68px',
    height: '356px',
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
  },
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '-0.01em',
  },
  alreadyHaveAccount: {
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
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  navigateLinkBackToLogin: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '32px',
    },
  },

  submitWrapper: {
    width: '234px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

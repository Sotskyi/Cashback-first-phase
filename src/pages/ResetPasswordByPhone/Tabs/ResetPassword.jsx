import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SubmitButton from '../../../components/form/SubmitButton';
import PhoneNumberInput from '../../../components/form/PhoneNumberInput';
import { resetPasswordBySms } from '../../../redux/slices/authSlice';
import { useValidator } from '../../../hooks/useValidator';
import { insertString } from '../../../utils/helpers';

const ResetPassword = ({ next, creds, handleChange }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [checkIsValid, setIsShowError] = useValidator();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'phone',
        data: creds.phoneNumber,
        showErrorSync: true,
      })
    ) {
      const sendPhoneNumber = async () => {
        const resultAction = await dispatch(
          resetPasswordBySms(insertString('+1', creds.phoneNumber)),
        );
        if (resetPasswordBySms.fulfilled.match(resultAction)) {
          next();
        }
      };

      sendPhoneNumber();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('RESET_YOUR_PASSWORD')}</div>
        <PhoneNumberInput
          handleChange={handleChange}
          data={creds.phoneNumber}
          isError={
            !checkIsValid({ nameOfData: 'phone', data: creds.phoneNumber })
          }
        />
        <div className={classes.alreadyHaveAccount}>
          <span style={{ whiteSpace: 'nowrap' }}>
            {t('DO_NOT_HAVE_ACCESS_TO_PHONE')}&nbsp;
          </span>
          <div
            onClick={() => navigate('/reset_password_by_email')}
            className={classes.navigateLink}
          >
            {t('USE_EMAIL')}
          </div>
        </div>
        <div className={classes.navigateLink}>
          <div
            onClick={() => navigate('/login')}
            className={classes.navigateLinkBackToLogin}
          >
            {t('BACK_TO_LOGIN')}
          </div>{' '}
          <div className={classes.submitWrapper}>
            <SubmitButton onSubmit={onSubmit} title={t('SEND_CODE')} />
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
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      height: '411px',
    },
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
  alreadyHaveAccount: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      textAlign: 'start',
    },
  },
  navigateLink: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
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
      marginLeft: '0px',
      alignItems: 'start',
    },
  },
  navigateLinkBackToLogin: {
    marginBottom: '0px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '40px',
    },
  },
  submitWrapper: {
    width: '234px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

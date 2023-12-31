import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useValidator } from '../../../hooks/useValidator';
import { insertString } from '../../../utils/helpers';
import SubmitButton from '../../../components/form/SubmitButton';
import PhoneNumberInput from '../../../components/form/PhoneNumberInput';
import PasswordInput from '../../../components/form/PasswordInput';
import { login } from '../../../redux/slices/authSlice';

const LoginAccount = ({ creds, handleChange }) => {
  const { store } = useSelector((state) => state.stores);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
      const resultAction = await dispatch(
        login({ ...creds, phoneNumber: insertString('+1', creds.phoneNumber) }),
      );
      if (login.fulfilled.match(resultAction)) {
        if (store.id) {
          navigate(`/store/${store.id}`, { state: { data: store } });
        } else navigate('/home');
      }
    }
  };

  return (
    <form>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('LOGIN')}</div>
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
          {t('FORGOT_PASSWORD')}
        </div>

        <SubmitButton onSubmit={onSubmit} title={t('CONTINUE')} />
      </div>
      <div className={classes.newAccount}>
        {t('NEW_TO_TELCOREWARDS')}&nbsp;
        <span
          onClick={() => navigate('/signup')}
          className={classes.navigateLink}
        >
          {t('SIGN_UP')}
        </span>
      </div>
    </form>
  );
};
export default LoginAccount;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '28px',
    height: '412px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      height: '430px',
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

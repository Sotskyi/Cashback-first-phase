import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import { useValidator } from '../hooks/useValidator';
import SubmitButton from './form/SubmitButton';
import PasswordInput from './form/PasswordInput';
import {
  setNewPasswordByPhone,
  setNewPasswordByEmail,
} from '../redux/slices/authSlice';
import { insertString } from '../utils/helpers';

const SetNewPassword = ({ creds, token }) => {
  const [equalityPassword, setEqualityPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [checkIsValid, setIsShowError] = useValidator();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setEqualityPassword({ ...equalityPassword, [e.target.id]: value });
  };

  const onSubmit = async () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'passwordEqual',
        data: equalityPassword,
        showErrorSync: true,
      })
    ) {
      if (token) {
        const resultAction = await dispatch(
          setNewPasswordByEmail({
            token,
            password: equalityPassword.confirmPassword,
          }),
        );
        if (setNewPasswordByEmail.fulfilled.match(resultAction)) {
          toast.success(t('NEW_PASSWORD_CREATED'));
        }
      } else {
        const resultAction = await dispatch(
          setNewPasswordByPhone({
            phoneNumber: insertString('+1', creds.phoneNumber),
            password: equalityPassword.confirmPassword,
          }),
        );
        if (setNewPasswordByPhone.fulfilled.match(resultAction)) {
          toast.success(t('NEW_PASSWORD_CREATED'));
        }
      }

      navigate('/login');
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('SET_NEW_PASSWORD')}</div>
        <PasswordInput
          handleChange={handleChange}
          isError={
            !checkIsValid({
              nameOfData: 'password',
              data: equalityPassword.password,
            })
          }
        />
        <PasswordInput
          title={t('CONFIRM_NEW_PASSWORD')}
          handleChange={handleChange}
          errorMessage={t('PASSWORD_NOT_MATCH')}
          id='confirmPassword'
          isError={
            !checkIsValid({
              nameOfData: 'passwordEqual',
              data: equalityPassword,
            })
          }
        />
        <SubmitButton onSubmit={onSubmit} title={t('CONTINUE')} />
      </div>
    </div>
  );
};
export default SetNewPassword;

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
}));

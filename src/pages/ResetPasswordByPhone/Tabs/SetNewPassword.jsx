import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PasswordInput from '../../../components/PasswordInput';
import { setNewPassword } from '../../../redux/slices/authSlice';

const SetNewPassword = ({ creds }) => {
  const [equalityPassword, setEqualityPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const [checkIsValid, setIsShowError] = useValidator();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setEqualityPassword({ ...equalityPassword, [e.target.id]: value });
  };

  const onSubmit = () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'passwordEqual',
        data: equalityPassword,
        showErrorSync: true,
      })
    ) {
      dispatch(
        setNewPassword({
          phoneNumber: creds.phoneNumber,
          password: equalityPassword.confirmPassword,
        }),
      );
      toast.success('new password successfully created');
      navigate('/login');
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
              data: equalityPassword.password,
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
              data: equalityPassword,
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

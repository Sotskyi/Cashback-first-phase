import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/SubmitButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

const CreateAcount = ({ next }) => {
  const [phone, setPhone] = useState('+1 ');
  const classes = useStyles();
  const navigate = useNavigate();
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
        <PhoneNumberInput
          handleChange={handleChange}
          data={phone}
          isError={!checkIsValid({ nameOfData: 'phone', data: phone })}
        />
        <SubmitButton onSubmit={onSubmit} title='Continue' />
      </div>
      <div className={classes.alreadyHaveAcount}>
        Already have an accont?{' '}
        <span
          onClick={() => navigate('/login')}
          className={classes.alreadyHaveAcountLogIn}
        >
          Log In
        </span>
      </div>
    </div>
  );
};
export default CreateAcount;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '68px',
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
    cursor: 'pointer',
  },
}));

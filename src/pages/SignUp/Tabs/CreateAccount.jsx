import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/form/SubmitButton';
import PhoneNumberInput from '../../../components/form/PhoneNumberInput';
import { verifyPhone } from '../../../redux/slices/authSlice';
import { insertString } from '../../../utils/helpers';

const CreateAccount = ({ next, handleChange, creds }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [checkIsValid, setIsShowError] = useValidator();

  const onSubmit = () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'phone',
        data: creds.phoneNumber,
        showErrorSync: true,
      })
    ) {
      dispatch(verifyPhone(insertString('+1', creds.phoneNumber)));
      next();
    }
  };

  return (
    <form>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('CREATE_ACCOUNT')}</div>
        <PhoneNumberInput
          handleChange={handleChange}
          data={creds.phoneNumber}
          isError={
            !checkIsValid({ nameOfData: 'phone', data: creds.phoneNumber })
          }
        />
        <SubmitButton onSubmit={onSubmit} title={t('CONTINUE')} />
      </div>
      <div className={classes.alreadyHaveAccount}>
        {t('ALREADY_HAVE_ACCOUNT')}&nbsp;
        <span
          onClick={() => navigate('/login')}
          className={classes.alreadyHaveAccountLogIn}
        >
          {t('LOGIN')}
        </span>
      </div>
    </form>
  );
};
export default CreateAccount;

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  alreadyHaveAccount: {
    marginTop: '216px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  alreadyHaveAccountLogIn: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#33CC55',
    cursor: 'pointer',
  },
}));

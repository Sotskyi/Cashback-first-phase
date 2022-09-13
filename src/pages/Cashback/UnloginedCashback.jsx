import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SubmitButton from '../../components/form/SubmitButton';

const UnloginedCashback = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={classes.cashbackContainer}>
      <div className={classes.cashbackBodyContainer}>
        <div className={classes.title}>{t('NO_REWARDS_YET')}</div>
        <div className={classes.subTitle}>{t('REDUCE_YOUR_MOBILE_BILL')}</div>
        <div className={classes.submitButtonWrapper}>
          <SubmitButton title='Log in' onSubmit={() => navigate('/login')} />
        </div>
        <div className={classes.dontHaveAccount}>
          {t('DONT_HAVE_ACCOUNT')}{' '}
          <span
            onClick={() => navigate('/signup')}
            className={classes.navigateLink}
          >
            {t('SIGNUP')}
          </span>
        </div>
      </div>
    </div>
  );
};
export default UnloginedCashback;

const useStyles = makeStyles((theme) => ({
  cashbackContainer: {
    height: '720px',
  },
  cashbackBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Source Sans Pro, sans-serif',
    marginTop: '159px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  subTitle: {
    marginTop: '5px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    color: '#6A6A6A',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  submitButtonWrapper: {
    marginTop: '44px',
    width: '368px',
  },

  dontHaveAccount: {
    marginTop: '212px',
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

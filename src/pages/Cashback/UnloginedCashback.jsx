import { makeStyles } from '@material-ui/core';

import SubmitButton from '../../components/SubmitButton';

const UnloginedCashback = () => {
  const classes = useStyles();

  return (
    <div className={classes.cashbackContainer}>
      <div className={classes.cashbackBodyContainer}>
        <div className={classes.title}>No rewards yet</div>
        <div className={classes.subTitle}>
          Reduce your mobile bill with cash-back.
        </div>
        <div className={classes.submitButtonWrapper}>
          <SubmitButton title='Log in' />
        </div>
        <div className={classes.dontHaveAcount}>
          Don’t have an account?{' '}
          <span
            // onClick={() => navigate('/signup')}
            className={classes.navigateLink}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};
export default UnloginedCashback;

const useStyles = makeStyles(() => ({
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
  },
  submitButtonWrapper: {
    marginTop: '44px',
    width: '368px',
  },

  dontHaveAcount: {
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
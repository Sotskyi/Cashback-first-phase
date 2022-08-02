import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import UnloginedCashback from './UnloginedCashback';
import Switcher from './Components/Switcher';
import CashbackList from './Tabs/CashbackList';
import WithdrawalsList from './Tabs/WithdrawalsList';
import WithdrawalCard from './Components/WithdrawalCard';
import WithdrawalCardActive from './Components/WithdrawalCardActive';

const Cashback = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState('cashback');
  const [isActiveWithdrawCard, setIsActiveWithdrawCard] = useState(false);
  const { isAuth } = useSelector((state) => state.auth);

  const handleIsActveCard = (e) => {
    if (e.target.id === 'submit') {
      setIsActiveWithdrawCard(true);
    } else setIsActiveWithdrawCard(false);
  };

  return (
    <div className={classes.cashbackContainer}>
      {isAuth ? (
        <>
          {' '}
          <div className={classes.forMobileOnly}>
            {isActiveWithdrawCard ? (
              <WithdrawalCardActive handleSubmit={handleIsActveCard} />
            ) : (
              <WithdrawalCard handleSubmit={handleIsActveCard} />
            )}
          </div>
          <div className={classes.bodyContainer}>
            <div className={classes.leftContentContainer}>
              <Switcher activeStep={activeStep} setActiveStep={setActiveStep} />
              {activeStep === 'cashback' && <CashbackList />}
              {activeStep === 'withdrawals' && <WithdrawalsList />}
            </div>
            <div className={classes.rightContentContainer}>
              {isActiveWithdrawCard ? (
                <WithdrawalCardActive handleSubmit={handleIsActveCard} />
              ) : (
                <WithdrawalCard handleSubmit={handleIsActveCard} />
              )}
            </div>
          </div>
        </>
      ) : (
        <UnloginedCashback />
      )}
    </div>
  );
};
export default Cashback;

const useStyles = makeStyles((theme) => ({
  cashbackContainer: {
    // height: '720px',
    boxSizing: 'border-box',
    padding: '32px 72px 0px 72px',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 16px 0px 16px',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      // display: 'flex',
      // flexDirection: 'column',
      // padding: '16px 16px 0px 16px',
    },
  },
  bodyContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  leftContentContainer: {
    width: '680px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  rightContentContainer: {
    marginTop: '26px',
    marginLeft: '112px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  forMobileOnly: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '16px',
    },
  },
}));

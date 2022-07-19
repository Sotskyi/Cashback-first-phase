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

  const auth = true;

  return (
    <div className={classes.cashbackContainer}>
      {isAuth || auth ? (
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
      ) : (
        <UnloginedCashback />
      )}
    </div>
  );
};
export default Cashback;

const useStyles = makeStyles(() => ({
  cashbackContainer: {
    height: '720px',
    boxSizing: 'border-box',
    padding: '32px 72px 0px 72px',
    display: 'flex',
    justifyContent: 'center',
  },
  bodyContainer: {
    display: 'flex',
  },

  leftContentContainer: {
    width: '688px',
  },
  rightContentContainer: {
    marginTop: '26px',
    marginLeft: '112px',
  },
}));

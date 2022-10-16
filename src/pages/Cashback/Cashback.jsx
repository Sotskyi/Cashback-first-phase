import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import UnloginedCashback from './UnloginedCashback';
import Switcher from './Components/Switcher';
import CashbackList from './Tabs/CashbackList';
import WithdrawalsList from './Tabs/WithdrawalsList';
import WithdrawalCardStep1 from './Components/WithdrawalCardStep1';
import WithdrawalCardStep2 from './Components/WithdrawalCardStep2';
import WithdrawalCardStep3 from './Components/WithdrawalCardStep3';

const Cashback = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('cashback');
  const [stepWithdrawalCard, setStepWithdrawalCard] = useState(3);
  const [activeCell, setActiveCell] = useState(false);
  const { isAuth, user } = useSelector((state) => state.auth);
  const { totalCashback } = useSelector((state) => state.cashback);
  const availableMoney = user?.wallet?.balance || 0;

  const cashbackPending = totalCashback?.filter(
    (el) => el.title === 'pending',
  )[0];

  const handleSubmitCard = () => {
    if (stepWithdrawalCard < 3) {
      setStepWithdrawalCard((prev) => prev + 1);
    }
  };

  const handleBackButton = () => {
    if (stepWithdrawalCard > 1) {
      setStepWithdrawalCard((prev) => prev - 1);
    }
  };

  return (
    <div className={classes.cashbackContainer}>
      {isAuth ? (
        <div className={classes.bodyContainer}>
          <div className={classes.leftContentContainer}>
            <Switcher activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'cashback' && <CashbackList />}
            {activeTab === 'withdrawals' && <WithdrawalsList />}
          </div>
          <div className={classes.rightContentContainer}>
            {stepWithdrawalCard === 1 && (
              <WithdrawalCardStep1
                handleSubmit={handleSubmitCard}
                availableCash={availableMoney}
                availableCashPending={parseFloat(cashbackPending?.sum) || 0}
              />
            )}
            {stepWithdrawalCard === 2 && (
              <WithdrawalCardStep2
                handleSubmit={handleSubmitCard}
                handleBackButton={handleBackButton}
                data={user.carrierInfo.carrierFixedValues}
                availableCash={availableMoney || 0}
                activeCell={activeCell}
                setActiveCell={setActiveCell}
              />
            )}
            {stepWithdrawalCard === 3 && (
              <WithdrawalCardStep3
                stillAvailable={availableMoney - activeCell}
                withdrawalMoney={activeCell}
                handleSubmit={handleSubmitCard}
                handleBackButton={handleBackButton}
              />
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

const useStyles = makeStyles((theme) => ({
  cashbackContainer: {
    height: '720px',
    boxSizing: 'border-box',
    padding: '32px 72px 0px 72px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 16px 0px 16px',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
  },
  bodyContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      flexDirection: 'column-reverse',
    },
  },
  leftContentContainer: {
    width: '680px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '16px',
    },
  },
  rightContentContainer: {
    marginTop: '26px',
    marginLeft: '112px',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      display: 'flex',
      justifyContent: 'center',
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

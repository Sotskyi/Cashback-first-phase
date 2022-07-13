import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import UnloginedCashback from './UnloginedCashback';
import Switcher from './Components/Switcher';
import CashbackList from './Tabs/CashbackList';

const Cashback = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState('cashback');
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={classes.cashbackContainer}>
      {isAuth ? (
        <div className={classes.bodyContainer}>
          <div className={classes.leftContentContainer}>
            <Switcher activeStep={activeStep} setActiveStep={setActiveStep} />
            {activeStep === 'cashback' && <CashbackList />}
            {activeStep === 'withdrawals' && <div>widthradwak</div>}
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
  },
  bodyContainer: {
    boxSizing: 'border-box',
    padding: '32px 72px 0px 72px',
  },

  leftContentContainer: {
    width: '688px',
  },
}));

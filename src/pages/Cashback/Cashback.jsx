import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import UnloginedCashback from './UnloginedCashback';
import Switcher from './Components/Switcher';
import CashbackList from './Tabs/CashbackList';
import withdrawalsWhite from '../../assets/images/icons/withdrawalsWhite.svg';

const Cashback = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState('cashback');
  const { isAuth } = useSelector((state) => state.auth);

  const auth = true;
  return (
    <div className={classes.cashbackContainer}>
      {isAuth || auth ? (
        <div className={classes.bodyContainer}>
          <div className={classes.leftContentContainer}>
            <Switcher activeStep={activeStep} setActiveStep={setActiveStep} />
            {activeStep === 'cashback' && <CashbackList />}
            {activeStep === 'withdrawals' && <div>widthdrow</div>}
          </div>
          <div className={classes.rightContentContainer}>
            <div className={classes.availableCashTitle}>AVAILABLE</div>
            <div className={classes.availableCash}>$ 26.47</div>
            <div className={classes.titleContainers}>
              <div>PENDING</div>
              <div>TOTAL</div>
            </div>
            <div className={classes.priceContainers}>
              <div>$ 26.47</div>
              <div>$ 26.47</div>
            </div>
            <div className={classes.withdrowButton}>
              Withdrow
              <img
                src={withdrawalsWhite}
                className={classes.withdrawalsIcon}
                alt='cash'
              />{' '}
            </div>
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
    width: '336px',
    height: '312px',
    borderRadius: '32px',
    background: '#33CC55',
    marginTop: '26px',
    marginLeft: '112px',
    boxSizing: 'border-box',
    padding: '16px',
  },
  availableCashTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
    textAlign: 'center',
  },
  availableCash: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '56px',
    fontWeight: '700',
    fontSize: '56px',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
  },
  titleContainers: {
    marginTop: '100px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  priceContainers: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
  },
  withdrowButton: {
    marginTop: '24px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.16)',
    borderRadius: '26px',
    color: '#FFFFFF',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.01em',
  },
  withdrawalsIcon: {
    marginLeft: '10px',
  },
}));

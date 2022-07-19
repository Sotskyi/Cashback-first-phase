import { makeStyles } from '@material-ui/core';

import withdrawals from '../../../assets/images/icons/withdrawals.svg';
import arrowBackWhite from '../../../assets/images/icons/arrowBackWhite.svg';
import arrowDownWhite from '../../../assets/images/icons/arrowDownWhite.svg';

const WithdrawalCardActive = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.withdrawalCardContainer}>
      <div className={classes.backButton} onClick={handleSubmit}>
        {' '}
        <img
          src={arrowBackWhite}
          className={classes.arrowBackWhite}
          alt='cash'
        />
      </div>
      <div className={classes.availableCashTitle}>AVAILABLE</div>
      <div className={classes.availableCash}>$ 26.47</div>
      <div className={classes.withdrowAll}>
        WITHDRAW ALL
        <img
          src={arrowDownWhite}
          className={classes.withdrawalsIcon}
          alt='cash'
        />{' '}
      </div>
      <div className={classes.withdrowIndicatorContainer}>
        <div className={classes.withdrowIndicator}>
          $ <span>0</span>.00
        </div>
      </div>
      <div className={classes.withdrowButton}>
        Withdrow
        <img
          src={withdrawals}
          className={classes.withdrawalsIcon}
          alt='cash'
        />{' '}
      </div>
    </div>
  );
};
export default WithdrawalCardActive;

const useStyles = makeStyles(() => ({
  withdrawalCardContainer: {
    width: '336px',
    height: '312px',
    borderRadius: '32px',
    background: '#33CC55',
    boxSizing: 'border-box',
    padding: '16px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.16)',
    width: '32px',
    height: '32px',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    cursor: 'pointer',
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
    marginTop: '20px',
  },
  availableCash: {
    marginTop: '10px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
  },
  withdrowAll: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '22px',
    height: '16px',
  },
  withdrowIndicatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  withdrowIndicator: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '40px',
    borderBottom: '1px solid white',
    letterSpacing: '0.015em',
    color: '#FFFFFF',
  },
  withdrowButton: {
    marginTop: '32px',
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: '26px',
    color: '#000000',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.01em',
    cursor: 'pointer',
  },
  withdrawalsIcon: {
    marginLeft: '10px',
  },
}));

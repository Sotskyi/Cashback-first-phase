import { makeStyles } from '@material-ui/core';

import withdrawalsWhite from '../../../assets/images/icons/withdrawalsWhite.svg';

const WithdrawalCard = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.withdrawalCardContainer}>
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
      <div
        className={classes.withdrowButton}
        onClick={handleSubmit}
        id='submit'
      >
        Withdrow
        <img
          src={withdrawalsWhite}
          className={classes.withdrawalsIcon}
          alt='cash'
        />{' '}
      </div>
    </div>
  );
};
export default WithdrawalCard;

const useStyles = makeStyles(() => ({
  withdrawalCardContainer: {
    width: '336px',
    height: '312px',
    borderRadius: '32px',
    background: '#33CC55',
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
    cursor: 'pointer',
  },
  withdrawalsIcon: {
    marginLeft: '10px',
  },
}));

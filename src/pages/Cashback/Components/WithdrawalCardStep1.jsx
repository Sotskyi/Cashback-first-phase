import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import withdrawalsWhite from '../../../assets/images/icons/withdrawalsWhite.svg';

const WithdrawalCardStep1 = ({
  handleSubmit,
  availableCash,
  availableCashPending,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.withdrawalCardContainer}>
      <div className={classes.availableCashTitle}>{t('AVAILABLE')}</div>
      <div className={classes.availableCash}>$ {availableCash}</div>
      <div className={classes.titleContainers}>
        <div>{t('PENDING')}</div>
        <div>{t('TOTAL')}</div>
      </div>
      <div className={classes.priceContainers}>
        <div>$ {availableCashPending}</div>
        <div>$ {availableCash + availableCashPending}</div>
      </div>
      <div className={classes.withdrawButton} onClick={handleSubmit} id='1'>
        {t('WITHDRAW')}
        <img
          src={withdrawalsWhite}
          className={classes.withdrawalsIcon}
          alt='cash'
        />{' '}
      </div>
    </div>
  );
};
export default WithdrawalCardStep1;

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
  withdrawButton: {
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

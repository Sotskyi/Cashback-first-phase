import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import arrowBackWhite from '../../../assets/images/icons/arrowBackWhite.svg';

const WithdrawalCardStep3 = ({
  handleSubmit,
  handleBackButton,
  stillAvailable,
  withdrawalMoney,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.withdrawalCardContainer}>
      <div className={classes.headerContainer}>
        <div className={classes.backButton} onClick={handleBackButton}>
          <img
            src={arrowBackWhite}
            className={classes.arrowBackWhite}
            alt='cash'
          />
        </div>
        <div className={classes.headerTitle}>Go back to change</div>
      </div>

      <div className={classes.availableCashbodyContainer}>
        <div className={classes.addedCash}>$ {withdrawalMoney}</div>
        <div className={classes.addedCashTitle}>
          {t('ADDED_TO_MOBILE_BALANCE')}
        </div>
        <div className={classes.stillAvailableCashContainer}>
          <div className={classes.stillAvailableCash}>$ {stillAvailable}</div>
          <div className={classes.addedCashTitle}>{t('STILL_AVAILABLE')}</div>
        </div>
      </div>
      <div className={classes.withdrawButton} onClick={handleSubmit}>
        {t('SHOP_FOR_MORE_CASH_BACK')}
      </div>
    </div>
  );
};
export default WithdrawalCardStep3;

const useStyles = makeStyles(() => ({
  withdrawalCardContainer: {
    width: '336px',
    height: '514px',
    borderRadius: '32px',
    background: '#33CC55',
    boxSizing: 'border-box',
    padding: '16px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.16)',
    width: '32px',
    height: '32px',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
    textAlign: 'center',
    marginLeft: '16px',
  },
  availableCashbodyContainer: {
    margin: '109px 0px 109px 0px',
    height: '176px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addedCash: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '48px',
    letterSpacing: '0.08em',
    color: '#FFFFFF',
  },
  stillAvailableCash: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
  },
  addedCashTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
    textAlign: 'center',
    width: '180px',
  },
  cellsContainer: {
    margin: '16px 0 16px 0',
    height: '389px',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
  withdrawButton: {
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: '26px',
    color: '#000000',
    height: '56px',
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

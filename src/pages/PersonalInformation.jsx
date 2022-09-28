import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { makeUpperCase } from '../utils/helpers';

const PersonalInformation = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.leftContent}>
          <div className={classes.header}>
            <div className={classes.initials}>
              {user.firstName} {user.lastName}
            </div>
            <div className={classes.email}>{user.email}</div>
          </div>

          <div className={classes.bodyContainer}>
            <div className={classes.phoneNumberContainer}>
              <div className={classes.phoneNumber}>{user.phoneNumber}</div>
              <div className={classes.subTitle}>{t('PHONE')}</div>
            </div>
            <div className={classes.phonePlanContainer}>
              <div className={classes.phonePlanName}>
                <div className={classes.phonePlanTitle}>
                  {user.carrierInfo.carrierTitle}{' '}
                </div>
                <div className={classes.subTitle}>{t('CARRIER')} </div>
              </div>
              <div className={classes.phonePlanName}>
                <div className={classes.phonePlanTitle}>
                  {makeUpperCase(user.phonePlan)}
                </div>
                <div className={classes.subTitle}>{t('PHONE_PLAN')}</div>
              </div>
            </div>
            <div className={classes.currentBalanceContainer}>
              <div className={classes.currentBalanceLabel}>
                {t('CURRENT_BALANCE')}
              </div>
              <div className={classes.currentBalanceNumbers}>
                $ {user.wallet.balance || 0}
              </div>
            </div>
            <div className={classes.billingNumberContainer}>
              <div className={classes.billingNumber}>{user.billingNumber}</div>
              <div className={classes.billingNumberTitle}>
                {t('BILLING_NUMBER')}
              </div>
            </div>
            <div className={classes.englishContainer}>
              <div
                className={`${classes.chip} ${
                  user.language === 'en' && classes.activeChip
                }`}
              >
                English
              </div>
              <div
                className={`${classes.chip} ${
                  user.language === 'fr' && classes.activeChip
                }`}
              >
                French
              </div>
            </div>
          </div>
        </div>
        {/* <div className={classes.rightContent}> right!</div> */}
      </div>
    </div>
  );
};
export default PersonalInformation;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '752px',
    height: '612px',
    [theme.breakpoints.down('sm')]: {
      height: '720px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingInline: '16px',
      // height: '1292px',
      alignItems: 'center',
    },
    marginTop: '48px',
    // justifyContent: 'space-between',
  },
  leftContent: {
    display: 'flex',
    justifyContent: 'center',

    flexDirection: 'column',
    padding: '32px 16px 16px 16px',
    width: '304px',
    height: '520px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
    marginTop: '7px',
    textAlign: 'center',
  },
  header: {
    height: '52px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  initials: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '120%',
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
  phoneNumberContainer: {
    marginTop: '32px',
    width: '100%',
    height: '96px',
    background: '#FAFAFA',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '24px 0px 16px 0px',
  },
  phoneNumber: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
  },
  phonePlanContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  phonePlanName: {
    width: '144px',
    height: '92px',
    padding: '24px 0px 16px 0px',
    background: '#FAFAFA',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'Inter',
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  currentBalanceContainer: {
    width: '100%',
    height: '76px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  currentBalanceLabel: {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: '#000000',
    fontWeight: '600',
  },
  currentBalanceNumbers: {
    borderRadius: '8px',
    border: '1px solid #EAEAEA',
    height: '48px',
    padding: '14px 0px 14px 14px',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: '125%',
    fontSize: '16px',
  },
  billingNumberContainer: {
    height: '76px',
    width: '100%',
    borderRadius: '8px',
    background: '#FAFAFA',
    padding: '16px 0px 16px 0px',
    boxSizing: 'border-box',
  },
  billingNumber: {
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Inter',
    lineHeight: '20px',
    letterSpacing: '0.01em',
  },
  billingNumberTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
    marginTop: '8px',
    textAlign: 'center',
  },
  englishContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    height: '40px',
    border: '1px solid #EAEAEA',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: '#6A6A6A',
    borderRadius: '26px',
  },
  chip: {
    width: '49%',
    height: '32px',
    borderRadius: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeChip: {
    background: '#33CC55',
    borderRadius: '22px',
    color: '#FFFFFF;',
  },
  rightContent: {},
}));

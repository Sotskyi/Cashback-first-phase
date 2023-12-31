import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import cashback from '../../../assets/images/icons/cashback.svg';
import cashbackOutlined from '../../../assets/images/icons/cashbackOutlined.svg';
import withdrawals from '../../../assets/images/icons/withdrawals.svg';
import withdrawalsOutlined from '../../../assets/images/icons/withdrawalsOutlined.svg';

const Switcher = ({ activeTab, setActiveTab }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.switcherContainer}>
      <div
        className={`${classes.switchWrapper} ${
          activeTab === 'cashback' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('cashback')}
      >
        <div>{t('CASHBACK')}</div>
        <img
          src={activeTab === 'cashback' ? cashback : cashbackOutlined}
          className={classes.switchIcon}
          alt='cash'
        />
      </div>
      <div
        className={`${classes.switchWrapper} ${
          activeTab === 'withdrawals' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('withdrawals')}
      >
        <div>{t('WITHDRAWALS')}</div>
        <img
          src={activeTab === 'withdrawals' ? withdrawals : withdrawalsOutlined}
          className={classes.switchIcon}
          alt='cash'
        />
      </div>
    </div>
  );
};
export default Switcher;

const useStyles = makeStyles((theme) => ({
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
  switcherContainer: {
    width: '100%',
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    [theme.breakpoints.down('md')]: {
      width: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  switchWrapper: {
    color: '#6A6A6A',
    borderRadius: '22px',
    width: '340px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    cursor: 'pointer',
  },
  switchIcon: {
    marginLeft: '10px',
    width: '20px',
    height: '20px',
  },
  active: {
    background: '#FAFAFA',
    color: '#000000',
    fontWeight: '600',
  },
}));

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core';
import { redirectToSpecialOffer } from '../redux/slices/storesSlice';
import Loader from './lib/Loader';

const SpecialOffer = ({
  title,
  description,
  offerId,
  isAuth,
  banner,
  baseReward,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [triggerLoader, setTriggerLoader] = useState(false);
  const handleRedirectToSpecialOffer = () => {
    if (!triggerLoader) {
      setTriggerLoader(true);
      if (isAuth) {
        return dispatch(redirectToSpecialOffer(offerId));
      }
      return navigate('/login');
    }
    return null;
  };

  return (
    <div className={classes.specialOfferWrapper} key={offerId}>
      <div className={classes.titlesContainer}>
        <img className={classes.banner} src={banner} alt='banner' />
        <div className={classes.titlesWrapper}>
          <div className={classes.title}>{title}</div>
          <div className={classes.subTitle}>{description}</div>{' '}
        </div>
      </div>
      <div className={classes.bottomWrapper}>
        {' '}
        <div className={classes.percentage}>{baseReward}%</div>
        <div
          className={classes.shopButton}
          onClick={handleRedirectToSpecialOffer}
        >
          {triggerLoader && (
            <Loader delay={3000} setTriggerLoader={setTriggerLoader} />
          )}
          {!triggerLoader && (isAuth ? t('SHOP_NOW') : t('LOG_IN_TO_SHOP'))}
        </div>{' '}
      </div>
    </div>
  );
};
export default SpecialOffer;

const useStyles = makeStyles((theme) => ({
  specialOfferWrapper: {
    marginTop: '10px',
    width: '336px',
    height: '200px',
    boxSizing: 'border-box',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#FAFAFA',
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: {
      width: 'calc(50% - 10px)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '210px',
      marginTop: '8px',
    },
  },

  banner: {
    width: '78px',
    height: '78px',
    float: 'left',
    borderRadius: '48px',
    marginRight: '7px',
    marginBottom: '2px',
  },
  titlesWrapper: {},

  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    color: '#6A6A6A',
    wordBreak: 'break-word',
  },
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentage: {
    display: 'flex',
    alignContent: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '0.02em',
    color: '#33CC55',
  },
  shopButton: {
    cursor: 'pointer',
    width: '234px',
    height: '100%',
    padding: '3px 0px 3px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #EAEAEA',
    borderRadius: '20px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.02em',
    color: '#33CC55',
    background: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
}));

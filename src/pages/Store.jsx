import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SpecialOffer from '../components/SpecialOffer';
import {
  getStore,
  redirectToStore,
  redirectToSpecialOffer,
  reset,
} from '../redux/slices/storesSlice';
import Loader from '../components/lib/Loader';

const Store = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  // eslint-disable-next-line no-shadow
  const { isAuth } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-shadow
  // const { isLoading } = useSelector((state) => state.stores);
  // const languageFromState = state.data.translations[0].language.code;
  const currentLanguage = i18n.language;
  const [triggerLoader, setTriggerLoader] = useState(false);
  const [store, setStore] = useState({
    backgroundImage: { url: '' },
    baseReward: '',
    translations: [
      { id: '', title: '', description: '', specialRewardTitle: null },
    ],
    specialOffers: [],
  });

  useEffect(async () => {
    const resultAction = await dispatch(
      getStore({ id, languageCode: currentLanguage }),
    );
    if (getStore.rejected.match(resultAction)) {
      navigate('/home');
    } else {
      setStore(resultAction.payload);
    }
  }, [currentLanguage]);

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  const handleRedirectToStore = () => {
    setTriggerLoader(true);
    if (isAuth) {
      return dispatch(redirectToStore(id));
    }
    return navigate('/login');
  };

  const classes = useStyles(state.data || store.backgroundImage.url);
  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={classes.storeContainer}>
      <div className={classes.bodyHeaderContainer}>
        <div className={classes.storeBackground} />
        <div className={classes.middleLine}>
          <img
            className={classes.storeAvatar}
            src={state.data.logoImage.url || store?.logoImage?.url}
            alt='avatar'
            onError={state.logo}
          />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.leftContent}>
            <div className={classes.title}>
              {state.data.translations[0].title ||
                store?.translations[0]?.title}
            </div>
            <div className={classes.subTitle}>
              {state.data.translations[0].description ||
                store.translations[0]?.description}
            </div>
            <div
              className={classes.discountPercentCardContainerForMobileWrapper}
            >
              <div className={classes.discountPercentCardContainerForMobile}>
                <div className={classes.percentWrapper}>
                  <div className={classes.filledPercent}>
                    {state.data?.baseReward || store.baseReward}%
                  </div>
                  <div className={classes.percentSubTitle}>
                    {t('BASE_REWARD')}
                  </div>
                </div>
                <div className={classes.percentWrapper}>
                  <div className={classes.outlinedPercent}>6%</div>
                  <div className={classes.percentSubTitle}>
                    {t('ON_PURCHASES_OVER')} $30
                  </div>
                </div>
                <div
                  className={classes.shopButton}
                  onClick={handleRedirectToStore}
                >
                  {triggerLoader && (
                    <Loader delay={3000} setTriggerLoader={setTriggerLoader} />
                  )}
                  {!triggerLoader &&
                    (isAuth ? t('SHOP_NOW') : t('LOG_IN_TO_SHOP'))}
                </div>{' '}
              </div>
            </div>

            <div className={classes.specialOffersContainer}>
              {store.specialOffers.length > 0 ? (
                store.specialOffers.map((el) => (
                  <SpecialOffer
                    key={el.id}
                    title={el.translations[0].title}
                    description={el.translations[0].description}
                    offerId={el.id}
                    reward={el.reward}
                    storeId={id}
                    isAuth={isAuth}
                    redirectToSpecialOffer={redirectToSpecialOffer}
                  />
                ))
              ) : (
                <div className={classes.noOffersTitle}>
                  {t('NO_OFFERS_FOR_STORE')}
                </div>
              )}
            </div>
          </div>
          <div className={classes.rightContent}>
            <div className={classes.discountPercentCardContainer}>
              <div className={classes.percentWrapper}>
                <div className={classes.filledPercent}>
                  {state.data?.baseReward || store.baseReward}%
                </div>
                <div className={classes.percentSubTitle}>
                  {t('BASE_REWARD')}
                </div>
              </div>
              <div className={classes.percentWrapper}>
                <div className={classes.outlinedPercent}>6%</div>
                <div className={classes.percentSubTitle}>
                  {t('ON_PURCHASES_OVER')} $30
                </div>
              </div>
              <div
                className={classes.shopButton}
                onClick={handleRedirectToStore}
              >
                {triggerLoader && (
                  <Loader delay={3000} setTriggerLoader={setTriggerLoader} />
                )}
                {!triggerLoader &&
                  (isAuth ? t('SHOP_NOW') : t('LOG_IN_TO_SHOP'))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;

const useStyles = makeStyles((theme) => ({
  storeContainer: {
    height: '100vh',
  },
  header: {},
  bodyHeaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  storeBackground: {
    height: '256px',
    backgroundImage: (store) => `url(${store?.backgroundImage?.url})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: '160px',
    },
  },
  middleLine: {
    height: '0px',
    paddingInline: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '1280px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingInline: '16px',
    },
  },
  storeAvatar: {
    width: '160px',
    height: '160px',
    border: '4px solid #FFFFFF',
    borderRadius: '100px',
    transform: 'translate(0 ,-50%)',
    [theme.breakpoints.down('md')]: {
      width: '130px',
      height: '130px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '64px',
      height: '64px',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '1280px',
    height: '652px',
    boxSizing: 'border-box',
    paddingInline: '72px',
    paddingBottom: '72px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      paddingInline: '16px',
    },
  },
  leftContent: {
    width: '688px',
    paddingTop: '112px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '60px',
    },
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  subTitle: {
    marginTop: '16px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  specialOffersContainer: {
    marginTop: '16px',
    width: '688px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    // '&>*': {
    //   flex: '0 0 33.3333%',
    // },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '1px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
  rightContent: {
    marginLeft: '112px',
    marginTop: '32px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  discountPercentCardContainer: {
    width: '336px',
    height: '316px',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '250px',
    },
  },
  discountPercentCardContainerForMobileWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noOffersTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  discountPercentCardContainerForMobile: {
    marginTop: '16px',
    width: '100%',
    height: '316px',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  percentWrapper: {
    width: '304px',
    height: '104px',
    borderRadius: '8px',
    background: '#FAFAFA',
    boxSizing: 'border-box',
    padding: '16px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  filledPercent: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '100%',
    letterSpacing: '0.08em',
    color: '#33CC55',
  },
  percentSubTitle: {
    marginTop: '8px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '125%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
  },
  outlinedPercent: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '100%',
    letterSpacing: '0.08em',
    color: 'white',
    textShadow:
      '0 0 1px #33CC55, 0 0 1px #33CC55, 0 0 1px #33CC55, 0 0 1px #33CC55',
  },
  shopButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#33CC55',
    borderRadius: '26px',
    // padding: '12px 10px',
    color: 'white',
    height: '44px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.02em',
    cursor: 'pointer',
  },
}));

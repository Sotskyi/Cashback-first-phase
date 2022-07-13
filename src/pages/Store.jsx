import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';

const Store = () => {
  const classes = useStyles();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={classes.storeContainer}>
      <div className={classes.bodyHeaderContainer}>
        <div className={classes.storeBackground} />
        <div className={classes.middleLine}>
          <div className={classes.storeAvatar} />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.leftContent}>
            <div className={classes.title}>Store Name</div>
            <div className={classes.subTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={classes.productCardsContainer}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className={classes.rightContent}>
            {' '}
            <div className={classes.percentWrapper}>
              <div className={classes.filledPercent}>33%</div>
              <div className={classes.percentSubTitle}>Base reward</div>
            </div>
            <div className={classes.percentWrapper}>
              <div className={classes.outlinedPercent}>6%</div>
              <div className={classes.percentSubTitle}>
                On purchases over $30
              </div>
            </div>
            <div className={classes.shopButton}>
              {isAuth ? 'Shop Now' : 'Log in to shop'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;

const useStyles = makeStyles(() => ({
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
    background: '#EAEAEA',
    width: '1280px',
  },
  middleLine: {
    height: '0px',
    paddingInline: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '1280px',
    boxSizing: 'border-box',
  },
  storeAvatar: {
    width: '160px',
    height: '160px',
    border: '4px solid #FFFFFF',
    background: '#EAEAEA',
    borderRadius: '100px',
    transform: 'translate(0 ,-50%)',
  },
  contentContainer: {
    display: 'flex',
    width: '1280px',
    height: '652px',
    boxSizing: 'border-box',
    paddingInline: '72px',
    paddingBottom: '72px',
  },
  leftContent: {
    width: '688px',
    paddingTop: '112px',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
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
  productCardsContainer: {
    marginTop: '16px',
    width: '688px',
    height: '352px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  rightContent: {
    marginLeft: '112px',
    marginTop: '32px',
    width: '336px',
    height: '316px',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  percentWrapper: {
    width: '304px',
    height: '104px',
    borderRadius: '8px',
    background: '#FAFAFA',
    boxSizing: 'border-box',
    padding: '16px',
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
    padding: '12px 10px',
    color: 'white',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.02em',
  },
}));

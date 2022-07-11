import { makeStyles } from '@material-ui/core';

const ProductCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.productCardWrapper}>
      <div className={classes.titlesWrapper}>
        <div className={classes.title}>Text</div>
        <div className={classes.subTitle}>Text</div>
      </div>
      <div className={classes.bottomWrapper}>
        {' '}
        <div className={classes.percentage}>33%</div>
        <div className={classes.shopButton}>Shop Now</div>{' '}
      </div>
    </div>
  );
};
export default ProductCard;

const useStyles = makeStyles(() => ({
  productCardWrapper: {
    width: '336px',
    height: '168px',
    boxSizing: 'border-box',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#FAFAFA',
    borderRadius: '8px',
  },
  titlesWrapper: {
    height: '44px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    color: '#6A6A6A',
  },
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
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
    width: '234px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #EAEAEA',
    borderRadius: '20px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '125%',
    letterSpacing: '0.02em',
    color: '#33CC55',
    background: '#FFFFFF',
  },
}));

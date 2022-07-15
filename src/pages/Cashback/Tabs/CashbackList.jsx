import { makeStyles } from '@material-ui/core';

const CashbackList = () => {
  const classes = useStyles();

  return (
    <div className={classes.cashbackListContainer}>
      <div className={classes.dateContainer}>
        <div className={classes.date}>Monday, May 11 </div>
        <div className={classes.totalCashback}>$ 30.23</div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
      <div className={classes.dateContainer}>
        <div className={classes.date}>Monday, May 11 </div>
        <div className={classes.totalCashback}>$ 30.23</div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
      <div className={classes.storeContainer}>
        <div className={classes.storeAvatar} />
        <div className={classes.storeContentContainer}>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeTitle}>Store</div>
            <div className={classes.storeCashback}>$ 888.88</div>
          </div>
          <div className={classes.storeContentWrapper}>
            <div className={classes.storeAvailableCashback}>$ 144.44</div>
            <div className={classes.storevailableCashbackTime}>30 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CashbackList;

const useStyles = makeStyles(() => ({
  cashbackListContainer: {
    height: '500px',
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
  dateContainer: {
    height: '30px',
    marginLeft: '64px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    color: '#6A6A6A',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EAEAEA',
    marginTop: '32px',
  },
  storeContainer: {
    display: 'flex',
    marginTop: '18px',
    height: '64px',
  },
  storeAvatar: {
    width: '48px',
    height: '48px',
    background: '#EAEAEA',
    borderRadius: '100px',
  },
  storeContentContainer: {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    width: '100%',
    borderBottom: '1px solid #EAEAEA',
  },
  storeContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  storeTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  storeCashback: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
    color: '#6A6A6A',
  },
  storeAvailableCashback: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
  },
  storevailableCashbackTime: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
  },
}));

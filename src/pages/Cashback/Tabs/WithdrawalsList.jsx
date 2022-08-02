import { makeStyles } from '@material-ui/core';

import withdrawalsSuccess from '../../../assets/images/icons/withdrawalsSuccess.svg';

const WithdrawalsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.withdrawalsListContainer}>
      {/* <div className={classes.withdrawalsListWrapper}> */}
      <div className={classes.dateContainer}>
        <div className={classes.date}>Monday, May 11 </div>
        <div className={classes.totalCashback}>$ 30.23</div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      <div className={classes.dateContainer}>
        <div className={classes.date}>Monday, May 11 </div>
        <div className={classes.totalCashback}>$ 30.23</div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      <div className={classes.withdrawalContainer}>
        <div className={classes.withdrawalAvatar}>
          {' '}
          <img
            src={withdrawalsSuccess}
            // className={classes.withdrawalsIconSuccess}
            alt='cash'
          />{' '}
        </div>
        <div className={classes.withdrawalContentContainer}>
          <div className={classes.withdrawalContentWrapper}>
            <div className={classes.withdrawalTitle}>Withdrawal</div>
            <div className={classes.withdrawalCashback}>$ 888.88</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default WithdrawalsList;

const useStyles = makeStyles((theme) => ({
  withdrawalsListContainer: {
    height: '500px',
    width: '680px',
    paddingRight: '15px',
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  withdrawalsListWrapper: {},
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
  withdrawalContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '84px',
  },
  withdrawalAvatar: {
    width: '48px',
    height: '48px',
    background: '#EAEAEA',
    borderRadius: '100px',
  },
  withdrawalContentContainer: {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderBottom: '1px solid #EAEAEA',
  },
  withdrawalContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  withdrawalTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  withdrawalCashback: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
    color: '#33CC55',
  },
}));

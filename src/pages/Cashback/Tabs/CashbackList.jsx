import { makeStyles } from '@material-ui/core';

const CashbackList = () => {
  const classes = useStyles();

  return (
    <div className={classes.cashbackListContainer}>
      <div className={classes.dateContainer}>
        <div className={classes.date}>Monday, May 11 </div>
        <div className={classes.totalCashback}>$ 30.23</div>
      </div>
      <div className={classes.store}> </div>
    </div>
  );
};
export default CashbackList;

const useStyles = makeStyles(() => ({
  cashbackListContainer: {
    height: '500px',
    marginTop: '32px',
    paddingLeft: '64px',
  },
  dateContainer: {
    height: '30px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    color: '#6A6A6A',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EAEAEA',
  },
  date: {},
  totalCashback: {},

  leftContentContainer: {
    width: '688px',
  },
}));

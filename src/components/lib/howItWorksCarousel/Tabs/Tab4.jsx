import { makeStyles } from '@material-ui/core/styles';

const Tab3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.thirdTabContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Pay down your pre-paid phone bill</div>
        <div className={classes.subTitle}>
          Once you have accumulated enough cash-back, pay-down your phone-bill.
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  thirdTabContainer: {
    minWidth: '216px',
    minHeight: '124px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '132px',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    color: '#000000',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '125%',
    color: '#6A6A6A',
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
}));
export default Tab3;

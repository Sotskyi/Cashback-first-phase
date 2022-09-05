import { makeStyles } from '@material-ui/core/styles';

const Tab1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.firstTabContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Select an online shop</div>
        <div className={classes.subTitle}>
          Log-in.Select an online shop.Click on Shop Now.
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  firstTabContainer: {
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
    height: '70px',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    color: '#000000',
    letterSpacing: '-0.02em',
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
export default Tab1;

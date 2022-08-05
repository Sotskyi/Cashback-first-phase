import { makeStyles } from '@material-ui/core/styles';

import appStore from '../../../../assets/images/widgets/appStore.svg';
import googlePlay from '../../../../assets/images/widgets/googlePlay.svg';

const Tab4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.firthTabContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Download the App</div>
        <div className={classes.widgetsContainer}>
          <img src={appStore} alt='appstore' />
          <img src={googlePlay} alt='googleStore' />
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  firthTabContainer: {
    minWidth: '216px',
    minHeight: '130px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    height: '72px',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    color: '#000000',
    width: '100%',
    letterSpacing: '-0.02em',
  },
  widgetsContainer: {
    marginTop: '13px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '88px',
  },
}));
export default Tab4;

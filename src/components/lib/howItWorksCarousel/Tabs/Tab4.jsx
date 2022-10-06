import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const Tab3 = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.thirdTabContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('PAY_DOWN_YOUR_PHONE')}</div>
        <div className={classes.subTitle}>{t('ONCE_YOU_HAVE_ACCUMULATED')}</div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  thirdTabContainer: {
    minWidth: '216px',
    minHeight: '124px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '152px',
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

    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  subTitle: {
    marginTop: '7px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '125%',
    color: '#6A6A6A',
    letterSpacing: '-0.03em',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
}));
export default Tab3;

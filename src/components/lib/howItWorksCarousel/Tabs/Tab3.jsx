import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const Tab3 = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.thirdTabContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('RECEIVE_CASHBACK')}</div>
        <div className={classes.subTitle}>{t('GET_PART_MONEY')}</div>
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
    // justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '72px',
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
    marginTop: '7px',
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

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const SetNewPasswordSuccess = ({ email }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <form>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('CHECK_YOUR_INBOX')}</div>
        <div className={classes.subTitle}>
          {t('LINK_WAS_SENT_TO', { email })}
        </div>
      </div>
    </form>
  );
};
export default SetNewPasswordSuccess;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '68px',
    height: '148px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '-0.01em',
    width: '448px',
    [theme.breakpoints.down('xs')]: {
      width: '288px',
      height: '100px',
    },
  },
}));

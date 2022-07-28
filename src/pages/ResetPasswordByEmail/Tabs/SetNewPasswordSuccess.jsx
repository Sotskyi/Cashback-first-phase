import { makeStyles } from '@material-ui/core';

const SetNewPasswordSuccess = ({ email }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Check your inbox</div>

        <div className={classes.subTitle}>
          A link was sent to {email} to reset your password. If you don’t see it
          in your inbox, remember to check your spam folder.
        </div>
      </div>
    </div>
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

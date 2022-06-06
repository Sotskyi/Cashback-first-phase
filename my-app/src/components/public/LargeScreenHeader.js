import { makeStyles } from '@material-ui/core';

const LargeScreenHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <div className={classes.logo}>
          <img src='assets/images/logos/logo.svg' alt='logo' />
        </div>
      </div>
      <div className={classes.navigationBar}>
        <div>Blog</div>
        <div>FAQ</div>
        <div>EN</div>
        <div className={classes.loginButton}>Log In</div>
      </div>
    </div>
  );
};
export default LargeScreenHeader;

const useStyles = makeStyles(() => ({
  headerContainer: {
    width: '100%',
    height: '96px',
    borderBottom: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter',
  },
  logoContainer: {
    width: '60%',
  },
  logo: {
    marginLeft: '72px',
  },
  navigationBar: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
  },
  loginButton: {
    width: '176px',
    height: '48px',
    display: 'flex',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    marginRight: '72px',
    fontSize: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

import { makeStyles } from '@material-ui/core';

const MediumScreenHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.mediumScreenHeaderContainer}>
      <div className={classes.mediumScreenLogoWrapper}>
        <img
          className={classes.mediumScreenLogo}
          src='assets/images/logos/logo.svg'
          alt='logo'
        />
      </div>

      <div className={classes.menu}>
        <img src='assets/images/icons/burgerMenu.svg' alt='menu' />
      </div>
    </div>
  );
};
export default MediumScreenHeader;

const useStyles = makeStyles(() => ({
  mediumScreenHeaderContainer: {
    width: '100%',
    height: '64px',
    borderBottom: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Inter',
  },
  mediumScreenLogoWrapper: {
    marginLeft: '20px',
  },

  mediumScreenLogo: {
    width: '150px',
    height: '16px',
  },
  menu: {
    marginRight: '14px',
  },
}));

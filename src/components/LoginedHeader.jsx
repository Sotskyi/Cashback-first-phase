import { makeStyles } from '@material-ui/core';
import Input from '@mui/material/Input';

import LanguageSwitcher from './LanguageSwitcher';

const LoginedHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <img
          className={classes.logo}
          src='assets/images/logos/logo.svg'
          alt='logo'
        />
      </div>
      <div className={classes.searchContainer}>
        <img
          className={classes.searchIcon}
          src='assets/images/icons/search.svg'
          alt='menu'
        />

        <Input
          placeholder='Search stores'
          disableUnderline
          fullWidth
          sx={{ marginLeft: '8px' }}
        />
      </div>
      <LanguageSwitcher />
      <div className={classes.availablePriceContainer}>
        <div className={classes.priceTitle}>AVAILABLE</div>
        <div className={classes.price}>$26</div>
      </div>
      <div className={classes.menuContainer}>
        <div className={classes.menu}>
          <img src='assets/images/icons/userMenu.svg' alt='logo' />
        </div>
        <div className={classes.avatar} />
      </div>
    </div>
  );
};
export default LoginedHeader;

const useStyles = makeStyles(() => ({
  headerContainer: {
    paddingInline: '72px',
    justifyContent: 'center',
    height: '96px',
    borderBottom: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter',
  },
  logo: {
    width: '154px',
    height: '16px',
  },
  searchContainer: {
    paddingLeft: '19px',
    width: '368px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '112px',
    marginLeft: '230px',
  },
  searchIcon: {
    width: '14px',
    height: '14px',
  },
  availablePriceContainer: {
    width: '176px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '16px',
  },
  priceTitle: {
    fontWeight: '500',
    fontSize: '12px',
    fontStyle: 'nomral',
    fontFamily: 'Inter',
    lineHeight: '16px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
  price: {
    fontWeight: '600',
    fontSize: '20px',
    fontStyle: 'nomral',
    fontFamily: 'Source Sans Pro, sans-serif',
    lineHeight: '120%',
    letterSpacing: '0.02em',
  },

  menuContainer: {
    width: '80px',
    height: '48px',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: '16px',
  },
  menu: {
    cursor: 'pointer',
  },
  avatar: {
    width: '24px',
    height: '24px',
    background: '#EAEAEA',
    borderRadius: '26px',
  },
}));

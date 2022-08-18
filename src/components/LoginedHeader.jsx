import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Input from '@mui/material/Input';

import LanguageSwitcher from './lib/LanguageSwitcher';
import logo from '../assets/images/logos/logo.svg';
import search from '../assets/images/icons/search.svg';

import UserMenu from './lib/UserMenu';

const LoginedHeader = ({ availableBalance }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer} onClick={() => navigate('/')}>
        <img className={classes.logo} src={logo} alt='logo' />
      </div>
      <div className={classes.searchContainer}>
        <img className={classes.searchIcon} src={search} alt='menu' />
        <Input
          placeholder='Search stores'
          disableUnderline
          fullWidth
          sx={{ marginLeft: '8px' }}
        />
      </div>
      <LanguageSwitcher />
      <div
        className={`${classes.availablePriceContainer} ${
          pathname === '/cashback' ? classes.active : ''
        }`}
        onClick={() => navigate('/cashback')}
      >
        <div className={classes.priceTitle}>AVAILABLE</div>
        <div className={classes.price}>{`$ ${availableBalance || 0.0}`}</div>
      </div>
      <UserMenu />
    </div>
  );
};
export default LoginedHeader;

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    paddingInline: '72px',
    justifyContent: 'center',
    height: '96px',
    borderBottom: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter',
    [theme.breakpoints.down('sm')]: {
      height: '64px',
      paddingInline: '16px',
    },
  },
  logo: {
    width: '154px',
    height: '16px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '116px',
      height: '12px',
    },
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
    [theme.breakpoints.down('md')]: {
      marginRight: '13px',
      marginLeft: '13px',
      height: '35px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '7px',
    },
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
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  active: { border: '1px solid #33CC55', color: '#33CC55' },
  priceTitle: {
    fontWeight: '600',
    fontSize: '12px',
    fontStyle: 'nomral',
    fontFamily: 'Inter',
    lineHeight: '16px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
  price: {
    fontWeight: '700',
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

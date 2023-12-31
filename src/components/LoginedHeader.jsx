import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Input from '@mui/material/Input';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './lib/LanguageSwitcher';
import logo from '../assets/images/logos/logo.svg';
import frenchLogo from '../assets/images/logos/frenchLogo.svg';

import searchIcon from '../assets/images/icons/searchIcon.svg';
import { setSearch } from '../redux/slices/storesSlice';
import UserMenu from './lib/UserMenu';
import useDebounce from '../hooks/useDebounce';

const LoginedHeader = ({ availableBalance }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' && searchTerm.length === 0) {
      return e.preventDefault();
    }
    return null;
  };

  useDebounce(searchTerm, 500, setSearch);

  return (
    <div className={classes.headerContainer}>
      <div
        className={classes.logoContainer}
        onClick={() => {
          navigate('/');
          // window.location.reload();
        }}
      >
        <img
          className={classes.logo}
          src={i18n.language === 'en' ? logo : frenchLogo}
          alt='logo'
        />
      </div>
      <div
        className={`${classes.searchContainer} ${
          searchTerm.length > 0 && classes.activeSearch
        }`}
      >
        <img className={classes.searchIcon} src={searchIcon} alt='menu' />
        <Input
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyDown}
          placeholder={t('SEARCH_STORES')}
          disableUnderline
          fullWidth
          sx={(theme) => ({
            marginLeft: '8px',

            [theme.breakpoints.down('sm')]: {
              paddingLeft: '0px',
              fontSize: '12px',
            },
          })}
        />
      </div>
      <LanguageSwitcher />
      <div
        className={`${classes.availablePriceContainer} ${
          pathname === '/cashback' ? classes.active : ''
        }`}
        onClick={() => navigate('/cashback')}
      >
        <div className={classes.priceTitle}>{t('AVAILABLE')}</div>
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
  activeSearch: {
    border: '1px solid #33CC55!important',
  },
  logo: {
    // width: '154px',
    height: '20px',
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
}));

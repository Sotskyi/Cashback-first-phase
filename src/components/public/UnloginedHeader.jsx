import { makeStyles } from '@material-ui/core';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';

import LanguageSwitcher from '../LanguageSwitcher';
import logo from '../../assets/images/logos/logo.svg';
import search from '../../assets/images/icons/search.svg';

const UnloginedHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.headerContainer}>
      <div onClick={() => navigate('/')}>
        <img className={classes.logo} src={logo} alt='logo' />
      </div>
      <div className={classes.searchContainer}>
        <img className={classes.searchIcon} src={search} alt='menu' />

        <Input
          placeholder='Search stores'
          disableUnderline
          fullWidth
          sx={{ marginLeft: '8px' }}
          // inputProps={{
          //   'aria-label': 'Search',
          // }}
          // onChange={(ev) => searchHandler(ev)}
        />
      </div>
      <LanguageSwitcher />
      <div className={classes.loginButton} onClick={() => navigate('/login')}>
        Log In
      </div>
    </div>
  );
};
export default UnloginedHeader;

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
    cursor: 'pointer',
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
  loginButton: {
    cursor: 'pointer',
    width: '176px',
    height: '48px',
    display: 'flex',
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    letterSpacing: '0.02em',
    fontWeight: '600',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro, sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '16px',
  },
}));

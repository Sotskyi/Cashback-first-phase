import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';

// import userMenu from '../../assets/images/icons/forHeaderMenu/userMenu.svg';
import getHelp from '../../assets/images/icons/forHeaderMenu/getHelp.svg';
import howTelcoWorks from '../../assets/images/icons/forHeaderMenu/howTelcoWorks.svg';
import logOut from '../../assets/images/icons/forHeaderMenu/logOut.svg';
import login from '../../assets/images/icons/forHeaderMenu/login.svg';
import personalInfo from '../../assets/images/icons/forHeaderMenu/personalInfo.svg';
import termsAndConditions from '../../assets/images/icons/forHeaderMenu/termsAndConditions.svg';
import privacyPolicy from '../../assets/images/icons/forHeaderMenu/privacyPolicy.svg';
import missingTransaction from '../../assets/images/icons/forHeaderMenu/missingTransaction.svg';
import settings1 from '../../assets/images/icons/forHeaderMenu/settings1.svg';

import { logoutUser } from '../../redux/slices/authSlice';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const { user, isAuth } = useSelector((state) => state.auth);

  const loginedMenuItems = [
    {
      id: 'personalInfo',
      name: 'Personal information',
      iconSrc: personalInfo,
    },
    {
      id: 'howItWorks',
      name: 'How Telco Rewards work',
      iconSrc: howTelcoWorks,
    },
    {
      id: 'getHelp',
      name: 'Get help',
      iconSrc: getHelp,
    },
    {
      id: 'missingTransaction',
      name: 'Missing transaction',
      iconSrc: missingTransaction,
    },
    {
      id: 'termsConditions',
      name: 'Terms & Conditions',
      iconSrc: termsAndConditions,
    },
    {
      id: 'privacyPolicy',
      name: 'Privacy Policy',
      iconSrc: termsAndConditions,
    },
    {
      id: 'logout',
      name: 'Log out',
      iconSrc: logOut,
    },
  ];
  const unloginedMenuItems = [
    {
      id: 'login',
      name: 'Login',
      iconSrc: login,
    },
    {
      id: 'howItWorks',
      name: 'How Telco Rewards work',
      iconSrc: howTelcoWorks,
    },
    {
      id: 'getHelp',
      name: 'Get help',
      iconSrc: getHelp,
    },
    {
      id: 'termsConditions',
      name: 'Terms & Conditions',
      iconSrc: termsAndConditions,
    },
    {
      id: 'privacyPolicy',
      name: 'Privacy Policy',
      iconSrc: privacyPolicy,
    },
  ];
  console.log(isAuth);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { id } = event.target;
    if (id === 'logout') {
      dispatch(logoutUser());
      navigate('/login');
    } else if (id === 'cashback') {
      navigate('/cashback');
    } else if (id === 'missingTransaction') {
      navigate('/missing_transaction');
    } else if (id === 'login') {
      navigate('/login');
    }
  };
  /* eslint-disable */
  return (
    <div className={classes.menuContainer}>
      <div className={classes.menu} onClick={handleClick}>
        <img src={settings1} className={classes.menuIcon} alt='logo' />
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={(theme) => ({
            [theme.breakpoints.up('md')]: { display: 'none' },
          })}
        >
          {isAuth ? (
            <div id='cashback' className={classes.availableMenuItem}>
              <div id='cashback' className={classes.availableMenuItemTitle}>
                AVAILABLE
              </div>
              <div id='cashback' className={classes.availableMenuItemCash}>
                $ {user?.wallet?.balance || 0}
              </div>
            </div>
          ) : (
            <></>
          )}
        </MenuItem>
        {(isAuth ? loginedMenuItems : unloginedMenuItems).map((el) => (
          <MenuItem key={el.id} id={el.id} onClick={handleClose}>
            <span id={el.id} className={classes.menuIconWrapper}>
              <img id={el.id} src={el.iconSrc} alt='logo' />
            </span>
            <span id={el.id} className={classes.menuTitle}>
              {el.name}
            </span>
          </MenuItem>
        ))}
      </Menu>

      {/* <div className={classes.avatar} /> */}
    </div>
  );
};
export default UserMenu;
const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: '80px',
    height: '48px',
    background: '#FFFFFF',
    // border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: '16px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '52px',
      height: '32px',
    },
  },
  menu: {
    cursor: 'pointer',
  },
  availableMenuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #EAAEAE',
    borderRadius: '12px',
    height: '48px',
    width: '272px',
  },
  availableMenuItemTitle: {
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#6A6A6A',
    letterSpacing: '0.16em;',
    display: 'flex',
    marginTop: '4px',
  },
  availableMenuItemCash: {
    fontSize: '20px',
    fontFamily: 'Inter',
    fontWeight: '600',
    color: ' #000000',
    letterSpacing: '0.02em;',
  },
  menuIcon: {
    width: '24px',
    [theme.breakpoints.down('sm')]: {
      width: '18px',
    },
  },
  menuIconWrapper: {
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    paddingLeft: '19px',
  },
  avatar: {
    width: '24px',
    height: '24px',
    background: '#EAEAEA',
    borderRadius: '26px',
    [theme.breakpoints.down('sm')]: {
      width: '16px',
      height: '16px',
    },
  },
}));

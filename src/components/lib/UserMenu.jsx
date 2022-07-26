import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';

import userMenu from '../../assets/images/icons/forHeaderMenu/userMenu.svg';
import getHelp from '../../assets/images/icons/forHeaderMenu/getHelp.svg';
import howTelcoWorks from '../../assets/images/icons/forHeaderMenu/howTelcoWorks.svg';
import logOut from '../../assets/images/icons/forHeaderMenu/logOut.svg';
import personalInfo from '../../assets/images/icons/forHeaderMenu/personalInfo.svg';
import termsAndConditions from '../../assets/images/icons/forHeaderMenu/termsAndConditions.svg';

import { logoutUser } from '../../redux/slices/authSlice';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const menuItems = [
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
      id: 'termsConditions',
      name: 'Terms & Conditions',
      iconSrc: termsAndConditions,
    },
    {
      id: 'logout',
      name: 'Log out',
      iconSrc: logOut,
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { id } = event.target;
    if (id === 'logout') {
      dispatch(logoutUser());
      navigate('/login');
    }
  };

  return (
    <div className={classes.menuContainer}>
      <div className={classes.menu} onClick={handleClick}>
        <img src={userMenu} alt='logo' />
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
        {menuItems.map((el) => (
          <MenuItem key={el.id} id={el.id} onClick={handleClose}>
            <span className={classes.menuIconWrapper}>
              <img src={el.iconSrc} alt='logo' />
            </span>
            <span className={classes.menuTitle}>{el.name}</span>
          </MenuItem>
        ))}
      </Menu>

      <div className={classes.avatar} />
    </div>
  );
};
export default UserMenu;
const useStyles = makeStyles(() => ({
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
  menuIconWrapper: {
    width: '20px',
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
  },
}));

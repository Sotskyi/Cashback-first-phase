import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';

import userMenu from '../assets/images/icons/userMenu.svg';
import { logoutUser } from '../redux/slices/authSlice';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

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
        <MenuItem id='Home' onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem id='logout' onClick={handleClose}>
          Logout
        </MenuItem>
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
  avatar: {
    width: '24px',
    height: '24px',
    background: '#EAEAEA',
    borderRadius: '26px',
  },
}));

import React, { useState, useEffect } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import language from '../../assets/images/icons/language.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentLanguage, setCurrentLanguage] = useState({
    id: i18n.language,
    title: i18n.language.toUpperCase(),
  });
  const classes = useStyles();

  const open = Boolean(anchorEl);

  const languageMenuItems = [
    {
      id: 'en',
      title: 'EN',
    },
    {
      id: 'fr',
      title: 'FR',
    },
  ];

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('LANG'));
    if (lang) {
      setCurrentLanguage(lang);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (el) => {
    setAnchorEl(null);
    if (el.id) {
      setCurrentLanguage(el);
      localStorage.setItem('LANG', JSON.stringify(el));
      i18n.changeLanguage(el.id);
    }
  };

  return (
    <div className={classes.menuContainer}>
      <div className={classes.menu} onClick={handleClick}>
        <img src={language} className={classes.menuIcon} alt='logo' />
        <span>{currentLanguage.title}</span>
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
        {languageMenuItems.map((el) => (
          <MenuItem key={el.id} id={el.id} onClick={() => handleClose(el)}>
            <span id={el.id} className={classes.menuTitle}>
              {el.title}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default LanguageSwitcher;
const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: '80px',
    height: '48px',
    background: '#FFFFFF',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: '16px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '52px',
      height: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
    },
  },
  menu: {
    cursor: 'pointer',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
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
    width: '18px',
    [theme.breakpoints.down('sm')]: {
      width: '14px',
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

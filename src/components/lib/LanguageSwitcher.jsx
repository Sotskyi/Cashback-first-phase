// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// // import { useTranslation } from 'react-i18next';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';

// import language from '../../assets/images/icons/language.svg';

// const LanguageSwitcher = () => {
//   // const { i18n } = useTranslation();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const classes = useStyles();
//   return (
//     <div className={classes.languageMenuContainer}>
//       <div className={classes.languageName}>EN</div>

//       <Button
//         id='basic-button'
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup='true'
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         <img src={language} alt='menu' />
//       </Button>

//       <Menu
//         id='basic-menu'
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default LanguageSwitcher;

// const useStyles = makeStyles((theme) => ({
//   languageMenuContainer: {
//     width: '80px',
//     height: '48px',
//     border: '1px solid #EAEAEA',
//     borderRadius: '26px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     [theme.breakpoints.down('xs')]: {
//       border: 'none',
//     },
//   },
//   languageName: {
//     fontStyle: 'normal',
//     fontWeight: '500',
//     fontSize: '16px',
//     lineHeight: '125%',
//     fontFamily: 'Inter',
//     justifyContent: 'space-evenly',
//     [theme.breakpoints.down('xs')]: {
//       display: 'none',
//     },
//   },
// }));

// import Button from '@mui/material/Button';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// // import { changeLanguage } from 'app/store/i18nSlice';
// import { useState } from 'react';

// import us from '../../assets/images/flags/us.png';
// import fr from '../../assets/images/flags/fr.png';

// const languages = [
//   { id: 'en', title: 'English', flag: us },
//   { id: 'fr', title: 'Français', flag: fr },
// ];

// const LanguageSwitcher = () => {
//   const [menu, setMenu] = useState(null);

//   const langMenuClick = (event) => {
//     setMenu(event.currentTarget);
//   };

//   const langMenuClose = () => {
//     setMenu(null);
//   };

//   // useEffect(() => {
//   //   const lang = JSON.parse(localStorage.getItem(LANG));
//   //   const value = lang === 'fr' ? 'fr' : 'en';
//   //   localStorage.setItem(LANG, JSON.stringify(value));
//   // }, []);

//   function handleLanguageChange(lng) {
//     // localStorage.setItem(LANG, JSON.stringify(lng.id));
//     setMenu(lng);

//     // langMenuClose();
//   }

//   return (
//     <>
//       <Button onClick={langMenuClick}>
//         <img src={us} alt='flag' />

//         <Typography color='textSecondary'>en</Typography>
//       </Button>

//       <Popover
//         open={Boolean(menu)}
//         anchorEl={menu}
//         onClose={langMenuClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//         classes={{
//           paper: 'py-8',
//         }}
//       >
//         {languages.map((lng) => (
//           <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
//             <ListItemIcon className='min-w-40'>
//               <img className='min-w-20' src={lng.flag} alt={lng.title} />
//             </ListItemIcon>
//             <ListItemText primary={lng.title} />
//           </MenuItem>
//         ))}
//       </Popover>
//     </>
//   );
// };

// export default LanguageSwitcher;

import React, { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import language from '../../assets/images/icons/language.svg';
// import us from '../../assets/images/icons/language.svg';
// import fr from '../../assets/images/icons/language.svg';

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (el) => {
    setAnchorEl(null);
    if (el.id) {
      setCurrentLanguage(el);
      i18n.changeLanguage(el.id);
    }
  };
  /* eslint-disable */
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
        {/* <MenuItem
          onClick={handleClose}
          sx={(theme) => ({
            [theme.breakpoints.up('md')]: { display: 'none' },
            display: !isAuth ? 'none' : '',
          })}
        >
          {isAuth && (
            <div id='cashback' className={classes.availableMenuItem}>
              <div id='cashback' className={classes.availableMenuItemTitle}>
                AVAILABLE
              </div>
              <div id='cashback' className={classes.availableMenuItemCash}>
                $ {user?.wallet?.balance || 0}
              </div>
            </div>
          )}
        </MenuItem> */}
        {languageMenuItems.map((el) => (
          <MenuItem key={el.id} id={el.id} onClick={() => handleClose(el)}>
            {/* <span id={el.id} className={classes.menuIconWrapper}>
              <img id={el.id} src={el.iconSrc} alt='logo' />
            </span> */}
            <span id={el.id} className={classes.menuTitle}>
              {el.title}
            </span>
          </MenuItem>
        ))}
      </Menu>

      {/* <div className={classes.avatar} /> */}
    </div>
  );
};
export default LanguageSwitcher;
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
    // paddingLeft: '19px',
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

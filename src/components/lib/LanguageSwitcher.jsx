import { makeStyles } from '@material-ui/core';

import language from '../../assets/images/icons/language.svg';

const LanguageSwitcher = () => {
  const classes = useStyles();
  return (
    <div className={classes.languageMenuContainer}>
      <div className={classes.languageName}>EN</div>
      <img src={language} alt='menu' />
    </div>
  );
};

export default LanguageSwitcher;

const useStyles = makeStyles((theme) => ({
  languageMenuContainer: {
    width: '80px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },
  languageName: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '125%',
    fontFamily: 'Inter',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

// import Button from '@mui/material/Button';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import {changeLanguage} from 'app/store/i18nSlice';
// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';

// const languages = [
//   {id: 'en', title: 'English', flag: 'ca'},
//   {id: 'fr', title: 'Français', flag: 'fr'},
// ];

// const LANG = 'LANG';

// function LanguageSwitcher(props) {
//   const dispatch = useDispatch();

//   const currentLanguageId = useSelector(({i18n}) => i18n.language);
//   const currentLanguage = languages.find((lng) => lng.id === currentLanguageId);

//   const [menu, setMenu] = useState(null);

//   const langMenuClick = (event) => {
//     setMenu(event.currentTarget);
//   };

//   const langMenuClose = () => {
//     setMenu(null);
//   };

//   useEffect(() => {
//     const lang = JSON.parse(localStorage.getItem(LANG));
//     const value = lang === 'fr' ? 'fr' : 'en';
//     localStorage.setItem(LANG, JSON.stringify(value));
//     dispatch(changeLanguage(value));
//   }, []);

//   function handleLanguageChange(lng) {
//     localStorage.setItem(LANG, JSON.stringify(lng.id));
//     dispatch(changeLanguage(lng.id));
//     langMenuClose();
//   }

//   return (
//     <>
//       <Button className="h-40 w-64" onClick={langMenuClick}>
//         <img
//           className="mx-4 min-w-20"
//           src={`assets/images/flags/${currentLanguage.flag}.png`}
//           alt={currentLanguage.title}
//         />

//         <Typography
//           className="mx-4 font-semibold uppercase"
//           color="textSecondary"
//         >
//           {currentLanguage.id}
//         </Typography>
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
//             <ListItemIcon className="min-w-40">
//               <img
//                 className="min-w-20"
//                 src={`assets/images/flags/${lng.flag}.png`}
//                 alt={lng.title}
//               />
//             </ListItemIcon>
//             <ListItemText primary={lng.title} />
//           </MenuItem>
//         ))}

//       </Popover>
//     </>
//   );
// }

// export default LanguageSwitcher;

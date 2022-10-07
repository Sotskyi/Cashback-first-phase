import React, { useContext } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';

import howTelcoWorks from '../../assets/images/icons/forHeaderMenu/howTelcoWorks.svg';
import logOut from '../../assets/images/icons/forHeaderMenu/logOut.svg';
import login from '../../assets/images/icons/forHeaderMenu/login.svg';
import personalInfo from '../../assets/images/icons/forHeaderMenu/personalInfo.svg';
import termsAndConditions from '../../assets/images/icons/forHeaderMenu/termsAndConditions.svg';
import privacyPolicy from '../../assets/images/icons/forHeaderMenu/privacyPolicy.svg';
import missingTransaction from '../../assets/images/icons/forHeaderMenu/missingTransaction.svg';
import settings1 from '../../assets/images/icons/forHeaderMenu/settings1.svg';

import { logoutUser } from '../../redux/slices/authSlice';
import { reset } from '../../redux/slices/cashbackSlice';
import { HowItWorksCarouselContext } from './howItWorksCarousel/HowItWorksCarouselProvider';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setIsOpenCarousel } = useContext(HowItWorksCarouselContext);
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const { user, isAuth } = useSelector((state) => state.auth);

  const loginedMenuItems = [
    {
      id: 'personalInfo',
      name: t('PERSONAL_INFORMATION'),
      iconSrc: personalInfo,
    },
    {
      id: 'howItWorks',
      name: t('HOW_TELCO_REWARDS_WORK'),
      iconSrc: howTelcoWorks,
    },
    {
      id: 'missingTransaction',
      name: t('MISSING_TRANSACTION'),
      iconSrc: missingTransaction,
    },
    {
      id: 'termsConditions',
      name: t('TERMS_AND_CONDITIONS'),
      iconSrc: termsAndConditions,
    },
    {
      id: 'privacyPolicy',
      name: t('PRIVACY_POLICY'),
      iconSrc: privacyPolicy,
    },
    {
      id: 'logout',
      name: t('LOGOUT'),
      iconSrc: logOut,
    },
  ];
  const unloginedMenuItems = [
    {
      id: 'login',
      name: t('LOGIN'),
      iconSrc: login,
    },
    {
      id: 'howItWorks',
      name: t('HOW_TELCO_REWARDS_WORK'),
      iconSrc: howTelcoWorks,
    },
    {
      id: 'termsConditions',
      name: t('TERMS_AND_CONDITIONS'),
      iconSrc: termsAndConditions,
    },
    {
      id: 'privacyPolicy',
      name: t('PRIVACY_POLICY'),
      iconSrc: privacyPolicy,
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
      dispatch(reset());
      navigate('/login');
    } else if (id === 'cashback') {
      navigate('/cashback');
    } else if (id === 'missingTransaction') {
      navigate('/missing_transaction');
    } else if (id === 'login') {
      navigate('/login');
    } else if (id === 'howItWorks') {
      setIsOpenCarousel(true);
    } else if (id === 'personalInfo') {
      navigate('/personal_info');
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
            display: !isAuth ? 'none' : '',
          })}
        >
          {isAuth && (
            <div id='cashback' className={classes.availableMenuItem}>
              <div id='cashback' className={classes.availableMenuItemTitle}>
                {t('AVAILABLE')}
              </div>
              <div id='cashback' className={classes.availableMenuItemCash}>
                $ {user?.wallet?.balance || 0}
              </div>
            </div>
          )}
        </MenuItem>
        {(isAuth ? loginedMenuItems : unloginedMenuItems).map((el) => (
          <MenuItem
            key={el.id}
            id={el.id}
            onClick={handleClose}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: { paddingLeft: '10px' },
            })}
          >
            <span id={el.id} className={classes.menuIconWrapper}>
              <img id={el.id} src={el.iconSrc} alt='logo' />
            </span>
            <span id={el.id} className={classes.menuTitle}>
              {el.name}
            </span>
          </MenuItem>
        ))}
      </Menu>
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
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
    },
  },
  menu: {
    cursor: 'pointer',
    display: 'flex',
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '10px',
      letterSpacing: '-0.04em',
      fontSize: '14px',
    },
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

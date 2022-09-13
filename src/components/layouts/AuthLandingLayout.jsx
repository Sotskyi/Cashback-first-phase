import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../../assets/images/logos/logo.svg';
import leftVector from '../../assets/images/icons/leftVector.svg';
import authLeftPhone from '../../assets/images/images/authLeftPhone.jpg';
import authRightPhone from '../../assets/images/images/authRightPhone.jpg';
import LanguageSwitcher from '../lib/LanguageSwitcher';

const AuthLandingLayout = ({ children, back, activeStep }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const isMediumScreen = useMediaQuery('(max-width:1200px)');

  return (
    <div className={classes.container}>
      <div className={classes.bodyContainer}>
        <div className={classes.header}>
          <div
            className={classes.navigationContainer}
            onClick={() => navigate('/')}
          >
            <img
              className={classes.logo}
              src={logo}
              alt='logo'
              role='presentation'
            />
            {activeStep > 0 && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  back();
                }}
                className={classes.backButtonContainer}
              >
                <img
                  className={classes.backButtonIcon}
                  src={leftVector}
                  alt='menu'
                />{' '}
                <div>{t('BACK')}</div>
              </div>
            )}
          </div>
          <LanguageSwitcher />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.contentSide}>{children}</div>
          <div className={classes.artSide}>
            <div className={classes.imageContainer}>
              <div>
                <img
                  className={classes.leftImagePhone}
                  src={authLeftPhone}
                  alt='menu'
                />
              </div>
              <div>
                <img
                  className={classes.rightImagePhone}
                  src={authRightPhone}
                  alt='menu'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLandingLayout;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      alignItems: 'none',
    },
  },
  bodyContainer: {
    width: '1280px',
    height: '720px',
    padding: '40px 56px 48px',
    boxSizing: 'border-box',
  },
  header: {
    height: '68px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  navigationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '8px',
    cursor: 'pointer',
  },
  logo: {
    width: '154px',
    height: '16px',
  },
  backButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '57px',
    fontSize: '16px',
    justifyContent: 'space-between',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '125%',
    fontFamily: 'Inter',
    color: '#33CC55',
    cursor: 'pointer',
    alignItems: 'center',
  },
  backButtonIcon: {
    height: '14px',
  },
  languageMenuContainer: {
    width: '80px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  languageName: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '125%',
    fontFamily: 'Inter',
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  artSide: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  imageContainer: {
    width: '624px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightImagePhone: { marginTop: '36px' },
  contentSide: {
    minWidth: '448px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      minWidth: '0',
      width: '300px',
    },
  },
}));

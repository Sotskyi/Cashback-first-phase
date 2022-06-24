import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

import CreateAcount from './Tabs/CreateAcount';
import VeriphyPhone from './Tabs/VerifyPhone';
import PersonalDetails from './Tabs/PersonalDetails';

const SignUp = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  //   const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.signUpContainer}>
        <div className={classes.artSide} />
        <div className={classes.contentSide}>
          <div
            className={
              activeStep > 0
                ? classes.languageContainer
                : classes.languageContainerContentEnd
            }
          >
            {activeStep > 0 && (
              <div onClick={back} className={classes.backButtonContainer}>
                <img
                  className={classes.backButtonIcon}
                  src='assets/images/icons/leftVector.svg'
                  alt='menu'
                />{' '}
                <div>Back</div>
              </div>
            )}
            <div className={classes.languageMenuContainer}>
              <div className={classes.languageName}>EN</div>
              <div className={classes.languageIcon}>
                <img src='assets/images/icons/language.svg' alt='menu' />
              </div>
            </div>
          </div>
          <div className={classes.contentContainer}>
            {activeStep === 0 && <CreateAcount next={next} />}
            {activeStep === 1 && <VeriphyPhone next={next} />}
            {activeStep === 2 && <PersonalDetails next={next} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    width: '1280px',
    height: '720px',
    display: 'flex',
  },
  artSide: {
    width: '720px',
    backgroundColor: '#D9D9D9',
    height: '100%',
  },
  contentSide: {
    flex: '1',
    padding: '40px 56px 48px;',
  },
  languageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageContainerContentEnd: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
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
    // marginTop: '96px',
    // height: '252px',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
}));

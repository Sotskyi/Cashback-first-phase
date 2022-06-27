import { makeStyles } from '@material-ui/core';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useValidator } from '../hooks/useValidator';

const VeriphyPhone = () => {
  const classes = useStyles();
  //   const [checkIsValid, setIsShowError] = useValidator();
  const [verifyNumbers, setVerifyNumbers] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const navigate = useNavigate();

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);
  const arrayRefs = [input1, input2, input3, input4, input5, input6];

  const handleChange = (e) => {
    if (
      !Number.isNaN(parseInt(e.target.value, 10)) &&
      !Number.isNaN(parseInt(e.target.value[e.target.value.length - 1], 10))
    ) {
      setVerifyNumbers({
        ...verifyNumbers,
        [e.target.id]: e.target.value[e.target.value.length - 1],
      });

      const nextInputIndex = +e.target.id.split('input')[1];
      if (nextInputIndex < 6) {
        arrayRefs[nextInputIndex].current.focus();
      }

      const inputValues = Object.values(verifyNumbers);
      inputValues.splice(nextInputIndex - 1, 1);
      let counter = 0;

      inputValues.forEach((el) => {
        if (el !== '') {
          counter += 1;
        }
      });
      if (counter === 5) {
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setVerifyNumbers({
        ...verifyNumbers,
        [e.target.id]: '',
      });

      const prevInputIndex = +e.target.id.split('input')[1] - 2;

      if (prevInputIndex !== -1) {
        arrayRefs[prevInputIndex].current.focus();
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.signUpContainer}>
        <div className={classes.artSide} />
        <div className={classes.contentSide}>
          <div className={classes.languageContainer}>
            <div
              onClick={() => navigate(-1)}
              className={classes.backButtonContainer}
            >
              <img src='assets/images/icons/leftVector.svg' alt='menu' />{' '}
              <div>Back</div>
            </div>
            <div className={classes.languageMenuContainer}>
              <div className={classes.languageName}>EN</div>
              <div className={classes.languageIcon}>
                <img src='assets/images/icons/language.svg' alt='menu' />
              </div>
            </div>
          </div>
          <div className={classes.contentContainer}>
            <div className={classes.title}>Verify phone number</div>
            <div className={classes.subTitleContainer}>
              <div className={classes.subTitle}>
                Enter the code we’ve sent by SMS to{' '}
              </div>
              <div className={classes.phoneNumber}>+1 123 345 6789 </div>
            </div>
            <form className={classes.verificationSquaresContainer}>
              <input
                id='input1'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input1}
                className={classes.verificationSquare}
                type='tel'
                autoFocus
                ref={input1}
                autoComplete='off'
              />
              <input
                id='input2'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input2}
                className={classes.verificationSquare}
                type='tel'
                ref={input2}
                autoComplete='off'
              />
              <input
                id='input3'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input3}
                className={classes.verificationSquare}
                type='tel'
                ref={input3}
                autoComplete='off'
              />
              <input
                id='input4'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input4}
                className={classes.verificationSquare}
                type='tel'
                ref={input4}
                autoComplete='off'
              />
              <input
                id='input5'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input5}
                className={classes.verificationSquare}
                type='tel'
                ref={input5}
                autoComplete='off'
              />
              <input
                id='input6'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={verifyNumbers.input6}
                className={classes.verificationSquare}
                type='tel'
                ref={input6}
                autoComplete='off'
              />
            </form>
          </div>
          <div className={classes.haventSms}>
            Haven’t recieved SMS?
            <span className={classes.sendAgain}>Send again</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VeriphyPhone;

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
  backButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '64px',
    fontSize: '16px',
    justifyContent: 'space-between',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '125%',
    fontFamily: 'Inter',
    color: '#33CC55',
    cursor: 'pointer',
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
    marginTop: '110px',
    height: '243px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
  },
  subTitleContainer: {
    height: '59px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '-0.01em',
  },
  phoneNumber: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '120%',
  },

  verificationSquaresContainer: {
    widows: '448px',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  verificationSquare: {
    width: '64px',
    height: '64px',
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    padding: '0px',
    textAlign: 'center',
    fontSize: '40px',
    color: '#33CC55',
    fontFamily: 'Inter',
  },
  haventSms: {
    marginTop: '32px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'start',
  },
  sendAgain: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#33CC55',
    marginLeft: '8px',
  },
}));

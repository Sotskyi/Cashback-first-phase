import { makeStyles } from '@material-ui/core';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from './lib/Loader';
import {
  verifyPhone,
  loginConfirm,
  resetPasswordConfirm,
  registerConfirm,
} from '../redux/slices/authSlice';

const VeriphyPhone = ({ setCreds, creds, next, useFor }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { confirmSms, isLoading } = useSelector((state) => state.auth);
  const [isShowError, setIsShowError] = useState(false);
  const [verifyNumbers, setVerifyNumbers] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const registerSmsCheckConfirm = async (params) => {
    const resultAction = await dispatch(registerConfirm(params));
    if (registerConfirm.fulfilled.match(resultAction)) {
      next();
      // dispatch(reset());
    }
  };

  const signInConfirm = async (params) => {
    const resultAction = await dispatch(loginConfirm(params));
    if (loginConfirm.fulfilled.match(resultAction)) {
      navigate('/home');
      // dispatch(reset());
    }
  };

  const resetPasswordConfirmBySms = async (params) => {
    const resultAction = await dispatch(resetPasswordConfirm(params));
    if (resetPasswordConfirm.fulfilled.match(resultAction)) {
      next();
      // dispatch(reset());
    }
  };

  useEffect(() => {
    if (Object.values(verifyNumbers).every((element) => element !== '')) {
      // here check is code valid
      if (Object.values(verifyNumbers).join('') === confirmSms.toString()) {
        if (useFor === 'signup') {
          setCreds({
            ...creds,
            verificationCode: Object.values(verifyNumbers).join(''),
          });
          registerSmsCheckConfirm({
            phoneNumber: creds.phoneNumber,
            code: Object.values(verifyNumbers).join(''),
          });
        } else if (useFor === 'login') {
          signInConfirm({
            phoneNumber: creds.phoneNumber,
            code: Object.values(verifyNumbers).join(''),
          });
        } else if (useFor === 'resetPasswordBySms') {
          resetPasswordConfirmBySms({
            phoneNumber: creds.phoneNumber,
            code: Object.values(verifyNumbers).join(''),
          });
        }
      } else {
        setIsShowError(true);
      }
    }
  }, [verifyNumbers]);

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
        // console.log(next());
        // next();
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Verify phone number</div>
        <div className={classes.subTitleContainer}>
          <div className={classes.subTitle}>
            Enter the code we’ve sent by SMS to{' '}
          </div>
          <div className={classes.phoneNumber}>{creds.phoneNumber}</div>
        </div>
        {isShowError && (
          <div className={classes.errorMessage}>
            verification code is incorrect
          </div>
        )}
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
        <span
          className={classes.sendAgain}
          onClick={() => dispatch(verifyPhone(creds.phoneNumber))}
        >
          Send again
        </span>
      </div>
    </div>
  );
};
export default VeriphyPhone;

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
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
    [theme.breakpoints.down('xs')]: {
      width: '40px',
      height: '40px',
      fontSize: '30px',
    },
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
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red',
    fontFamily: 'Inter',
    fontSize: '14px',
    width: '100%',
  },
}));

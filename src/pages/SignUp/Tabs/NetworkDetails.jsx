import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import SubmitButton from '../../../components/SubmitButton';
// import { useValidator } from '../../../hooks/useValidator';

const NetworkDetails = () => {
  const classes = useStyles();
  const [mobileNetwork, setMobileNetwork] = useState('prepaid');
  //   const [creds, setCreds] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  //   });
  //   const [checkIsValid, setIsShowError] = useValidator();
  const mobilesCanada = [
    'Virgin Mobile',
    'SaskTel Canada',
    'Freedom Mobile',
    'Rogers Wireless',
    'Public Mobile',
    'Telus Canada',
    'Lucky Mobile',
    'Koodo',
    'Fido',
    'Bell MTS',
    'ChatR',
    'Bell Mobility',
  ];

  const handleChange = () => {
    // setMobileNetwork(e.target.value);
  };
  //   const handleChange = (event) => {
  //     const value = event.target.value.trim();
  //     setCreds({ ...creds, [event.target.id]: value });
  //   };

  //   const onSubmit = () => {
  //     setIsShowError(true);
  //     next();
  //   };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Add network details</div>

        <div className={classes.inputWrapper}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
            }}
          >
            Mobile network carrier
          </InputLabel>
          <Select
            // value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              width: '100%',
              padding: '0px 14px',
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {mobilesCanada.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputWrapper}>
            <InputLabel
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '16px',
                color: 'black',
              }}
            >
              Phone plan
            </InputLabel>
            <div
              onClick={() => setMobileNetwork('monthly')}
              className={`${classes.phonePlan} ${
                mobileNetwork === 'monthly' ? classes.activeBorder : ''
              }`}
            >
              <div
                className={
                  mobileNetwork === 'monthly'
                    ? classes.phonePlanRadioActive
                    : classes.phonePlanRadio
                }
              />
              <span> Monthly</span>
            </div>
          </div>
          <div
            onClick={() => setMobileNetwork('prepaid')}
            className={`${classes.phonePlan} ${
              mobileNetwork === 'prepaid' ? classes.activeBorder : ''
            }`}
          >
            <div
              className={
                mobileNetwork === 'prepaid'
                  ? classes.phonePlanRadioActive
                  : classes.phonePlanRadio
              }
            />
            <span> Prepaid</span>
          </div>
        </div>
        <SubmitButton title='Sign Up' />
      </div>
    </div>
  );
};
export default NetworkDetails;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '56px',
    height: '416px',
    width: '448px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    height: '56px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '136px',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  phonePlan: {
    width: '448px',
    height: '44px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 12px',
    isolation: 'isolate',
    border: '1px solid #EAEAEA',
    borderRadius: '24px',
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
  },
  activeBorder: {
    border: '1px solid #33CC55',
  },
  phonePlanRadio: {
    width: '20px',
    height: '20px',
    border: '1px solid #EAEAEA',
    position: 'absolute',
    left: '12px',
    borderRadius: '50px',
  },
  phonePlanRadioActive: {
    width: '12px',
    height: '12px',
    position: 'absolute',
    left: '12px',
    borderRadius: '50px',
    border: '5px solid #33CC55',
  },

  continueButton: {
    height: '20px',
    background: '#33CC55',
    borderRadius: '32px',
    padding: '16px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
}));

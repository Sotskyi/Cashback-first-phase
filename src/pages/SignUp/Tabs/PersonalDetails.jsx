import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// import TextField from '@mui/material/TextField';
// import { useValidator } from '../hooks/useValidator';

const PersonalDetails = () => {
  const classes = useStyles();
  //   const [checkIsValid, setIsShowError] = useValidator();
  //   const handleChange = (e) => setPhone(e.target.value);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = () => {
    // setIsShowError(true);
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Add personal details</div>
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
              First name
            </InputLabel>
            <OutlinedInput
              sx={{
                width: '216px',
                padding: '0px 14px',
                height: '48px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                border: '1px solid #EAEAEA',
                borderRadius: '8px',
              }}
            />
          </div>
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
              Last name
            </InputLabel>
            <OutlinedInput
              sx={{
                width: '216px',
                padding: '0px 14px',
                height: '48px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                border: '1px solid #EAEAEA',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
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
            Email
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: '0px 14px',
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
            }}
          />
        </div>
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
            Password
          </InputLabel>
          <OutlinedInput
            sx={{
              padding: '0px 14px',
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
            }}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  size='large'
                >
                  <img
                    //   className={classes.flag}
                    src={
                      showPassword
                        ? 'assets/images/icons/visibilityOn.svg'
                        : 'assets/images/icons/visibilityOff.svg'
                    }
                    alt='menu'
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div onClick={onSubmit} className={classes.continueButton}>
          Continue
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;

const useStyles = makeStyles(() => ({
  contentContainer: {
    marginTop: '56px',
    height: '468px',
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
    justifyContent: 'space-between',
  },
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const PasswordInput = ({ handleChange, isError, title, errorMessage, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  return (
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
        {title || 'Password'}
      </InputLabel>
      <OutlinedInput
        onChange={handleChange}
        id={id || 'password'}
        error={isError}
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
      {isError && (
        <div className={classes.errorMessage}>
          {errorMessage || 'Should contain minimum 7 symbols'}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;

const useStyles = makeStyles(() => ({
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
  },
}));
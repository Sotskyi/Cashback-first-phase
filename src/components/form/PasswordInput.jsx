import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

import visibilityOn from '../../assets/images/icons/visibilityOn.svg';
import visibilityOff from '../../assets/images/icons/visibilityOff.svg';

const PasswordInput = ({
  handleChange,
  isError,
  title,
  errorMessage,
  id,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();
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
        {title || t('PASSWORD')}
      </InputLabel>
      <OutlinedInput
        onChange={handleChange}
        value={value}
        id={id || 'password'}
        error={isError}
        sx={{
          height: '48px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          border: '1px solid #EAEAEA',
          borderRadius: '8px',
          '& input': {
            padding: '8px 8px 8px 16px',
          },
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
                src={showPassword ? visibilityOn : visibilityOff}
                alt='menu'
              />
            </IconButton>
          </InputAdornment>
        }
      />
      {isError && (
        <div className={classes.errorMessage}>
          {errorMessage || t('SHOULD_CONTAIN_MINIMUM_7SYMBOLS')}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  errorMessage: {
    color: 'red',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
    textAlign: 'start',
    [theme.breakpoints.down('xs')]: {
      bottom: '-42px',
    },
  },
}));

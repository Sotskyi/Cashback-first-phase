import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTranslation } from 'react-i18next';

import flag from '../../assets/images/flags/ca.png';

const PhoneNumberInput = ({ handleChange, data, isError }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.phoneNumberContainer}>
      <label className={classes.phoneNumberLabel}>{t('PHONE')}</label>
      <OutlinedInput
        className={classes.phoneNumberInputContainer}
        placeholder='ex: 4165551212'
        error={isError}
        onChange={(e) => {
          if (
            (data.length <= 9 && /^[0-9]*$/.test(e.target.value)) ||
            e.nativeEvent.inputType === 'deleteContentBackward'
          ) {
            handleChange(e);
          }
        }}
        onKeyDown={(e) => handleChange(e)}
        id='phoneNumber'
        type='tel'
        sx={{
          '&>input.MuiInputBase-inputAdornedStart': {
            paddingLeft: '8px',
            height: '10px',
            borderRadius: '0px',
          },
        }}
        value={data}
        startAdornment={
          <>
            <img className={classes.flag} src={flag} alt='menu' />
            <span>+1</span>
            <div className={classes.divider} />
          </>
        }
      />

      <div
        className={classes.phoneNumberError}
        style={{ color: isError && 'red' }}
      >
        {isError ? t('PLEASE_ENTER_PHONE_NUMBER_IN_FORMAT') : 'ex: 4165551212'}
      </div>
    </div>
  );
};

export default PhoneNumberInput;

const useStyles = makeStyles((theme) => ({
  phoneNumberLabel: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '125%',
  },
  phoneNumberContainer: {
    height: '75px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
  },
  phoneNumberInputContainer: {
    borderRadius: '8px',
    height: '46px',
    paddingLeft: '16px',
  },
  flag: {
    marginRight: '9px',
  },
  divider: {
    top: '50%',
    right: '0',
    width: '1px',
    height: '32px',
    backgroundColor: '#0000000f',
  },
  phoneNumberInput: {
    marginLeft: '16px',
    outline: 'none',
    border: 'none',
    height: '32px',
    fontSize: '20px',
    fontFamily: 'Inter',
    width: '100%',
  },
  phoneNumberError: {
    textAlign: 'center',
    height: '16px',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      bottom: '-24px',
      fontSize: '12px',
    },
  },
  errorBorder: {
    border: '1px solid #d32f2f',
  },
}));

import { makeStyles } from '@material-ui/core';

import flag from '../../assets/images/flags/ca.png';

const PhoneNumberInput = ({ handleChange, data, isError }) => {
  const classes = useStyles();
  return (
    <div className={classes.phoneNumberContainer}>
      <label className={classes.phoneNumberLabel}>Phone number</label>
      <div className={classes.phoneNumberInputContainer}>
        <img className={classes.flag} src={flag} alt='menu' />
        <div className={classes.divider} />
        <input
          onChange={(e) => {
            if (
              (data.length <= 9 && /^[0-9]*$/.test(e.target.value)) ||
              e.nativeEvent.inputType === 'deleteContentBackward'
            ) {
              handleChange(e);
            }
          }}
          onKeyDown={(e) => handleChange(e)}
          className={classes.phoneNumberInput}
          id='phoneNumber'
          type='tel'
          value={data}
        />
      </div>
      {isError && (
        <div className={classes.phoneNumberError}>
          Please enter valid phone number format 0987654321
        </div>
      )}
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
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
  },
  flag: {
    margin: '16px',
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
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      bottom: '-42px',
    },
  },
}));

import { makeStyles, TextField } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import { purchaseTypes, paymentMethods } from '../../../utils/constants';
import SubmitButton from '../../../components/form/SubmitButton';
import uploadPhoto from '../../../assets/images/icons/uploadPhoto.svg';

const MobileInput = ({ creds, setCreds, handleChange }) => {
  // const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Please fill out this form for our review, if you believe you have a
        missing transaction.
      </div>
      <div className={classes.contentWrapper}>
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
            Store
          </InputLabel>
          <OutlinedInput
            value={creds.storeName}
            name='storeName'
            // value={creds.firstName}
            // error={
            //   !checkIsValid({
            //     nameOfData: 'firstName',
            //     data: creds.firstName,
            //   })
            // }
            onChange={handleChange}
            sx={{
              width: '300px',
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px!important',
              '& input': {
                padding: '8px 8px 8px 16px',
              },
            }}
          />{' '}
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
            Date of purchase
          </InputLabel>
          <TextField
            value={creds.dateOfPurchase}
            name='dateOfPurchase'
            type='date'
            variant='outlined'
            defaultValue=''
            onChange={handleChange}
            className={classes.calendar}
          />
        </div>

        <div>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
            }}
          >
            Purchase type
          </InputLabel>

          {purchaseTypes.map((el) => (
            <div
              className={classes.chip}
              onClick={() => setCreds({ ...creds, purchaseType: el })}
            >
              <div className={classes.chipRadio}> </div> <span>{el}</span>
            </div>
          ))}
        </div>
        <div>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
            }}
          >
            Payment method
          </InputLabel>

          {paymentMethods.map((el) => (
            <div
              className={classes.chip}
              onClick={() => setCreds({ ...creds, paymentMethod: el })}
            >
              {' '}
              <div className={classes.chipRadio}> </div> <span>{el}</span>
            </div>
          ))}
        </div>
        <div className={classes.contentTextWrapper}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
              width: '100%',
            }}
          >
            Proof of payment
          </InputLabel>
          <div className={classes.contentFirstParagraph}>
            Please upload a receipt or bank statement to show the proof of
            purchase value, transaction date, payment card details and retailer.
            We need to see all this information to confirm your transaction with
            the retailer.
            <div className={classes.contentSecondParagraph}>
              For security, please do not include your full card number, expiry
              date of card or any other account information other than the last
              4 digits of the card, transaction date, amount and retailers
            </div>
          </div>
        </div>
      </div>
      <label
        htmlFor='contained-button-file'
        className={classes.uploadPhotoLabel}
      >
        <div className={classes.uploadPhoto}>
          <input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
            name='image'
            hidden
            // onChange={onChange}
          />
          <img
            className={classes.uploadPhotoIcon}
            src={uploadPhoto}
            alt='img'
          />{' '}
          <span>Upload Photo</span>
        </div>
      </label>
      <div className={classes.submitWrapper}>
        {' '}
        <SubmitButton title='Submit for review' />{' '}
      </div>
    </div>
  );
};
export default MobileInput;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: '64px',
    height: '900px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  title: {
    width: '300px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    color: '#6A6A6A',
    marginTop: '16px',
  },

  inputWrapper: {
    height: '76px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chip: {
    marginTop: '16px',
    width: '300px',
    maxHeight: '44px',
    padding: '12px 0px 12px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  calendar: {
    width: '300px',
    '& .MuiInputBase-formControl': {
      borderRadius: '8px',
    },
    '& input': {
      padding: '8px 8px 8px 16px',
      boxSizing: 'border-box',
      height: '48px',
      borderRadius: '8px',
    },
  },
  contentTextWrapper: {
    minHeight: '312px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentFirstParagraph: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: '#6A6A6A',
    letterSpacing: '0.01em',
  },
  contentSecondParagraph: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: '#6A6A6A',
    letterSpacing: '0.01em',
    marginTop: '24px',
  },

  activeBorder: {
    border: '1px solid #33CC55',
  },
  chipRadio: {
    width: '20px',
    height: '20px',
    border: '1px solid #EAEAEA',
    position: 'absolute',
    left: '12px',
    borderRadius: '50px',
  },
  chipRadioActive: {
    width: '12px',
    height: '12px',
    position: 'absolute',
    left: '12px',
    borderRadius: '50px',
    border: '5px solid #33CC55',
  },

  uploadPhotoLabel: {
    width: '272px',
  },
  uploadPhoto: {
    marginTop: '16px',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '272px',
    height: '52px',
    background: '#FAFAFA',
    borderRadius: '26px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
    cursor: 'pointer',
  },
  uploadPhotoIcon: {
    marginRight: '12px',
  },
  submitWrapper: {
    width: '272px',
  },
}));

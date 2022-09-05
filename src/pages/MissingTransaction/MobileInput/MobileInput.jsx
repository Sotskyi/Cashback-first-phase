import { makeStyles, TextField } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';

import { purchaseTypes, paymentMethods } from '../../../utils/constants';
import SubmitButton from '../../../components/form/SubmitButton';
import AutocompleteInput from '../../../components/lib/AutocompleteInput';
import uploadPhoto from '../../../assets/images/icons/uploadPhoto.svg';
import { makeUpperCase } from '../../../utils/helpers';

const MobileInput = ({
  creds,
  setCreds,
  handleChange,
  onSubmit,
  checkIsValid,
}) => {
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

          <AutocompleteInput
            creds={creds}
            setCreds={setCreds}
            isError={
              !checkIsValid({
                nameOfData: 'isId',
                data: creds.ticket.store,
              })
            }
          />
          {!checkIsValid({
            nameOfData: 'isId',
            data: creds.ticket.store,
          }) && (
            <div className={classes.errorMessage}>
              Store name can’t be empty
            </div>
          )}
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
            open={true}
            value={creds.ticket.purchasedAt}
            name='purchasedAt'
            type='date'
            variant='outlined'
            onChange={handleChange}
            className={classes.calendar}
            error={
              !checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.purchasedAt,
              })
            }
          />
          {!checkIsValid({
            nameOfData: 'isEmpty',
            data: creds.ticket.purchasedAt,
          }) && (
            <div className={classes.errorMessage}>
              Date of purchase can’t be empty
            </div>
          )}
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
            Purchase type
          </InputLabel>

          {purchaseTypes.map((el) => (
            <div
              key={el}
              className={`${classes.chip} ${
                creds.ticket.purchaseType === el && classes.active
              }`}
              onClick={() => {
                setCreds({
                  ...creds,
                  ticket: { ...creds.ticket, purchaseType: el },
                });
              }}
            >
              <div className={classes.chipRadio}> </div>{' '}
              <span>{makeUpperCase(el)}</span>
            </div>
          ))}
          {!checkIsValid({
            nameOfData: 'isEmpty',
            data: creds.ticket.purchaseType,
          }) && (
            <div className={classes.errorMessage}>
              Purchase type can’t be empty
            </div>
          )}
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
            Payment method
          </InputLabel>

          {paymentMethods.map((el) => (
            <div
              key={el}
              className={`${classes.chip} ${
                creds.ticket.paymentMethod === el && classes.active
              }`}
              onClick={() => {
                setCreds({
                  ...creds,
                  ticket: { ...creds.ticket, paymentMethod: el },
                });
              }}
            >
              <div className={classes.chipRadio}> </div>
              <span>{makeUpperCase(el)}</span>
            </div>
          ))}
          {!checkIsValid({
            nameOfData: 'isEmpty',
            data: creds.ticket.paymentMethod,
          }) && (
            <div className={classes.errorMessage}>
              Payment method ca’t be empty
            </div>
          )}
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
            name='paymentProof'
            hidden
            onChange={handleChange}
          />
          <img
            className={classes.uploadPhotoIcon}
            src={uploadPhoto}
            alt='img'
          />
          <span>Upload Photo</span>
        </div>
        {!checkIsValid({
          nameOfData: 'isPaymentProof',
          data: creds.paymentProof.name,
        }) && <div className={classes.errorMessage}>Please upload proof</div>}
      </label>
      <div className={classes.submitWrapper}>
        {' '}
        <SubmitButton title='Submit for review' onSubmit={onSubmit} />
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
    marginTop: '30px',
    height: '950px',
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
    // height: '76px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  purchaseInputWrapper: {
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
  active: {
    border: '1px solid #33CC55',
    '& div': {
      width: '12px',
      height: '12px',
      position: 'absolute',
      left: '12px',
      borderRadius: '50px',
      border: '5px solid #33CC55',
    },
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
    marginBottom: '16px',
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
  errorMessage: {
    marginTop: '12px',
    color: 'red',
    textAlign: 'start',
    fontFamily: 'Inter',
    fontSize: '14px',
    width: '100%',
    height: '20px',
  },
}));

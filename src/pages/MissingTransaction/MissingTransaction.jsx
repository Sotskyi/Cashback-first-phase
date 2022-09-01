import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles, TextField } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import SubmitButton from '../../components/form/SubmitButton';
import uploadPhoto from '../../assets/images/icons/uploadPhoto.svg';
import MobileInput from './MobileInput/MobileInput';
import { purchaseTypes, paymentMethods } from '../../utils/constants';
import { useValidator } from '../../hooks/useValidator';
import { getError, makeUpperCase } from '../../utils/helpers';

const MissingTransaction = () => {
  const [checkIsValid, setIsShowError] = useValidator();
  const matches = useMediaQuery('(max-width:700px)');
  const classes = useStyles();
  const [creds, setCreds] = useState({
    ticket: { store: '', purchasedAt: '', purchaseType: '', paymentMethod: '' },
    paymentProof: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
    if (e.target.name === 'paymentProof' && e.target.files[0]) {
      return setCreds({ ...creds, paymentProof: e.target.files[0] });
    }
    return setCreds({ ...creds, ticket: { ...creds.ticket, [name]: value } });
  };

  const onSubmit = () => {
    setIsShowError(true);

    if (
      checkIsValid({
        nameOfData: 'isEmpty',
        data: creds.ticket.store,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'isEmpty',
        data: creds.ticket.purchasedAt,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'isEmpty',
        data: creds.ticket.purchaseType,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'isEmpty',
        data: creds.ticket.paymentMethod,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'isPaymentProof',
        data: creds.paymentProof.name,
        showErrorSync: true,
      })
    ) {
      try {
        const credsToJson = JSON.stringify(creds.ticket);
        const formData = new FormData();
        formData.append('ticket', credsToJson);
        formData.append('paymentProof', creds.paymentProof);
        axios.post('/tickets', formData);
      } catch (error) {
        toast.error(getError(error));
      }
    }
  };
  return (
    <div className={classes.container}>
      {matches ? (
        <MobileInput
          handleChange={handleChange}
          creds={creds}
          setCreds={setCreds}
          onSubmit={onSubmit}
          checkIsValid={checkIsValid}
        />
      ) : (
        <div className={classes.contentWrapper}>
          <div className={classes.title}>Report a missing transaction</div>
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
                Store
              </InputLabel>
              <OutlinedInput
                value={creds.ticket.store}
                name='store'
                onChange={handleChange}
                sx={{
                  width: { xs: '136px', sm: '368px' },
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
              />
              {!checkIsValid({
                nameOfData: 'isEmpty',
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
                value={creds.ticket.purchasedAt}
                name='purchasedAt'
                type='date'
                variant='outlined'
                onChange={handleChange}
                className={classes.calendar}
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
                Purchase type
              </InputLabel>
              <Select
                value={creds.ticket.purchaseType}
                name='purchaseType'
                onChange={handleChange}
                displayEmpty
                inputProps={{
                  'aria-label': 'Without label',
                }}
                sx={{
                  width: { xs: '136px', sm: '368px' },
                  height: '48px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '20px',
                  border: '1px solid #EAEAEA',
                  borderRadius: '8px!important',
                  paddingLeft: '2px',
                  '&.MuiOutlinedInput-root .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              >
                {purchaseTypes.map((el) => (
                  <MenuItem key={el} value={el}>
                    {makeUpperCase(el)}
                  </MenuItem>
                ))}
              </Select>
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
              <Select
                value={creds.ticket.paymentMethod}
                name='paymentMethod'
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  width: { xs: '136px', sm: '368px' },
                  paddingLeft: '2px',
                  height: '48px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '20px',
                  border: '1px solid #EAEAEA',
                  borderRadius: '8px!important',
                  '&.MuiOutlinedInput-root .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              >
                {paymentMethods.map((el) => (
                  <MenuItem key={el} value={el}>
                    {makeUpperCase(el)}
                  </MenuItem>
                ))}
              </Select>
              {!checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.paymentMethod,
              }) && (
                <div className={classes.errorMessage}>
                  Payment method ca’t be empty
                </div>
              )}
            </div>
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
              purchase value, transaction date, payment card details and
              retailer. We need to see all this information to confirm your
              transaction with the retailer.
              <div className={classes.contentSecondParagraph}>
                For security, please do not include your full card number,
                expiry date of card or any other account information other than
                the last 4 digits of the card, transaction date, amount and
                retailers
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
              />{' '}
              <span>Upload Photo</span>
            </div>
            {!checkIsValid({
              nameOfData: 'isPaymentProof',
              data: creds.paymentProof.name,
            }) && (
              <div className={classes.errorMessage}>Please upload proof</div>
            )}
          </label>

          <div className={classes.submitWrapper}>
            {' '}
            <SubmitButton title='Submit for review' onSubmit={onSubmit} />{' '}
          </div>
        </div>
      )}
    </div>
  );
};
export default MissingTransaction;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',

    justifyContent: 'center',
  },
  contentWrapper: {
    width: '752px',
    height: '612px',
    [theme.breakpoints.down('sm')]: {
      paddingInline: '16px',
      height: '1292px',
    },
    marginTop: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '0.02em',
  },
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },

  errorMessage: {
    color: 'red',
    textAlign: 'start',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-24px',
    width: '100%',
    height: '20px',
    [theme.breakpoints.down('xs')]: {
      bottom: '-36px',
    },
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '752px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  calendar: {
    width: '368px',
    '& .MuiInputBase-formControl': {
      borderRadius: '8px',
    },
    '& input': {
      padding: '8px 8px 8px 16px',
      boxSizing: 'border-box',
      height: '48px',
      borderRadius: '8px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '120%',
      letterSpacing: '0.02em',
    },
  },

  contentTextWrapper: {
    height: '172px',
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
  uploadPhotoLabel: {
    width: '272px',
    position: 'relative',
    height: '61px',
  },
  uploadPhoto: {
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

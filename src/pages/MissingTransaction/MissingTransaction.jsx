import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SubmitButton from '../../components/form/SubmitButton';
import uploadPhoto from '../../assets/images/icons/uploadPhoto.svg';
import MobileInput from './MobileInput/MobileInput';
import { purchaseTypes, paymentMethods } from '../../utils/constants';
import { useValidator } from '../../hooks/useValidator';
import { getError } from '../../utils/helpers';
import AutocompleteInput from '../../components/lib/AutocompleteInput';
import Calendar from '../../components/lib/Calendar';

const MissingTransaction = () => {
  const [checkIsValid, setIsShowError] = useValidator();
  const matches = useMediaQuery('(max-width:700px)');
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation();

  const [creds, setCreds] = useState({
    ticket: {
      store: '',
      purchasedAt: new Date(),
      purchaseType: '',
      paymentMethod: '',
      amount: '',
    },
    paymentProof: '',
  });
  // const handleChangeDate = (date) => {
  //   setCreds({
  //     ...creds,
  //     ticket: { ...creds.ticket, purchasedAt: date },
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
    if (e.target.name === 'paymentProof' && e.target.files[0]) {
      return setCreds({ ...creds, paymentProof: e.target.files[0] });
    }
    if (e.target.name === 'amount') {
      return setCreds({
        ...creds,
        ticket: { ...creds.ticket, amount: value },
      });
    }
    return setCreds({ ...creds, ticket: { ...creds.ticket, [name]: value } });
  };

  const handleChangeDate = (date) =>
    setCreds({
      ...creds,
      ticket: { ...creds.purchasedAt, purchasedAt: date },
    });

  const onSubmit = async () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'id',
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
      }) &&
      checkIsValid({
        nameOfData: 'isEmpty',
        data: creds.ticket.amount,
        showErrorSync: true,
      })
    ) {
      try {
        const credsToJson = JSON.stringify(creds.ticket);
        const formData = new FormData();
        formData.append('ticket', credsToJson);
        formData.append('paymentProof', creds.paymentProof);
        await axios.post('/tickets', formData);
        toast.success(t('MISSING_TRANSACTION_CREATED'));
        navigate('/');
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
          handleChangeDate={handleChangeDate}
        />
      ) : (
        <div className={classes.contentWrapper}>
          <div className={classes.title}>{t('REPORT_MISSING_TRANSACTION')}</div>
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
                {t('STORE')}
              </InputLabel>
              <AutocompleteInput
                setCreds={setCreds}
                creds={creds}
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
                  {t('STORE_CANT_EMPTY')}
                </div>
              )}
            </div>
            <div className={classes.inputWrapper} style={{ display: 'block' }}>
              <InputLabel
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  color: 'black',
                }}
              >
                {t('DATE_OF_PURCHASE')}
              </InputLabel>
              <Calendar
                date={creds.ticket.purchasedAt}
                handleChangeDate={handleChangeDate}
                errorMessage={t('DATE_OF_PURCHASE_CANT_EMPTY')}
              />
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
                {t('PURCHASE_TYPE')}
              </InputLabel>
              <Select
                error={
                  !checkIsValid({
                    nameOfData: 'isEmpty',
                    data: creds.ticket.purchaseType,
                  })
                }
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
                  <MenuItem key={el.value} value={el.value}>
                    {t(el.forTranslate)}
                  </MenuItem>
                ))}
              </Select>
              {!checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.purchaseType,
              }) && (
                <div className={classes.errorMessage}>
                  {t('PURCHASE_TYPE_CANT_EMPTY')}
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
                {t('PAYMENT_METHOD')}
              </InputLabel>
              <Select
                error={
                  !checkIsValid({
                    nameOfData: 'isEmpty',
                    data: creds.ticket.paymentMethod,
                  })
                }
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
                  <MenuItem key={el.value} value={el.value}>
                    {t(el.forTranslate)}
                  </MenuItem>
                ))}
              </Select>
              {!checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.paymentMethod,
              }) && (
                <div className={classes.errorMessage}>
                  {t('PAYMENT_METHOD_CANT_EMPTY')}
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
                {t('ORDER_AMOUNT')}
              </InputLabel>
              <OutlinedInput
                onChange={(e) => {
                  if (
                    /^\d+$/.test(e.target.value) ||
                    e.nativeEvent.inputType === 'deleteContentBackward'
                  ) {
                    handleChange(e);
                  }
                }}
                onKeyDown={(e) => handleChange(e)}
                // type='number'
                name='amount'
                value={creds.ticket.amount}
                sx={{
                  width: { xs: '136px', sm: '368px' },
                  height: '48px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '20px',
                  border: '1px solid #EAEAEA',
                  borderRadius: '8px',
                  '&.MuiOutlinedInput-root.MuiInputBase-root': {
                    borderRadius: '8px',
                  },
                  '& input': {
                    padding: '8px 8px 8px 16px',
                  },
                }}
                error={
                  !checkIsValid({
                    nameOfData: 'isEmpty',
                    data: creds.ticket.amount,
                  })
                }
              />
              {!checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.paymentMethod,
              }) && (
                <div className={classes.errorMessage}>
                  {t('PLEASE_ENTER_VALID_AMOUNT')}
                </div>
              )}
            </div>
          </div>
          <div className={classes.inputWrapper} style={{ height: '143px' }}>
            <InputLabel
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '16px',
                color: 'black',
              }}
            >
              {t('COMMENT')}
            </InputLabel>
            <TextareaAutosize
              className={classes.textArea}
              minRows={3}
              maxRows={3}
              onChange={handleChange}
              name='comment'
              value={creds.ticket.comment}
            />
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
              {t('PROOF_OF_PAYMENT')}
            </InputLabel>
            <div className={classes.contentFirstParagraph}>
              {t('PLEASE_UPLOAD_RECEIPT')}
              <div className={classes.contentSecondParagraph}>
                {t('FOR_SECURITY')}
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
              <span>{t('UPLOAD_PHOTO')}</span>
            </div>
            {!checkIsValid({
              nameOfData: 'isPaymentProof',
              data: creds.paymentProof.name,
            }) && (
              <div className={classes.errorMessage}>{t('UPLOAD_PHOTO')}</div>
            )}
          </label>

          <div className={classes.submitWrapper}>
            {' '}
            <SubmitButton
              title={t('SUBMIT_FOR_REVIEW')}
              onSubmit={onSubmit}
            />{' '}
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
    height: '877px',
    [theme.breakpoints.down('sm')]: {
      height: '720px',
    },
    [theme.breakpoints.down('xs')]: {
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
    // height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  errorMessage: {
    marginTop: '10px',
    color: 'red',
    textAlign: 'start',
    fontFamily: 'Inter',
    fontSize: '14px',
    // position: 'absolute',
    // bottom: '-24px',
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
  textArea: {
    height: '93px',
    minHeight: '93px',
    maxHeight: '93px',
    minWidth: '100%',
    maxWidth: '100%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    padding: '8px 8px 8px 16px',
    overflow: 'unset',
    [theme.breakpoints.down('xs')]: {
      minHeight: '300px',
    },
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

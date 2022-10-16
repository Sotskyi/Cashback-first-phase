import { makeStyles } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import OutlinedInput from '@mui/material/OutlinedInput';
import Calendar from '../../../components/lib/Calendar';

import { purchaseTypes, paymentMethods } from '../../../utils/constants';
import SubmitButton from '../../../components/form/SubmitButton';
import AutocompleteInput from '../../../components/lib/AutocompleteInput';
import uploadPhoto from '../../../assets/images/icons/uploadPhoto.svg';

const MobileInput = ({
  creds,
  setCreds,
  handleChange,
  onSubmit,
  checkIsValid,
  handleChangeDate,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('FILL_OUT_THIS_FORM')}</div>
      <div className={classes.contentWrapper}>
        <div className={classes.inputWrapper}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
              marginBottom: '7px',
            }}
          >
            {t('STORE')}
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
            <div className={classes.errorMessage}>{t('STORE_CANT_EMPTY')}</div>
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
              marginBottom: '7px',
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
        <div className={classes.inputWrapper}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              marginBottom: '7px',
              color: 'black',
            }}
          >
            {t('PURCHASE_TYPE')}
          </InputLabel>

          {purchaseTypes.map((el) => (
            <div
              key={el.value}
              className={`${classes.chip} ${
                creds.ticket.purchaseType === el.value && classes.active
              }`}
              onClick={() => {
                setCreds({
                  ...creds,
                  ticket: { ...creds.ticket, purchaseType: el.value },
                });
              }}
            >
              <div className={classes.chipRadio}> </div>{' '}
              <span>{t(el.forTranslate)}</span>
            </div>
          ))}
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
              marginBottom: '7px',
            }}
          >
            {t('PAYMENT_METHOD')}
          </InputLabel>

          {paymentMethods.map((el) => (
            <div
              key={el.value}
              className={`${classes.chip} ${
                creds.ticket.paymentMethod === el.value && classes.active
              }`}
              onClick={() => {
                setCreds({
                  ...creds,
                  ticket: { ...creds.ticket, paymentMethod: el.value },
                });
              }}
            >
              <div className={classes.chipRadio}> </div>
              <span>{t(el.forTranslate)}</span>
            </div>
          ))}
          {!checkIsValid({
            nameOfData: 'isEmpty',
            data: creds.ticket.paymentMethod,
          }) && (
            <div className={classes.errorMessage}>
              {t('PAYMENT_METHOD_CANT_EMPTY')}
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
              marginBottom: '7px',
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
            name='amount'
            value={creds.ticket.amount}
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
            error={
              !checkIsValid({
                nameOfData: 'isEmpty',
                data: creds.ticket.amount,
              })
            }
          />
          {!checkIsValid({
            nameOfData: 'isEmpty',
            data: creds.ticket.amount,
          }) && (
            <div className={classes.errorMessage}>
              {t('PLEASE_ENTER_VALID_AMOUNT')}
            </div>
          )}
        </div>
        <div className={classes.inputWrapper} style={{ height: '143px' }}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
              marginBottom: '7px',
            }}
          >
            {t('COMMENT')}
          </InputLabel>
          <TextareaAutosize
            onChange={handleChange}
            name='comment'
            value={creds.ticket.comment}
            style={{
              height: '93px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
              padding: '8px 8px 8px 16px',
              overflow: 'unset',
              '& input': {},
            }}
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
              marginTop: '7px',
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
          <span>{t('UPLOAD_PHOTO')}</span>
        </div>
        {!checkIsValid({
          nameOfData: 'isPaymentProof',
          data: creds.paymentProof.name,
        }) && <div className={classes.errorMessage}>{t('UPLOAD_PHOTO')}</div>}
      </label>
      <div className={classes.submitWrapper}>
        {' '}
        <SubmitButton title={t('SUBMIT_FOR_REVIEW')} onSubmit={onSubmit} />
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
    margin: '0px 0px 20px',
  },
  contentWrapper: {
    marginTop: '30px',
    height: '1300px',
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

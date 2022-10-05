import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';

import SubmitButton from '../../../components/form/SubmitButton';
import { useValidator } from '../../../hooks/useValidator';

const NetworkDetails = ({ creds, setCreds, onSubmit }) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles({ language: i18n.language });

  const [data, setData] = useState([]);
  const [isAgree, setIsAgree] = useState(false);
  const [checkIsValid, setIsShowError] = useValidator();

  useEffect(() => {
    const getMobileNetworks = async () => {
      const response = await axios.get('/carriers');
      setData(response.data);
    };

    getMobileNetworks();
  }, []);

  const handleSubmit = () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'carrier',
        data: creds.carrier,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'isAgree',
        data: isAgree,
        showErrorSync: true,
      })
    ) {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{t('ADD_NETWORK_DETAILS')}</div>
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
            {t('MOBILE_NETWORK_CARRIER')}
          </InputLabel>
          <Select
            value={creds.carrier}
            onChange={(e) => setCreds({ ...creds, carrier: e.target.value })}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            error={
              !checkIsValid({
                nameOfData: 'carrier',
                data: creds.carrier,
              })
            }
            sx={{
              width: '100%',
              padding: '0px 14px',
              height: '48px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '20px',
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
            }}
          >
            {data.map((el) => (
              <MenuItem key={el.title} value={el.id} id='carrier'>
                {el.title}
              </MenuItem>
            ))}
          </Select>
          {!checkIsValid({
            nameOfData: 'carrier',
            data: creds.carrier,
          }) && (
            <div className={classes.errorMessage}>
              {t('PLEASE_SELECT_VALID_MOBILE_NETWORK')}
            </div>
          )}
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
              {t('PHONE_PLAN')}
            </InputLabel>
            <div
              // onClick={() => setCreds({ ...creds, phonePlan: 'monthly' })}
              className={`${classes.chip} 
              ${creds.phonePlan === 'monthly' ? classes.activeBorder : ''}`}
              style={{ cursor: 'unset', color: 'grey' }}
            >
              <div
                className={
                  creds.phonePlan === 'monthly'
                    ? classes.chipRadioActive
                    : classes.chipRadio
                }
              />
              <span> {t('MONTHLY')}</span>
            </div>
          </div>
          <div
            onClick={() => setCreds({ ...creds, phonePlan: 'prepaid' })}
            className={`${classes.chip} ${
              creds.phonePlan === 'prepaid' ? classes.activeBorder : ''
            }`}
          >
            <div
              className={
                creds.phonePlan === 'prepaid'
                  ? classes.chipRadioActive
                  : classes.chipRadio
              }
            />
            <span> {t('PREPAID')}</span>
          </div>
        </div>
        <div className={classes.inputWrapper} style={{ height: '63px' }}>
          <InputLabel
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: 'black',
            }}
          >
            {t('TERMS_CONDITIONS')}
          </InputLabel>
          <div
            onClick={() => setIsAgree((prev) => !prev)}
            className={`${classes.chip} ${isAgree && classes.activeBorder}`}
            style={{ height: '35px' }}
          >
            <div
              className={
                isAgree ? classes.chipRadioActiveSmall : classes.chipRadio
              }
              style={{ width: '12px', height: '12px' }}
            />
            <div className={classes.receiveEmail}>{t('I_AGREE')}</div>
          </div>
          {!checkIsValid({
            nameOfData: 'isAgree',
            data: isAgree,
          }) && (
            <div className={classes.errorMessage} style={{ top: '62px' }}>
              {t('PLEASE_AGREE')}
            </div>
          )}
        </div>
        <SubmitButton title={t('SIGN_UP')} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
export default NetworkDetails;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '28px',
    height: '545px',
    // width: '448px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      height: '580px',
    },
  },
  title: {
    height: '56px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    // lineHeight: '140%',
    letterSpacing: '-0.02em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '136px',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    height: '76px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  errorMessage: {
    position: 'absolute',
    top: '80px',
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    marginTop: '8px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      bottom: '-36px',
      fontSize: '12px',
    },
  },
  chip: {
    // width: '422px',
    height: '44px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 12px',
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

  chipRadioActiveSmall: {
    width: '11px',
    height: '11px',
    position: 'absolute',
    left: '12px',
    borderRadius: '50px',
    border: '3px solid #33CC55',
  },
  activeBorder: {
    border: '1px solid #33CC55',
  },
  receiveEmail: {
    fontSize: (props) => {
      if (props.language === 'fr') {
        return '13px';
      }
      return '14px';
    },
    letterSpacing: (props) => {
      if (props.language === 'fr') {
        return '-0.03em';
      }
      return '0';
    },

    [theme.breakpoints.down('xs')]: {
      width: '200px',
      textAlign: 'center',
      fontSize: '13px',
    },
  },
}));

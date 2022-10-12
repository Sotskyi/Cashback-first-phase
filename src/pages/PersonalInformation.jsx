import { useEffect, useState } from 'react';
import axios from 'axios';
import OutlinedInput from '@mui/material/OutlinedInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { makeUpperCase, getError } from '../utils/helpers';
import change from '../assets/images/icons/change.svg';
import { setUser } from '../redux/slices/authSlice';
import { useValidator } from '../hooks/useValidator';

const PersonalInformation = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const [checkIsValid, setIsShowError] = useValidator();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [initialValue, setInitialValue] = useState({
    email: user?.email,
    billingNumber: user?.billingNumber,
    acceptEmails: user?.acceptEmails,
    language: user?.language,
    phoneNumber: user?.phoneNumber,
    carrier: user?.carrierInfo?.carrierId,
  });
  const [isChangeable, setIsChangeable] = useState(false);

  const handleChange = (e) => {
    let { value } = e.target;
    if (e.target.id === 'carrier') {
      value = Number(value);
    }
    setInitialValue({ ...initialValue, [e.target.id]: value });
  };

  const [mobileNetworks, setMobileNetworks] = useState([]);

  useEffect(() => {
    const getMobileNetworks = async () => {
      const response = await axios.get('/carriers');
      setMobileNetworks(response.data);
    };

    getMobileNetworks();
  }, []);

  const updateUser = async () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'email',
        data: initialValue.email,
        showErrorSync: true,
      })
    ) {
      try {
        const response = await axios.patch('/users', {
          ...initialValue,
        });
        dispatch(setUser(response.data));
        setIsChangeable(false);
        toast.success('User personal info updated');
      } catch (error) {
        toast.error(getError(error.data));
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.leftContent}>
          <div className={classes.updateContainer}>
            <div onClick={() => setIsChangeable((prev) => !prev)}>
              <img className={classes.changeIcon} src={change} alt='change' />
            </div>
            {isChangeable && (
              <span className={classes.updateButton} onClick={updateUser}>
                {t('UPDATE')}
              </span>
            )}
          </div>
          <div className={classes.header}>
            <div className={classes.initials}>
              {user.firstName} {user.lastName}
            </div>
            {isChangeable ? (
              <>
                <OutlinedInput
                  id='email'
                  sx={{
                    '&.MuiOutlinedInput-root': {
                      width: '100%',
                      '&>input': {
                        height: '0px',
                        borderRadius: '7px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '120%',
                        letterSpacing: '0.01em',
                        textAlign: 'center',
                      },
                    },
                  }}
                  autoFocus={true}
                  onChange={handleChange}
                  value={initialValue.email}
                  error={
                    !checkIsValid({
                      nameOfData: 'email',
                      data: initialValue.email,
                    })
                  }
                />
                {!checkIsValid({
                  nameOfData: 'email',
                  data: initialValue.email,
                }) && (
                  <div className={classes.errorMessage}>
                    {t('PLEASE_ENTER_VALID_EMAIL')}
                  </div>
                )}
              </>
            ) : (
              <div className={classes.email}>{initialValue.email} </div>
            )}
          </div>

          <div className={classes.bodyContainer}>
            <div className={classes.phoneNumberContainer}>
              <div className={classes.phoneNumber}>
                {initialValue.phoneNumber}{' '}
              </div>
              <div className={classes.subTitle}>{t('PHONE')}</div>
            </div>
            <div className={classes.phonePlanContainer}>
              <div className={classes.phonePlanName}>
                <div className={classes.phonePlanTitle}>
                  {isChangeable ? (
                    <select
                      defaultValue={initialValue.carrier}
                      disabled={!isChangeable}
                      onChange={handleChange}
                      className={classes.select}
                      id='carrier'
                    >
                      {mobileNetworks.map((el) => (
                        <option key={el.title} value={el.id}>
                          {el.title}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className={classes.select}>
                      {user?.carrierInfo?.carrierTitle}
                    </div>
                  )}
                </div>
                <div className={classes.subTitle}>{t('CARRIER')} </div>
              </div>
              <div className={classes.phonePlanName}>
                <div className={classes.phonePlanTitle}>
                  {makeUpperCase(user?.phonePlan)}
                </div>
                <div className={classes.subTitle}>{t('PHONE_PLAN')}</div>
              </div>
            </div>
            <div className={classes.currentBalanceContainer}>
              <div className={classes.currentBalanceLabel}>
                {t('CURRENT_BALANCE')}
              </div>
              <div className={classes.currentBalanceNumbers}>
                $ {user?.wallet?.balance || 0}
              </div>
            </div>
            <div className={classes.billingNumberContainer}>
              <div className={classes.billingNumber}>
                {initialValue.billingNumber}
              </div>

              <div className={classes.billingNumberTitle}>
                {t('BILLING_NUMBER')}
              </div>
            </div>
            <div className={classes.englishContainer}>
              <div
                className={`${classes.chip} ${
                  initialValue.language === 'en' && classes.activeChip
                }`}
                onClick={() => {
                  return (
                    isChangeable &&
                    setInitialValue({ ...initialValue, language: 'en' })
                  );
                }}
              >
                English
              </div>
              <div
                className={`${classes.chip} ${
                  initialValue.language === 'fr' && classes.activeChip
                }`}
                onClick={() => {
                  return (
                    isChangeable &&
                    setInitialValue({ ...initialValue, language: 'fr' })
                  );
                }}
              >
                Français
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInformation;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  updateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  updateButton: {
    padding: ' 0px 9px 0px 9px',
    cursor: 'pointer',
    width: '104px',
    height: '30px',
    background: '#33CC55',
    borderRadius: '26px',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      width: '94px',
    },
  },
  changeIcon: {
    cursor: 'pointer',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '752px',
    height: '612px',
    [theme.breakpoints.down('sm')]: {
      height: '720px',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
    marginTop: '48px',
  },
  leftContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '32px 16px 16px 16px',
    width: '370px',
    height: '560px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    [theme.breakpoints.down('xs')]: {
      width: '330px',
    },
  },
  subTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
    marginTop: '7px',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: '7px',
    fontFamily: 'Inter',
    fontSize: '14px',
    textAlign: 'center',
    bottom: '-24px',
    width: '100%',
    height: '20px',
  },
  header: {
    height: '52px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  initials: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '120%',
    letterSpacing: '0.01em',
    textAlign: 'center',
  },
  phoneNumberContainer: {
    marginTop: '32px',
    width: '100%',
    height: '96px',
    background: '#FAFAFA',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '24px 0px 16px 0px',
  },
  phoneNumber: {
    // border: 'none',
    borderRadius: '7px',
    background: 'inherit',
    width: '98%',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing: '-0.02em',
  },
  phonePlanContainer: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  select: {
    width: '100%',
    textAlign: 'center',
  },
  phonePlanName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '180px',
    height: '100px',
    padding: '24px 0px 16px 0px',
    background: '#FAFAFA',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'Inter',
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      width: '162px',
    },
  },
  currentBalanceContainer: {
    width: '100%',
    height: '76px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  currentBalanceLabel: {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: '#000000',
    fontWeight: '600',
  },
  currentBalanceNumbers: {
    borderRadius: '8px',
    border: '1px solid #EAEAEA',
    height: '48px',
    padding: '14px 0px 14px 14px',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: '125%',
    fontSize: '16px',
  },
  billingNumberContainer: {
    width: '100%',
    borderRadius: '8px',
    background: '#FAFAFA',
    padding: '16px 0px 16px 0px',
    boxSizing: 'border-box',
  },
  billingNumber: {
    width: '98%',
    borderRadius: '7px',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Inter',
    lineHeight: '20px',
    letterSpacing: '0.01em',
  },
  billingNumberTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
    marginTop: '8px',
    textAlign: 'center',
  },
  englishContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    height: '40px',
    border: '1px solid #EAEAEA',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: '#6A6A6A',
    borderRadius: '26px',
  },
  chip: {
    width: '49%',
    height: '32px',
    borderRadius: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  activeChip: {
    background: '#33CC55',
    borderRadius: '22px',
    color: '#FFFFFF;',

    // cursor: 'pointer',
  },
  rightContent: {},
}));

import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/form/SubmitButton';
import PasswordInput from '../../../components/form/PasswordInput';
import MobileViewInputs from '../components/MobileViewInput';

const PersonalDetails = ({ next, creds, setCreds, handleChange }) => {
  const { t, i18n } = useTranslation();

  const matches = useMediaQuery('(max-width:700px)');
  const classes = useStyles({ language: i18n.language, isMatches: matches });

  const language = [
    { value: 'en', title: 'English' },
    { value: 'fr', title: 'French' },
  ];
  const [checkIsValid, setIsShowError] = useValidator();
  const onSubmit = () => {
    setIsShowError(true);
    if (
      checkIsValid({
        nameOfData: 'firstName',
        data: creds.firstName,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'lastName',
        data: creds.lastName,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'email',
        data: creds.email,
        showErrorSync: true,
      }) &&
      checkIsValid({
        nameOfData: 'password',
        data: creds.password,
        showErrorSync: true,
      })
    ) {
      setCreds({
        ...creds,
        firstName: creds.firstName,
        lastName: creds.lastName,
        email: creds.email,
        password: creds.password,
      });
      next();
    }
  };

  return (
    <div className={classes.contentContainer}>
      <div className={classes.title}>{t('ADD_PERSONAL_DETAILS')}</div>
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
            {t('FIRST_NAME')}
          </InputLabel>
          <OutlinedInput
            onChange={handleChange}
            id='firstName'
            value={creds.firstName}
            error={
              !checkIsValid({
                nameOfData: 'firstName',
                data: creds.firstName,
              })
            }
            sx={{
              width: { xs: '136px', sm: '216px' },
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
          />

          {!checkIsValid({
            nameOfData: 'firstName',
            data: creds.firstName,
          }) && (
            <div className={classes.errorMessage}>
              {t('THE_FIRST_NAME_MIN')}
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
            {t('LAST_NAME')}
          </InputLabel>
          <OutlinedInput
            onChange={handleChange}
            id='lastName'
            value={creds.lastName}
            sx={{
              width: { xs: '136px', sm: '216px' },
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
                nameOfData: 'lastName',
                data: creds.lastName,
              })
            }
          />
          {!checkIsValid({
            nameOfData: 'lastName',
            data: creds.lastName,
          }) && (
            <div className={classes.errorMessage}>{t('THE_LAST_NAME_MIN')}</div>
          )}
        </div>
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
          {t('EMAIL')}
        </InputLabel>
        <OutlinedInput
          onChange={handleChange}
          id='email'
          value={creds.email}
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
              nameOfData: 'email',
              data: creds.email,
            })
          }
        />
        {!checkIsValid({
          nameOfData: 'email',
          data: creds.email,
        }) && (
          <div className={classes.errorMessage}>
            {t('PLEASE_ENTER_VALID_EMAIL')}
          </div>
        )}
      </div>
      <PasswordInput
        handleChange={handleChange}
        value={creds.password}
        isError={
          !checkIsValid({
            nameOfData: 'password',
            data: creds.password,
          })
        }
      />

      {matches ? (
        <MobileViewInputs creds={creds} setCreds={setCreds} />
      ) : (
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
            {t('COMUNICATION_PREFERENCE')}
          </InputLabel>
          <Select
            value={creds.language}
            onChange={(e) => setCreds({ ...creds, language: e.target.value })}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue='en'
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
            {language.map((el) => (
              <MenuItem key={el.title} value={el.value} id='language'>
                {el.title}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
      <div
        onClick={() => {
          return setCreds({ ...creds, acceptEmails: !creds.acceptEmails });
        }}
        className={`${classes.chip} ${
          creds.acceptEmails && classes.activeBorder
        }`}
      >
        <div
          className={
            creds.acceptEmails ? classes.chipRadioActive : classes.chipRadio
          }
        />
        <span className={classes.receiveEmail}>{t('RECEIVE_OFFERS')}</span>
      </div>
      <SubmitButton onSubmit={onSubmit} title={t('CONTINUE')} />
    </div>
  );
};
export default PersonalDetails;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '28px',
    height: '580px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      height: '674px',
    },
  },
  title: {
    height: '56px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    // fontSize: '34px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',

    fontSize: (props) => {
      if (props.isMatches) {
        return '25px';
      }
      if (props.language === 'fr') {
        return '34px';
      }
      return '40px';
    },
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
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
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    position: 'absolute',
    bottom: '-25px',
    width: '100%',
    height: '20px',
    [theme.breakpoints.down('xs')]: {
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
  activeBorder: {
    border: '1px solid #33CC55',
  },
  receiveEmail: {
    fontSize: (props) => {
      if (props.language === 'fr') {
        return '14px';
      }
      return '16px';
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

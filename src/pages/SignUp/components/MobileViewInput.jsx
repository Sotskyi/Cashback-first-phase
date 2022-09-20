import { makeStyles } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import { useTranslation } from 'react-i18next';

const MobileViewInputs = ({ creds, setCreds }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
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
          {t('COMUNICATION_PREFERENCE')}
        </InputLabel>
        <div
          onClick={() => setCreds({ ...creds, language: 'en' })}
          className={`${classes.chip} ${
            creds.language === 'en' && classes.activeBorder
          }`}
        >
          <div
            className={
              creds.language === 'en'
                ? classes.chipRadioActive
                : classes.chipRadio
            }
          />
          <span>English</span>
        </div>
      </div>
      <div
        onClick={() => setCreds({ ...creds, language: 'fr' })}
        className={`${classes.chip} ${
          creds.language === 'fr' ? classes.activeBorder : ''
        }`}
      >
        <div
          className={
            creds.language === 'fr'
              ? classes.chipRadioActive
              : classes.chipRadio
          }
        />
        <span> French</span>
      </div>
    </div>
  );
};
export default MobileViewInputs;

const useStyles = makeStyles(() => ({
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '132px',
    flexDirection: 'column',
  },
  inputWrapper: {
    height: '76px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
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
}));

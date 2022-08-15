import { makeStyles, TextField } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import SubmitButton from '../components/form/SubmitButton';
import uploadPhoto from '../assets/images/icons/uploadPhoto.svg';

const MissingTransaction = () => {
  // const navigate = useNavigate();

  const classes = useStyles();
  const purchaseTypes = ['Mobile', 'Desktop'];
  const paymentMethods = ['Credit Card', 'Debit Card', 'Installment payments'];
  return (
    <div className={classes.container}>
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
              //
              id='store'
              // value={creds.firstName}
              // error={
              //   !checkIsValid({
              //     nameOfData: 'firstName',
              //     data: creds.firstName,
              //   })
              // }
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
              //
              id='dateOfPurchase'
              type='date'
              variant='outlined'
              defaultValue=''
              className={classes.calendar}
              // InputProps={{inputProps: {  max: } }}
              // fullWidth
              // value={creds.firstName}
              // error={
              //   !checkIsValid({
              //     nameOfData: 'firstName',
              //     data: creds.firstName,
              //   })
              // }
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
              Mobile network carrier
            </InputLabel>
            <Select
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
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
              {/* <MenuItem value=''>
                <em>None</em>
              </MenuItem> */}
              {purchaseTypes.map((el) => (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
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
              Mobile network carrier
            </InputLabel>
            <Select
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
              {/* <MenuItem value=''>
                <em>None</em>
              </MenuItem> */}
              {paymentMethods.map((el) => (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
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
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '752px',
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
  storeBackground: {
    height: '256px',
    backgroundImage: (store) => `url(${store?.backgroundImage?.url})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
      height: '160px',
    },
  },
  middleLine: {
    height: '0px',
    paddingInline: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '1280px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingInline: '16px',
    },
  },
  storeAvatar: {
    width: '160px',
    height: '160px',
    border: '4px solid #FFFFFF',
    borderRadius: '100px',
    transform: 'translate(0 ,-50%)',
    [theme.breakpoints.down('md')]: {
      width: '130px',
      height: '130px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '64px',
      height: '64px',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '1280px',
    height: '652px',
    boxSizing: 'border-box',
    paddingInline: '72px',
    paddingBottom: '72px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      paddingInline: '16px',
    },
  },
  leftContent: {
    width: '688px',
    paddingTop: '112px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '60px',
    },
  },

  subTitle: {
    marginTop: '16px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  productCardsContainer: {
    marginTop: '16px',
    width: '688px',
    height: '352px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
    },
  },
  rightContent: {
    marginLeft: '112px',
    marginTop: '32px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  discountPercentCardContainer: {
    width: '336px',
    height: '316px',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '250px',
    },
  },
  discountPercentCardContainerForMobileWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  discountPercentCardContainerForMobile: {
    marginTop: '16px',
    width: '100%',
    height: '316px',
    boxSizing: 'border-box',
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  percentWrapper: {
    width: '304px',
    height: '104px',
    borderRadius: '8px',
    background: '#FAFAFA',
    boxSizing: 'border-box',
    padding: '16px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  filledPercent: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '100%',
    letterSpacing: '0.08em',
    color: '#33CC55',
  },
  percentSubTitle: {
    marginTop: '8px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '125%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
  },
  outlinedPercent: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '100%',
    letterSpacing: '0.08em',
    color: 'white',
    textShadow:
      '0 0 1px #33CC55, 0 0 1px #33CC55, 0 0 1px #33CC55, 0 0 1px #33CC55',
  },
  shopButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#33CC55',
    borderRadius: '26px',
    padding: '12px 10px',
    color: 'white',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.02em',
    cursor: 'pointer',
  },
}));

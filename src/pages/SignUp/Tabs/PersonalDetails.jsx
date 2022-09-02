import { makeStyles } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { useValidator } from '../../../hooks/useValidator';
import SubmitButton from '../../../components/form/SubmitButton';
import PasswordInput from '../../../components/form/PasswordInput';

const PersonalDetails = ({ next, creds, setCreds, handleChange }) => {
  const classes = useStyles();

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
    <div>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Add personal details</div>
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
              First name
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
                The first name min 2 symbols
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
              Last name
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
              <div className={classes.errorMessage}>
                The last name min 2 symbols
              </div>
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
            Email
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
              Please enter valid email example@gmail.com
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
        <SubmitButton onSubmit={onSubmit} title='Continue' />
      </div>
    </div>
  );
};
export default PersonalDetails;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '28px',
    height: '468px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      height: '520px',
    },
  },
  title: {
    height: '56px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '140%',
    letterSpacing: '-0.02em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
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
    bottom: '-28px',
    width: '100%',
    height: '20px',
    [theme.breakpoints.down('xs')]: {
      bottom: '-28px',
    },
  },
}));

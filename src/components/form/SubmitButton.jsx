import { makeStyles } from '@material-ui/core';

const SubmitButton = ({ title, onSubmit, children }) => {
  const classes = useStyles();
  return (
    <button
      type='submit'
      onClick={() => onSubmit()}
      className={classes.submitButton}
    >
      {title || children}
    </button>
  );
};

export default SubmitButton;

const useStyles = makeStyles((theme) => ({
  submitButton: {
    height: '52px',
    width: '100%',
    background: '#33CC55',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    cursor: 'pointer',
    border: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));

import { makeStyles } from '@material-ui/core';

const SubmitButton = ({ title, onSubmit }) => {
  const classes = useStyles();
  return (
    <div onClick={() => onSubmit()} className={classes.submitButton}>
      {title}
    </div>
  );
};

export default SubmitButton;

const useStyles = makeStyles((theme) => ({
  submitButton: {
    height: '20px',
    background: '#33CC55',
    borderRadius: '32px',
    padding: '16px 10px',
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
}));

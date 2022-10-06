import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core';

import language from '../../assets/images/icons/language.svg';

const Calendar = ({ date, handleChangeDate, errorMessage }) => {
  const classes = useStyles({ icon: language });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        name='purchaseAt'
        value={date}
        onChange={(chosenDate) => handleChangeDate(chosenDate)}
        inputVariant='outlined'
        variant='dialog'
        format='MM/dd/yyyy'
        className={classes.root}
        disableFuture={true}
        initialFocusedDate='MM/dd/yyyy'
        invalidDateMessage={<div>{errorMessage}</div>}
        components={{
          OpenPickerIcon: <img src={language} alt='dwqd' />,
        }}
        keyboardicon={<img src={language} alt='dwqd' />}
      />
    </MuiPickersUtilsProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '368px',
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      height: '48px',
      textAlign: 'center',

      '& >input': {
        fontSize: '18px',
        textAlign: 'center',
        padding: '0px',
        cursor: 'pointer',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
}));
export default Calendar;

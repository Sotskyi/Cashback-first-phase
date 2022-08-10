import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core';

const CheckboxesFilter = ({ filters, setFilters }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    if (filters.includes(e.target.id)) {
      return setFilters(filters.filter((el) => el !== e.target.id));
    }
    return setFilters([...filters, e.target.id]);
  };

  return (
    <div className={classes.checkBoxesContainer}>
      <FormGroup
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          // [theme.breakpoints.down('sm')]: {
          //   padding: '24px 16px  0px',
          // },
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              id='Increased cash-back'
              onChange={handleChange}
              sx={{
                '&.Mui-checked': {
                  color: '#33CC55',
                },
              }}
            />
          }
          label='Increased cash-back'
        />
        <FormControlLabel
          control={
            <Checkbox
              id='Top store'
              onChange={handleChange}
              sx={{
                '&.Mui-checked': {
                  color: '#33CC55',
                },
              }}
            />
          }
          label='Top store'
        />
        <FormControlLabel
          control={
            <Checkbox
              id='Recently added store'
              onChange={handleChange}
              sx={{
                '&.Mui-checked': {
                  color: '#33CC55',
                },
              }}
            />
          }
          label='Recently added store'
        />
        <FormControlLabel
          control={
            <Checkbox
              id='Ships from Canada'
              onChange={handleChange}
              sx={{
                '&.Mui-checked': {
                  color: '#33CC55',
                },
              }}
            />
          }
          label='Ships from Canada'
        />
      </FormGroup>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  checkBoxesContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 72px  0px',
    alignItems: 'center',
    boxSizing: 'border-box',
    justifyContent: 'center',
  },
}));
export default CheckboxesFilter;

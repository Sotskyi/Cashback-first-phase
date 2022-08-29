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

  const filtersList = [
    'Increased cash-back',
    'Top store',
    'Recently added store',
    'Ships from Canada',
  ];

  return (
    <div className={classes.checkBoxesContainer}>
      <FormGroup
        sx={(theme) => ({
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: { justifyContent: 'start' },
        })}
      >
        {filtersList.map((el) => (
          <FormControlLabel
            control={
              <Checkbox
                id={el}
                checked={filters.includes(el)}
                onChange={handleChange}
                sx={{
                  '&.Mui-checked': {
                    color: '#33CC55',
                  },
                }}
              />
            }
            label={el}
          />
        ))}
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

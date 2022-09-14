import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core';
import { t } from 'i18next';

const CheckboxesFilter = ({ filters, setFilters }) => {
  const classes = useStyles();

  const handleChange = (el) => {
    if (filters.includes(el.value)) {
      return setFilters(filters.filter((elem) => elem !== el.value));
    }
    return setFilters([...filters, el.value]);
  };

  const filtersList = [
    { value: 'Increased cash-back', title: t('INCREASED_CASHBACK') },
    { value: 'Top store', title: t('TOP_STORE') },
    { value: 'Recently added store', title: t('RECENTLY_ADDED_STORE') },
    { value: 'Ships from Canada', title: t('SHIPS_FROM_CANADA') },
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
                checked={filters.includes(el.value)}
                onChange={() => handleChange(el)}
                sx={{
                  '&.Mui-checked': {
                    color: '#33CC55',
                  },
                }}
              />
            }
            label={el.title}
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

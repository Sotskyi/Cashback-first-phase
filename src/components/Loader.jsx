import { useState } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

import useTimeout from '../hooks/useTimeout';

const Loader = () => {
  const classes = useStyles();
  const [showLoading, setShowLoading] = useState(true);

  useTimeout(() => {
    setShowLoading(false);
  }, 2000);

  return (
    <div
      className={`${classes.loaderContainer} ${
        showLoading ? '' : classes.hidden
      }`}
    >
      <Typography className='text-13 sm:text-20 mb-16' color='textSecondary'>
        Loading...
      </Typography>
      <LinearProgress
        sx={{ width: '192px', borderRadius: '1rem' }}
        color='secondary'
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  loaderContainer: {
    // display: 'flex',
    // flex: 'flex1',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: '24px',
    position: 'relative',
    right: '50%',
  },
  hidden: {
    display: 'none',
  },
}));

export default Loader;

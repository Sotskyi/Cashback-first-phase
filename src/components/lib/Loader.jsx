import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import useTimeout from '../../hooks/useTimeout';

const Loader = ({ delay, setTriggerLoader }) => {
  useTimeout(() => {
    setTriggerLoader(false);
  }, delay);

  return (
    <Box
      sx={{
        display: 'flex',
        // ...(hideLoader === true && {
        //   display: 'none',
        // }),
        height: delay ? '30px' : '100vh',
        width: delay ? '30px' : '100vw',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Loader;

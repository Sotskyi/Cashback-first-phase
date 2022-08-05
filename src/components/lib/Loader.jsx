import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import useTimeout from '../../hooks/useTimeout';

const Loader = ({ delay, setTrigerLoader }) => {
  useTimeout(() => {
    setTrigerLoader(false);
  }, delay);

  return (
    <Box
      sx={{
        display: 'flex',
        // ...(hideLoader === true && {
        //   display: 'none',
        // }),
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Loader;

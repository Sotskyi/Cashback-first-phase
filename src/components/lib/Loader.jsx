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
        height: delay ? '30px' : '100%',
        width: delay ? '30px' : '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Loader;

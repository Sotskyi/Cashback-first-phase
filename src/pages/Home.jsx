import { makeStyles } from '@material-ui/core';

import StoreIconSlider from '../components/StoreIconSlider';
import StoreCard from '../components/StoreCard';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <StoreIconSlider />
      <div className={classes.bodyContainer}>
        <div className={classes.cardsContainer}>
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
          <StoreCard name='Store name' procent='33%' id='3213211' />
        </div>
      </div>
    </div>
  );
};
export default Home;

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: '100vh',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardsContainer: {
    width: '1280px',
    padding: '0px 72px 0px',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
    height: '545px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      height: '479px',
    },
  },
}));

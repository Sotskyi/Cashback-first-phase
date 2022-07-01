import { makeStyles } from '@material-ui/core';

import UnloginedHeader from '../components/public/UnloginedHeader';
import StoreIconSlider from '../components/StoreIconSlider';
import StoreCard from '../components/StoreCard';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <UnloginedHeader />
      <StoreIconSlider />
      <div className={classes.bodyContainer}>
        <div className={classes.cardsContainer}>
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
          <StoreCard name='Store name' procent='33%' />
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
    height: '545px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      height: '479px',
    },
  },
}));

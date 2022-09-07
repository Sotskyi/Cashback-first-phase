/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './Carousel';

const HowItWorksCarousel = ({ isOpenCarousel, setIsOpenCarousel }) => {
  const classes = useStyles();

  return (
    <>
      {isOpenCarousel && (
        <div className={classes.layoutContainer}>
          <Carousel onClose={() => setIsOpenCarousel(false)} />
        </div>
      )}
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    zIndex: '111',
    position: 'fixed',
    top: '74%',
    right: '50%',
    transform: 'translate(-56%,-30px)',
    [theme.breakpoints.down('md')]: {
      right: '42%',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(23%,-30px)',
      left: '0px',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(0px,-60px)',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
}));
export default HowItWorksCarousel;

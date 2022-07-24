import { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import StoreIconSlider from '../components/StoreIconSlider';
import StoreCard from '../components/StoreCard';
import { getStores } from '../redux/slices/storesSlice';
import Loader from '../components/Loader';
import { useObserver } from '../hooks/useObserver';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState('0');
  const [step, setStep] = useState(6);
  const [range, setRange] = useState(0);
  const [page, setPage] = useState(1);
  const { storesList, isLoading, itemsCount } = useSelector(
    (state) => state.stores,
  );
  const lastElement = useRef();

  useObserver(lastElement, Math.ceil(itemsCount / 8) > page, isLoading, () => {
    setPage((prev) => prev + 1);
  });

  useEffect(() => {
    dispatch(getStores({ category: categoryId, page }));
  }, [categoryId, page]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={classes.homeContainer}>
      <StoreIconSlider
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        range={range}
        setRange={setRange}
        step={step}
        setStep={setStep}
      />
      <Loader />
      <div className={classes.bodyContainer}>
        <div className={classes.cardsContainer}>
          <div className={classes.cardsWrapper}>
            {storesList.map((el) => (
              <StoreCard
                key={el.id}
                name={el.translations[0].title}
                background={el.backgroundImage.url}
                // procent={el.precent}
                // onLoadImages={onLoadImages}
                id={el.id}
                logo={el.logoImage.url}
              />
            ))}
            <div ref={lastElement} className={classes.lastElement} />
          </div>

          <div />
        </div>
      </div>
    </div>
  );
};
export default Home;

const useStyles = makeStyles((theme) => ({
  homeContainer: {},
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardsWrapper: {
    width: '1280px',
    position: 'relative',
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
    height: '520px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      height: '479px',
    },
  },
  lastElement: {},
}));

import { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import StoreIconSlider from '../components/StoreIconSlider';
import StoreCard from '../components/StoreCard';
import { getStores, reset } from '../redux/slices/storesSlice';
import { useObserver } from '../hooks/useObserver';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lastElement = useRef();
  const [categoryId, setCategoryId] = useState('favoritesPosition');
  const [step, setStep] = useState(6);
  const [range, setRange] = useState(0);
  const [page, setPage] = useState(1);
  const { storesList, isLoading, itemsCount } = useSelector(
    (state) => state.stores,
  );

  useObserver(lastElement, Math.ceil(itemsCount / 8) > page, isLoading, () => {
    setPage((prev) => prev + 1);
    // scrollRef.current.scrollTop = -200;
  });

  useEffect(() => {
    if (categoryId === 'favoritesPosition' || categoryId === 'title') {
      dispatch(getStores({ sortingKey: categoryId, page }));
    } else dispatch(getStores({ category: categoryId, page }));

    // return () => dispatch(reset());
  }, [categoryId, page]);

  useEffect(() => {
    return () => dispatch(reset());
  }, []);

  return (
    <div className={classes.homeContainer}>
      <StoreIconSlider
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        range={range}
        setRange={setRange}
        step={step}
        setStep={setStep}
        setPage={setPage}
      />

      <div className={classes.bodyContainer}>
        <div className={classes.cardsContainer}>
          <div className={classes.cardsWrapper}>
            {storesList.map((el) => (
              <StoreCard
                key={el.id}
                name={el.translations[0].title}
                background={el.backgroundImage.url}
                precent={el.baseReward}
                // onLoadImages={onLoadImages}
                id={el.id}
                logo={el.logoImage.url}
              />
            ))}
            <div ref={lastElement} className={classes.lastElement} />
          </div>
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
    // overflowY: 'scroll',
    overflow: 'scroll',
    smooth: 'easeInOutQuart',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(105 255 54 / 10%)',
      outline: '1px solid slategrey',
    },
    height: '520px',
    display: 'flex',

    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      height: '479px',
    },
  },
  lastElement: {
    width: '100%',
    height: '1px',
  },
}));

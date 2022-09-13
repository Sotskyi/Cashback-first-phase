import { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import { useLocation } from 'react-router-dom';

import StoreIconSlider from '../components/lib/StoreIconSlider';
import StoreCard from '../components/StoreCard';
// import HowItWorksCarousel from '../components/lib/howItWorksCarousel/Carousel';
import {
  getStores,
  reset,
  getStoresBySearch,
  // setIsShowHowItWorks,
} from '../redux/slices/storesSlice';
import { useObserver } from '../hooks/useObserver';

const Home = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const lastElement = useRef();
  const [categoryId, setCategoryId] = useState('favoritesPosition');
  const [step, setStep] = useState(0);
  const [page, setPage] = useState(1);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { storesList, isLoading, itemsCount, search } = useSelector(
    (state) => state.stores,
  );

  useObserver(
    lastElement,
    Math.ceil(itemsCount / 16) > page &&
      search.length === 0 &&
      filters.length === 0,
    [isLoading, filters, search],
    () => {
      setPage((prev) => prev + 1);
    },
  );

  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      setPage(() => 1);
      setCurrentLanguage(i18n.language);
    }
  }, [i18n.language]);

  useEffect(() => {
    if (search.length > 0 || filters.length > 0) {
      dispatch(
        getStoresBySearch({
          ...(categoryId === 'favoritesPosition' || categoryId === 'title'
            ? { sortingKey: categoryId }
            : { category: categoryId }),
          page: '1',
          limit: 1000,
          languageCode: currentLanguage,
          title: search,
          filter: filters.length > 0 ? filters.join() : '',
        }),
      );
    }

    return () => {
      dispatch(reset());
      setPage(1);
    };
  }, [search, filters, categoryId, currentLanguage]);

  useEffect(() => {
    if (search.length === 0 && filters.length === 0) {
      dispatch(
        getStores({
          ...(categoryId === 'favoritesPosition' || categoryId === 'title'
            ? { sortingKey: categoryId }
            : { category: categoryId }),
          page,
          limit: 16,
          languageCode: currentLanguage,
        }),
      );
    }
  }, [categoryId, page, search, filters, currentLanguage]);

  // useEffect(() => {
  //   if (filters.length > 0) {
  //     setFilters([]);
  //   }
  //   if (page > 1) {
  //     dispatch(reset());
  //   }
  //   setPage(1);
  //   setCategoryId('favoritesPosition');
  //   setIsShowFilter(false);
  // }, [location]);

  return (
    <div className={classes.homeContainer}>
      <StoreIconSlider
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        step={step}
        setStep={setStep}
        setPage={setPage}
        setIsShowFilter={setIsShowFilter}
        isShowFilter={isShowFilter}
        filters={filters}
        setFilters={setFilters}
        currentLanguage={currentLanguage}
      />

      <div className={classes.bodyContainer}>
        <div className={classes.cardsContainer}>
          <div className={classes.cardsWrapper}>
            {storesList.map((el) => (
              <StoreCard
                data={el}
                key={el.id}
                name={el.translations[0].title}
                background={el.backgroundImage.url}
                percent={el.baseReward}
                id={el.id}
                logo={el.logoImage.url}
              />
            ))}
            <div ref={lastElement} className={classes.lastElement} />
            <div>
              <div>
                <div className={classes.carouselContainer}>
                  {/* {showHowItWorks && (
                    <HowItWorksCarousel
                      onClose={() => dispatch(setIsShowHowItWorks(false))}
                    />
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

const useStyles = makeStyles((theme) => ({
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
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
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
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 16px 0px',
      height: '100%',
    },
  },
  lastElement: {
    width: '100%',
    height: '1px',
  },
  carouselContainer: {
    position: 'fixed',
    marginLeft: '-561px',
    bottom: '20px',
    left: '50%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '-466px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-50%',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '-180px',
    },
  },
}));

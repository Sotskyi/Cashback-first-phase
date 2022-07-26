import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import featuredStores from '../../assets/images/icons/forSlider/featuredStores.svg';
import allStores from '../../assets/images/icons/forSlider/allStores.svg';
import fashion from '../../assets/images/icons/forSlider/fashion.svg';
import entertainment from '../../assets/images/icons/forSlider/entertainment.svg';
import electronics from '../../assets/images/icons/forSlider/electronics.svg';
import foodGrocery from '../../assets/images/icons/forSlider/foodGrocery.svg';
import babyKidsToys from '../../assets/images/icons/forSlider/babyKidsToys.svg';
import homeGarden from '../../assets/images/icons/forSlider/homeGarden.svg';
import books from '../../assets/images/icons/forSlider/books.svg';
import beautyHealth from '../../assets/images/icons/forSlider/beautyHealth.svg';
import sportsAutdoor from '../../assets/images/icons/forSlider/sportsAutdoor.svg';
import auto from '../../assets/images/icons/forSlider/auto.svg';
import petSupplies from '../../assets/images/icons/forSlider/petSupplies.svg';
import hardwareTools from '../../assets/images/icons/forSlider/hardwareTools.svg';
import leftArrow from '../../assets/images/icons/forSlider/leftArrow.svg';
import rightArrow from '../../assets/images/icons/forSlider/rightArrow.svg';
import filter from '../../assets/images/icons/filter.svg';
import { reset } from '../../redux/slices/storesSlice';

const StoreIconSlider = ({
  categoryId,
  setCategoryId,
  step,
  setStep,
  range,
  setRange,
  setPage,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setCategoryId(newValue);
    setPage(1);
    dispatch(reset());
  };

  const handleClickLeftArrow = () => {
    if (step > 6 && range !== 'title') {
      setStep((prev) => prev - 6);
      if (range === 9) {
        setRange((prev) => prev - 4);
      } else setRange((prev) => prev - 5);
    }
    if (step - 6 === 6) {
      setCategoryId('favoritesPosition');
    } else if (step - 6 === 12) {
      setCategoryId('4');
    }
  };

  const handleClickRightArrow = () => {
    setStep(step + 6);
    if (range === 5) {
      setRange((prev) => prev + 4);
    } else setRange(range + 5);
    if (step + 6 === 12) {
      setCategoryId('4');
    }
    if (step + 6 === 18) {
      setCategoryId('8');
    }
  };

  const tabs = [
    {
      name: 'Featured Stores',
      icon: featuredStores,
      value: 'favoritesPosition',
    },
    {
      name: 'All Stores',
      icon: allStores,
      value: 'title',
    },
    {
      name: 'Fashion',
      icon: fashion,
      value: '1',
    },
    {
      name: 'Entertainment',
      icon: entertainment,
      value: '2',
    },
    {
      name: 'Electronics',
      icon: electronics,
      value: '3',
    },
    {
      name: 'Food & Grocery',
      icon: foodGrocery,
      value: '4',
    },
    {
      name: 'Baby, Kids & Toys',
      icon: babyKidsToys,
      value: '5',
    },
    {
      name: 'Books',
      icon: books,
      value: '6',
    },
    {
      name: 'Home & Garden',
      icon: homeGarden,
      value: '7',
    },
    {
      name: 'Beauty & Health',
      icon: beautyHealth,
      value: '8',
    },
    {
      name: 'Sports & Outdoor',
      icon: sportsAutdoor,
      value: '9',
    },
    {
      name: 'Auto',
      icon: auto,
      value: '10',
    },
    {
      name: 'Pet Supplies',
      icon: petSupplies,
      value: '11',
    },
    {
      name: 'Hardware & Tools',
      icon: hardwareTools,
      value: '12',
    },
  ];
  return (
    <div className={classes.container}>
      {step >= 12 && (
        <div className={classes.arrowContainer} onClick={handleClickLeftArrow}>
          <div className={classes.leftArrowIcon}>
            <img src={leftArrow} alt='menu' />
          </div>
        </div>
      )}
      <div className={classes.sliderContainer}>
        <Box sx={{ maxWidth: '950px' }}>
          <Tabs
            classes={{ root: classes.customTabs }}
            value={categoryId}
            onChange={handleChange}
            textColor='secondary'
            // aria-label='secondary tabs example'
            TabIndicatorProps={{
              style: { backgroundColor: 'black', color: 'red' },
            }}
          >
            {tabs.slice(range, step).map((el, index) => (
              <Tab
                value={el.value}
                label={el.name}
                id={index}
                key={el.name}
                icon={
                  <div>
                    <img src={el.icon} alt='menu' />
                  </div>
                }
              />
            ))}
          </Tabs>
        </Box>
      </div>

      <div className={classes.arrowContainer}>
        {' '}
        {range < 9 && (
          <div
            className={classes.rightArrowIcon}
            onClick={handleClickRightArrow}
          >
            <img src={rightArrow} alt='menu' />
          </div>
        )}
        <div className={classes.filter}>
          <img src={filter} alt='menu' />
          <span>Filter</span>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    height: '120px',
    padding: '40px 72px  0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  customTabs: {
    '& .MuiTab-root': {
      letterSpacing: '0.02em',
      fontWeight: '500',
      fontSize: '16px',
      fontStyle: 'nomral',
      fontFamily: 'Source Sans Pro, sans-serif',
      textTransform: 'none',
      display: 'flex',
      flexDirection: 'row',
      padding: '0',
      marginRight: '32px',
    },
    '& .MuiTab-root.Mui-selected': {
      color: 'black',
    },
    '& .MuiTab-root>.MuiTab-iconWrapper': {
      width: '48px',
      height: '48px',
      margin: '0px',
      backgroundColor: '#FAFAFA',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100px',
      marginRight: '14px',
    },
  },

  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    position: 'relative',
    minWidth: '90px',
    zIndex: '11',
  },
  sliderContainer: {
    width: '930px',
    overflow: 'hidden',
  },

  leftArrowIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '33px',
    border: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  rightArrowIcon: {
    minWidth: '36px',
    minHeight: '36px',
    borderRadius: '33px',
    border: '1px solid #EAEAEA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginInline: '31px',
    cursor: 'pointer',
  },
  filter: {
    minWidth: '100px',
    height: '48px',
    border: '1px solid #EAEAEA',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default StoreIconSlider;

import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';

const StoreIconSlider = () => {
  const [value, setValue] = useState('Featured Stores');
  const [step, setStep] = useState(6);
  const [range, setRange] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickLeftArrow = () => {
    if (step > 6 && range !== 0) {
      setStep((prev) => prev - 6);
      if (range === 9) {
        setRange((prev) => prev - 4);
      } else setRange((prev) => prev - 5);
    }
    if (step - 6 === 6) {
      setValue('Featured Stores');
    } else if (step - 6 === 12) {
      setValue('Food & Grocery');
    }
  };

  const handleClickRightArrow = () => {
    setStep(step + 6);
    if (range === 5) {
      setRange((prev) => prev + 4);
    } else setRange(range + 5);
    if (step + 6 === 12) {
      setValue('Food & Grocery');
    }
    if (step + 6 === 18) {
      setValue('Beauty & Health');
    }
  };

  const tabs = [
    {
      name: 'Featured Stores',
      iconPath: 'assets/images/icons/forSlider/featuredStores.svg',
    },
    {
      name: 'All Stores',
      iconPath: 'assets/images/icons/forSlider/allStores.svg',
    },

    {
      name: 'Fashion',
      iconPath: 'assets/images/icons/forSlider/fashion.svg',
    },
    {
      name: 'Entertainment',
      iconPath: 'assets/images/icons/forSlider/entertainment.svg',
    },
    {
      name: 'Electronics',
      iconPath: 'assets/images/icons/forSlider/electronics.svg',
    },
    {
      name: 'Food & Grocery',
      iconPath: 'assets/images/icons/forSlider/foodGrocery.svg',
    },
    {
      name: 'Baby, Kids & Toys',
      iconPath: 'assets/images/icons/forSlider/babyKidsToys.svg',
    },
    {
      name: 'Books',
      iconPath: 'assets/images/icons/forSlider/books.svg',
    },
    {
      name: 'Home & Garden',
      iconPath: 'assets/images/icons/forSlider/homeGarden.svg',
    },
    {
      name: 'Beauty & Health',
      iconPath: 'assets/images/icons/forSlider/beautyHealth.svg',
    },
    {
      name: 'Sports & Outdoor',
      iconPath: 'assets/images/icons/forSlider/sportsAutdoor.svg',
    },
    {
      name: 'Auto',
      iconPath: 'assets/images/icons/forSlider/auto.svg',
    },
    {
      name: 'Pet Supplies',
      iconPath: 'assets/images/icons/forSlider/petSupplies.svg',
    },
    {
      name: 'Hardware & Tools',
      iconPath: 'assets/images/icons/forSlider/hardwareTools.svg',
    },
  ];
  return (
    <div className={classes.container}>
      {step >= 12 && (
        <div className={classes.arrowContainer} onClick={handleClickLeftArrow}>
          <div className={classes.leftArrowIcon}>
            <img src='assets/images/icons/forSlider/leftArrow.svg' alt='menu' />
          </div>
        </div>
      )}
      <div className={classes.sliderContainer}>
        <Box sx={{ maxWidth: '950px' }}>
          <Tabs
            classes={{ root: classes.customTabs }}
            value={value}
            onChange={handleChange}
            textColor='secondary'
            // aria-label='secondary tabs example'
            TabIndicatorProps={{
              style: { backgroundColor: 'black', color: 'red' },
            }}
          >
            {tabs.slice(range, step).map((el, index) => (
              <Tab
                value={el.name}
                label={el.name}
                id={index}
                key={el.name}
                icon={
                  <div>
                    <img src={el.iconPath} alt='menu' />
                  </div>
                }
              />
            ))}
          </Tabs>
        </Box>
      </div>

      <div className={classes.arrowContainer} onClick={handleClickRightArrow}>
        {' '}
        {range < 9 && (
          <div className={classes.rightArrowIcon}>
            <img
              src='assets/images/icons/forSlider/rightArrow.svg'
              alt='menu'
            />
          </div>
        )}
        <div className={classes.filter}>
          <img src='assets/images/icons/filter.svg' alt='menu' />
          <span>filter</span>
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
    zIndex: '11111',
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

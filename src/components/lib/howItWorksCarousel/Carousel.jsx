import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import leftArrow from '../../../assets/images/icons/forSlider/leftArrow.svg';
import rightArrow from '../../../assets/images/icons/forSlider/rightArrow.svg';
import closeX from '../../../assets/images/icons/closeX.svg';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
// import Tab5 from './Tabs/Tab5';

const Carousel = ({ onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [xPos, setXpos] = useState(0);
  const steps = [0, 1, 2, 3];

  const handleLeftClick = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
      setXpos((prev) => prev + 216);
    }
  };

  const handleRightClick = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      setXpos((prev) => prev - 216);
    }
  };

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.headerContainer}>
        <div className={classes.title}>{t('HOW_TO_USE_TELCOREWARDS')}</div>
        <div className={classes.closeButton} onClick={onClose}>
          <img src={closeX} alt='X' />
        </div>
      </div>
      <div className={classes.bodyContainer}>
        <div onClick={handleLeftClick}>
          {step > 0 && (
            <img className={classes.leftArrow} src={leftArrow} alt='icon' />
          )}
        </div>
        <div className={classes.contentContainer}>
          <div
            className={classes.carouselWrapper}
            style={{
              transform: `translateX(${xPos}px)`,
              transition: 'transform 0.70s ease',
            }}
          >
            <Tab1 />
            <Tab2 />
            <Tab3 />
            <Tab4 />
            {/* <Tab5 /> */}
          </div>
        </div>
        <div onClick={handleRightClick}>
          {step < 3 && (
            <img className={classes.rightArrow} src={rightArrow} alt='icon' />
          )}
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.dotsWrapper}>
          {steps.map((el) => {
            if (el === step) {
              return (
                <div
                  key={el}
                  className={`${classes.stepDot} ${classes.active}`}
                />
              );
            }
            return <div key={el} id={el} className={classes.stepDot} />;
          })}
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  carouselContainer: {
    width: '360px',
    height: '240px',
    borderRadius: '24px',
    padding: '24px',
    boxSizing: 'border-box',
    border: '1px solid #dcdcdc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'white',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '0.16em',
    color: '#AAAAAA',
    letterSpacing: '0.06em',
  },
  closeButton: {
    width: '32px',
    height: '32px',
    border: '1px solid #EAEAEA',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    width: '216px',
    height: '144px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carouselWrapper: {
    width: '1000px',
    display: 'flex',
  },
  leftArrow: {
    width: '10px',
    height: '15px',
    cursor: 'pointer',
  },
  rightArrow: {
    width: '10px',
    height: '15px',
    cursor: 'pointer',
  },
  footer: {
    display: 'flex',
  },
  dotsWrapper: {
    width: '56px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  stepDot: {
    width: '8px',
    height: '8px',
    background: '#EAEAEA',
    borderRadius: '25px',
  },
  active: {
    background: '#33CC55',
  },
}));
export default Carousel;

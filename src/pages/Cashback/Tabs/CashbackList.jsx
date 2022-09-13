import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getCashback } from '../../../redux/slices/cashbackSlice';
import timer from '../../../assets/images/icons/timer.svg';
import {
  getDateForCashback,
  differenceDatesInDays,
} from '../../../utils/helpers';
import Loader from '../../../components/lib/Loader';
import { useObserver } from '../../../hooks/useObserver';

const CashbackList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { cashbackList, isLoading, totalCashback } = useSelector(
    (state) => state.cashback,
  );
  const lastElement = useRef();
  const [page, setPage] = useState(1);

  useObserver(
    lastElement,
    Math.ceil(totalCashback / 8) > page,
    [isLoading],
    () => {
      setPage((prev) => prev + 1);
    },
  );

  useEffect(() => {
    dispatch(getCashback({ page, limit: 8 }));
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.cashbackListContainer}>
      {cashbackList?.map((el) => (
        <div key={el?.date}>
          <div className={classes.dateContainer}>
            <div className={classes.date}>{getDateForCashback(el?.date)} </div>
            <div className={classes.totalCashback}>
              $ {parseFloat(el?.dailyTotal)}
            </div>
          </div>
          {el.items.map((item) => (
            <div
              className={classes.storeContainer}
              key={item.saleAmount + item.cashbackId}
            >
              <img
                className={classes.storeAvatar}
                src={item.logoImageUrl}
                alt='avatar'
              />
              <div className={classes.storeContentContainer}>
                <div className={classes.storeContentWrapper}>
                  <div className={classes.storeTitle}>{item.storeTitle}</div>
                  <div className={classes.storeCashback}>$ {item.reward}</div>
                </div>
                <div className={classes.storeContentWrapper}>
                  <div className={classes.storeAvailableCashback}>
                    $ {item.saleAmount}
                  </div>
                  <div className={classes.storeAvailableCashbackTime}>
                    {differenceDatesInDays(new Date(), new Date(el.date)) >
                      0 && (
                      <>
                        {differenceDatesInDays(new Date(), new Date(el.date))}{' '}
                        {t('DAYS')}
                        <img
                          className={classes.storeAvailableCashbackTimerIcon}
                          src={timer}
                          alt='timer'
                        />{' '}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div ref={lastElement} className={classes.lastElement} />
    </div>
  );
};

export default CashbackList;

const useStyles = makeStyles((theme) => ({
  cashbackListContainer: {
    // height: '500px',
    width: '680px',
    maxHeight: '600px',
    paddingRight: '15px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '1px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  dateContainer: {
    height: '30px',
    marginLeft: '64px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    color: '#6A6A6A',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EAEAEA',
    marginTop: '32px',
  },
  storeContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '84px',
  },
  storeAvatar: {
    minWidth: '48px',
    height: '48px',
    background: '#EAEAEA',
    borderRadius: '100px',
  },
  storeContentContainer: {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderBottom: '1px solid #EAEAEA',
  },
  storeContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  storeTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  totalCashback: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
    color: '#33CC55',
  },
  storeAvailableCashback: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
  },
  storeAvailableCashbackTime: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '130%',
    letterSpacing: '0.015em',
    color: '#6A6A6A',
    display: 'flex',
    width: '71px',
    justifyContent: 'end',
  },
  storeAvailableCashbackTimerIcon: {
    marginLeft: '5px',
  },
  lastElement: {
    width: '100%',
    height: '1px',
  },
}));

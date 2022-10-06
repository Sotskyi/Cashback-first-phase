import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { getCashback } from '../../../redux/slices/cashbackSlice';
import timer from '../../../assets/images/icons/timer.svg';
import revertArrow from '../../../assets/images/icons/revertArrow.svg';
import { getDateForCashback } from '../../../utils/helpers';
// import Loader from '../../../components/lib/Loader';
import { useObserver } from '../../../hooks/useObserver';

const CashbackList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { cashbackList, isLoading, cashbackCount } = useSelector(
    (state) => state.cashback,
  );
  const lastElement = useRef();
  const [page, setPage] = useState(1);

  useObserver(
    lastElement,
    Math.ceil(cashbackCount / 8) > page,
    [isLoading],
    () => {
      setPage((prev) => prev + 1);
    },
  );

  useEffect(() => {
    dispatch(getCashback({ page, limit: 8 }));
  }, [page]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={classes.cashbackListContainer}>
      {cashbackList?.map((el) => (
        <div key={el?.date}>
          <div className={classes.dateContainer}>
            <div className={classes.date}>
              {getDateForCashback(el?.date, i18n.language)}{' '}
            </div>
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
              {item.status === 'reverted' && (
                <div className={classes.revertArrow}>
                  <img
                    src={revertArrow}
                    className={classes.revertArrowIcon}
                    alt='avatar'
                  />
                </div>
              )}
              <div className={classes.storeContentContainer}>
                <div className={classes.storeContentWrapper}>
                  <div
                    className={classes.storeTitle}
                    style={{
                      color: item.status === 'reverted' && '#aaaaaae8',
                    }}
                  >
                    {item.storeTitle}
                  </div>
                  <div
                    className={classes.storeCashback}
                    style={{
                      color:
                        (item.status === 'available' && '#33CC55') ||
                        (item.status === 'reverted' && '#aaaaaae8'),
                    }}
                  >
                    $ {item.reward}
                  </div>
                </div>
                <div className={classes.storeContentWrapper}>
                  <div
                    className={classes.storeAvailableCashback}
                    style={{
                      color: item.status === 'reverted' && '#aaaaaae8',
                    }}
                  >
                    $ {item.saleAmount}
                  </div>
                  <div className={classes.storeAvailableCashbackTime}>
                    {item.status === 'pending' && (
                      <>
                        <span>{item.daysToWithdrawal}&nbsp;</span>
                        <span>
                          {item.daysToWithdrawal === 0 ? t('DAY') : t('DAYS')}
                        </span>
                        <img
                          className={classes.storeAvailableCashbackTimerIcon}
                          src={timer}
                          alt='timer'
                        />
                      </>
                    )}
                    {item.status === 'available' && (
                      <span className={classes.availableTitle}>
                        {t('AVAILABLE_CASHBACK')}
                      </span>
                    )}
                    {item.status === 'reverted' && (
                      <span className={classes.returnedTitle}>
                        {t('RETURNED')}
                      </span>
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
  storeCashback: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    fontWeight: '500',
    color: '#6A6A6A',
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
  revertArrow: {
    width: '17px',
    height: '15px',
    background: '#33CC55',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: '-15px',
    top: '14px',
  },
  revertArrowIcon: {
    width: '10px',
    height: '8.5px',
  },
  availableTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '12px',
    fontWeight: '400',
    color: '#33CC55',
    letterSpacing: '0.05em',
  },
  returnedTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '12px',
    color: '#aaaaaae8',
    letterSpacing: '0.05em',
  },
  storeContentContainer: {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
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
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '0.02em',
    color: '#6A6A6A',
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

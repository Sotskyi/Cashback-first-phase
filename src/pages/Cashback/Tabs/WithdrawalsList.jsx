import { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import withdrawalsSuccess from '../../../assets/images/icons/withdrawalsSuccess.svg';
import { getWithdrawals } from '../../../redux/slices/cashbackSlice';
import { getDateForCashback } from '../../../utils/helpers';
import Loader from '../../../components/lib/Loader';
import { useObserver } from '../../../hooks/useObserver';

const WithdrawalsList = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lastElement = useRef();
  const [page, setPage] = useState(1);

  const { withdrawalsList, isLoading, totalWithdrawals } = useSelector(
    (state) => state.cashback,
  );

  useObserver(
    lastElement,
    Math.ceil(totalWithdrawals / 8) > page,
    [isLoading],
    () => {
      setPage((prev) => prev + 1);
    },
  );

  useEffect(() => {
    dispatch(getWithdrawals({ page, limit: 8 }));
  }, [page]);

  const getTotalWithdrawal = (items) => items.reduce((a, b) => a + b.amount, 0);

  return (
    <div className={classes.withdrawalsListContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {withdrawalsList?.map((el) => (
            <div key={el.date}>
              <div className={classes.dateContainer}>
                <div className={classes.date}>
                  {getDateForCashback(el.date)}{' '}
                </div>
                <div className={classes.totalCashback}>
                  $ {getTotalWithdrawal(el.items)}
                </div>
              </div>
              {el.items.map((item) => (
                <div key={item.amount} className={classes.withdrawalContainer}>
                  <div className={classes.withdrawalAvatar}>
                    {' '}
                    <img
                      src={withdrawalsSuccess}
                      // className={classes.withdrawalsIconSuccess}
                      alt='cash'
                    />{' '}
                  </div>
                  <div className={classes.withdrawalContentContainer}>
                    <div className={classes.withdrawalContentWrapper}>
                      <div className={classes.withdrawalTitle}>
                        {t('WITHDRAW')}
                      </div>
                      <div className={classes.withdrawalCashback}>
                        $ {item.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div ref={lastElement} className={classes.lastElement} />
        </>
      )}
    </div>
  );
};
export default WithdrawalsList;

const useStyles = makeStyles((theme) => ({
  withdrawalsListContainer: {
    maxHeight: '700px',
    width: '680px',
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
    [theme.breakpoints.down('sm')]: {
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
  withdrawalContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '84px',
  },
  withdrawalAvatar: {
    width: '48px',
    height: '48px',
    background: '#EAEAEA',
    borderRadius: '100px',
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
  withdrawalContentContainer: {
    display: 'flex',
    marginLeft: '16px',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderBottom: '1px solid #EAEAEA',
  },
  withdrawalContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  withdrawalTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '125%',
    letterSpacing: '0.01em',
  },
  withdrawalCashback: {
    // fontFamily: 'Source Sans Pro, sans-serif',
    // fontStyle: 'normal',
    // fontWeight: '600',
    // fontSize: '16px',
    // lineHeight: '100%',
    // letterSpacing: '0.02em',
    // color: '#33CC55',
  },
  lastElement: {
    width: '100%',
    height: '1px',
  },
}));

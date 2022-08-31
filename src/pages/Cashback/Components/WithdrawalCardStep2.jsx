import { makeStyles } from '@material-ui/core';

import withdrawals from '../../../assets/images/icons/withdrawals.svg';
import withdrawalsGrey from '../../../assets/images/icons/withdrawalsGrey.svg';
import arrowBackWhite from '../../../assets/images/icons/arrowBackWhite.svg';

const WithdrawalCardStep2 = ({
  handleSubmit,
  handleBackButton,
  data,
  availableCash,
  activeCell,
  setActiveCell,
}) => {
  const classes = useStyles(data.length);

  return (
    <div className={classes.withdrawalCardContainer}>
      <div className={classes.headerContainer}>
        <div className={classes.availableCashTitle}>AVAILABLE</div>
        <div className={classes.backButton} onClick={handleBackButton}>
          <img
            src={arrowBackWhite}
            className={classes.arrowBackWhite}
            alt='cash'
          />
        </div>
        <div className={classes.availableCash}>$ {availableCash}</div>
      </div>
      <div className={classes.cellsContainer}>
        {data
          .filter((el) => el !== null)
          .map((el) => {
            if (availableCash >= el) {
              if (activeCell === el) {
                return (
                  <div
                    id={el}
                    className={`${classes.cell} ${classes.activeCell}`}
                    key={el}
                  >
                    ${el}
                  </div>
                );
              }
              return (
                <div
                  id={el}
                  className={classes.cell}
                  key={el}
                  onClick={(e) => setActiveCell(+e.currentTarget.id)}
                >
                  ${el}
                </div>
              );
            }
            return (
              <div id={el} className={classes.disabledCell} key={el}>
                ${el}
              </div>
            );
          })}
      </div>

      <div
        className={`${classes.withdrawButton} ${
          activeCell && classes.activeButton
        }`}
        onClick={() => {
          if (activeCell) {
            return handleSubmit();
          }
          return null;
        }}
      >
        Withdraw
        <img
          src={activeCell ? withdrawals : withdrawalsGrey}
          className={classes.withdrawalsIcon}
          alt='cash'
        />
      </div>
    </div>
  );
};
export default WithdrawalCardStep2;

const useStyles = makeStyles(() => ({
  withdrawalCardContainer: {
    width: '336px',
    height: '514px',
    borderRadius: '32px',
    background: '#33CC55',
    boxSizing: 'border-box',
    padding: '16px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.16)',
    width: '32px',
    height: '32px',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    cursor: 'pointer',
    marginTop: '-13px',
  },
  availableCashTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
    textAlign: 'center',
  },
  availableCash: {
    marginTop: '10px',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: '120%',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '-0.01em',
    color: '#FFFFFF',
  },
  cellsContainer: {
    margin: '16px 0 16px 0',
    height: '389px',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell: {
    border: '1px solid #FFFFFF',
    height: '45px',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '700',
    fontSize: '20px',
    color: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
      background: '#FFFFFF',
      color: '#33CC55',
    },
    width: (dataLength) => {
      if (dataLength > 6 && dataLength <= 12) {
        return 'calc(50% - 8px)';
      }
      if (dataLength > 12) {
        return 'calc(34% - 10px)';
      }
      return '100%';
    },
  },
  activeCell: {
    background: '#FFFFFF',
    color: '#33CC55',
  },
  disabledCell: {
    background: '#9e9e9e',
    border: '1px solid #FFFFFF',
    height: '45px',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: '700',
    fontSize: '20px',
    color: '#f3dddde0',
    width: (dataLength) => {
      if (dataLength > 6 && dataLength <= 12) {
        return 'calc(50% - 8px)';
      }
      if (dataLength > 12) {
        return 'calc(34% - 10px)';
      }
      return '100%';
    },

    // border: '1px solid #EAEAEA',
  },
  withdrawButton: {
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: '26px',
    color: '#EAEAEA',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.01em',
  },
  activeButton: {
    background: '#FFFFFF',
    color: '#000000',
    cursor: 'pointer',
  },
  withdrawalsIcon: {
    marginLeft: '10px',
  },
}));

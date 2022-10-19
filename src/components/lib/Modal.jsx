import React from 'react';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { getDateForWithdrawModal } from '../../utils/helpers';
import closeX from '../../assets/images/icons/closeX.svg';
import NewLineText from '../NewLineText';

export const VoucherModal = ({ open, setOpen, data }) => {
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes.modalContent}>
          <div className={classes.modalHeader}>
            <div className={classes.iconWrapper} onClick={handleClose}>
              <img src={closeX} alt='x' />
            </div>
          </div>
          <div className={classes.title}>{data.carrier}</div>
          <div className={classes.subTitle}>$ {data.amount}</div>
          <div className={classes.mainText}>
            {t('PIN_NUMBER')}: {data.pin}
          </div>
          <NewLineText text={data.terms} />
          <div className={classes.footer}>
            <div className={classes.subText}>
              {' '}
              {t('SERIAL')}: {data.serial}{' '}
            </div>
            <div className={classes.subText}>
              {' '}
              {t('BATCH')}: {data.batch}{' '}
            </div>
            <div className={classes.subText}>
              {' '}
              Date: {getDateForWithdrawModal(data.createdAt)}
            </div>
            <div className={classes.subText}> Ref. #: {data.refNo} </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '32px',
    boxShadow:
      'rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;',
    [theme.breakpoints.down('xs')]: {
      width: '280px',
      height: '680px',
      padding: '18px',
      overflowY: 'scroll',
    },
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'end',
  },
  iconWrapper: {
    cursor: 'pointer',
  },
  title: {
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: '125%',
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: '26px',
    color: '#4b4545',
  },
  subTitle: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '30px',
    lineHeight: '100%',
    letterSpacing: '0.08em',
    color: 'white',
    textShadow:
      '0 0 3px #030303, 0 0 3px #030303, 0 0 3px #030303, 0 0 3px #030303',
    textAlign: 'center',
  },

  mainText: {
    fontWeight: '500',
    color: '#030303',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '125%',
    fontFamily: 'Inter',
    letterSpacing: '0.02em',
    margin: '8px 0px 8px 0px',
    // textAlign: 'center',
  },
  subText: {
    fontWeight: '500',
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '125%',
    fontFamily: 'Inter',
    color: '#030303',
    margin: '4px 0px 4px 0px',

    whiteSpace: 'pre-line',
  },
  footer: {
    marginTop: '15px',
  },
}));

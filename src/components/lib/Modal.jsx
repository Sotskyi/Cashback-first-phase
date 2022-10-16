import React from 'react';

import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';

import closeX from '../../assets/images/icons/closeX.svg';

export const VoucherModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
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
          <div className={classes.title}>Fido</div>
          <div className={classes.subTitle}>$10</div>
          <div className={classes.mainText} style={{ textAlign: 'center' }}>
            This is your pin:3213213
          </div>
          <div className={classes.mainText}>TO TOP UP:</div>
          <div className={classes.mainText}>
            1. Go to my Account on your mobile device. Its free.
          </div>
          <div className={classes.mainText}>
            2. Dial *114* (your 14-digit voucher number) followed by # key and
            press the SEND button on your phone.
          </div>
          <div className={classes.mainText}>
            3. Visit fildo.ca and log into My Account.
          </div>
          <div className={classes.mainText}>
            4. Dial *611 from your Fido phone.
          </div>
          <div className={classes.subText}>
            {' '}
            Non refundable or exchangeable Subject to Fido Terms and Conditions,
            www.fido.ca/terms. No credit for unused or expired minutes.
          </div>
          <div className={classes.footer}>
            <div className={classes.subText}> Trans: 132132131 </div>
            <div className={classes.subText}> Serial: 132132131 </div>
            <div className={classes.subText}> Batch: 132132131 </div>
            <div className={classes.subText}> Date: 2022-10-12 </div>
            <div className={classes.subText}> Term: TELCO </div>
            <div className={classes.subText}> Rec. #: 1234 </div>
          </div>
          {/* <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
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
  },
  footer: {
    marginTop: '15px',
  },
}));

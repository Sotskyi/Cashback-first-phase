import { useState } from 'react';

// import Button from '@mui/material/Button';
import {
  Modal as MaterialModal,
  Backdrop,
  makeStyles,
} from '@material-ui/core';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const classes = useStyles();

  return (
    <MaterialModal
      open={isModalOpen}
      onClose={onModalClose}
      onBackdropClick={onModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
    >
      <div className={classes.filterModalContainer}>
        <div className={classes.header}>
          <div>Filters</div>
          <div>x</div>
        </div>
        <div className={classes.body}>body</div>
        <div className={classes.footer}>footer</div>
      </div>
    </MaterialModal>
  );
};
export default Modal;

const useStyles = makeStyles(() => ({
  filterModalContainer: {
    width: '400px',
    height: '400px',
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #EAEAEA',
    borderRadius: '16px',
    padding: '16px 32px 16px 32px',
  },
  header: {},
}));

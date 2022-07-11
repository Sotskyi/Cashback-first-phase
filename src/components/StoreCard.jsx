import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const StoreCard = ({ name, procent, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div
      id={id}
      className={classes.storeCardWrapper}
      onClick={() => navigate(`/store/${id}/`)}
    >
      <div className={classes.storeCardTop} />
      <div className={classes.storeCardMiddle}>
        <div className={classes.storeCardAvatar} />
        <div className={classes.storeCardProcent}>{procent}</div>
      </div>
      <div className={classes.storeCardBottom}>
        <div className={classes.storeCardName}>{name}</div>
      </div>
    </div>
  );
};
export default StoreCard;

const useStyles = makeStyles(() => ({
  storeCardWrapper: {
    width: '272px',
    height: '272px',
    borderRadius: '8px',
    marginTop: '15px',
    cursor: 'pointer',
  },
  storeCardTop: {
    height: '192px',
    background: '#EAEAEA',
  },
  storeCardMiddle: {
    height: '0px',
    paddingInline: '16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  storeCardAvatar: {
    width: '64px',
    height: '64px',
    border: '1px solid #FFFFFF',
    background: '#EAEAEA',
    borderRadius: '33px',
    transform: 'translate(0 ,-50%)',
  },
  storeCardProcent: {
    background: '#33CC55',
    borderRadius: '12px',
    width: '52px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: '600',
    transform: 'translate(0 ,-50%)',
  },
  storeCardBottom: {
    height: '80px',
    background: '#FAFAFA',
    paddingTop: '44px',
    paddingLeft: '16px',
    boxSizing: 'border-box',
  },
  storeCardName: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '125%',
    color: '#000000',
  },
}));

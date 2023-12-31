import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const StoreCard = ({ name, percent, id, logo, banner, data }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div
      id={id}
      className={classes.storeCardWrapper}
      onClick={() => navigate(`/store/${id}`, { state: { data } })}
    >
      <div
        className={classes.storeCardTop}
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className={classes.storeCardMiddle}>
        <img className={classes.storeCardAvatar} src={logo} alt='' />
        <div className={classes.storeCardPercent}>{percent}%</div>
      </div>
      <div className={classes.storeCardBottom}>
        <div className={classes.storeCardName}>{name}</div>
      </div>
    </div>
  );
};
export default StoreCard;

const useStyles = makeStyles((theme) => ({
  storeCardWrapper: {
    width: '266px',
    height: '266px',
    borderRadius: '8px',
    marginTop: '15px',
    cursor: 'pointer',
    margin: '8px',
    [theme.breakpoints.down('md')]: {
      width: '298px',
      height: '272px',
    },
  },
  storeCardTop: {
    height: '192px',
    background: '#EAEAEA',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
    filter: 'blur(0px)',
    transition: 'filter 0.5s linear',
  },
  storeCardPercent: {
    background: '#33CC55',
    borderRadius: '12px',
    width: '60px',
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

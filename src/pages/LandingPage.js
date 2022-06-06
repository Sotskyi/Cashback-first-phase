import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';

import LargeScreenHeader from '../components/public/LargeScreenHeader';
import MediumScreenHeader from '../components/public/MediumScreenHeader';

const LandingPage = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery('(max-width:1280px)');

  return (
    <div className={classes.container}>
      {isMediumScreen ? <MediumScreenHeader /> : <LargeScreenHeader />}

      <div className={classes.titleInformtionContainer}>
        <div className={classes.titleInformtionWrapper}>
          <div className={classes.title}>Shop online with our partners</div>
          <div className={classes.subTitle}>
            <div>Reduce your mobile </div>
            <div>bill with cash-back.</div>
          </div>
          <div className={classes.missionInformationWrapper}>
            <div className={classes.missionInformation}>
              We are on a mission to help reduce your phone bill.
              {!isMediumScreen && <br />} When you shop online via our mobile app, Telco Rewards will
              {!isMediumScreen && <br />} credit you with cash-back you apply it to your phone bill.
            </div>
          </div>
        </div>
        <div className={classes.widgetsContainer}>
          <div className={classes.widgets}>
            <img src='assets/images/widgets/appStore.svg' alt='' />
            <img src='assets/images/widgets/googlePlay.svg' alt='' />
          </div>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        <div className={classes.cardsWrapper}>
          <div className={classes.card}>
            <div className={classes.cardInfo}>
              <div className={classes.cardTitle}>
                Sign up for an account or log in to <br /> Telco Rewards. Include your Mobile Provider and Billing
                Number.
              </div>
              <img src='assets/images/images/firstPhone.png' alt='' />
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardInfo}>
              <div className={classes.cardTitle}>
                Click on your favorite store and <br /> shop. After clicking on your store of choice, shop as you
                normally would, add to cart, and check out.
              </div>
              <img src='assets/images/images/secondPhone.png' alt='' />
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardInfo}>
              <div className={classes.cardTitle}>
                Earn cashback and apply it to your <br /> mobile billing account!
              </div>
              <img src='assets/images/images/thirdPhone.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerContainer}>
        <div className={classes.footerLogoWrapper}>
          <img className={classes.footerLogo} src='assets/images/logos/logo.svg' alt='logo' />
        </div>
        <div className={classes.footerLinksContainer}>
          <span>Shop</span> <span>Wallet</span> <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>FAQ</span>
        </div>
        <div className={classes.copyright}>Copyright Telco Rewards Inc., 2022</div>
      </div>
    </div>
  );
};
export default LandingPage;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    scrollBehavior: 'smooth',
    // overflowY: "hidden",
    // overflow-x: hidden;
    // scroll-behavior: smooth;
  },
  titleInformtionContainer: {
    width: '100%',
    height: '406px',
    display: 'flex',
    marginTop: '56px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginTop: '32px',
      height: '286px',
    },
  },
  titleInformtionWrapper: {
    width: '752px',
    height: '406px',
  },
  title: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    lineHeight: '44px',
    fontWeight: '500px',
    fontSize: '36px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '24px',
      fontWeight: '500px',
      fontSize: '20px',
    },
  },
  subTitle: {
    fontFamily: 'Source Sans Pro, sans-serif ',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '64px',
    height: '158px',
    lineHeight: '79px',
    width: '752px',
    textAlign: 'center',
    letterSpacing: '0.01em',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      lineHeight: '39px',
      height: '78px',
    },
  },
  missionInformationWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  missionInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    letterSpacing: '0.01em',
    fontSize: '20px',
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: '160%',
    color: '#6A6A6A',
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '22px',
      width: '320px',
    },
  },
  widgetsContainer: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  widgets: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '297px',
  },
  cardsContainer: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
  },
  cardsWrapper: {
    width: '1136px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div:nth-child(2)': {
      marginInline: '16px',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '& div:nth-child(2)': {
        marginBlock: '16px',
      },
    },
  },
  card: {
    width: '368px',
    height: '772px',
    background: '#FAFAFA',
    borderRadius: '8px',
    boxSizing: 'border-box',
    padding: '40px 48px 48px 48px',
    [theme.breakpoints.down('md')]: {
      width: '336px',
      height: '724px',
    },
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px',
  },
  footerContainer: {
    // height: "336px",
    marginTop: '72px',
    borderTop: '1px solid #EAEAEA',
    lineHeight: '25px',
  },
  footerLogoWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  footerLogo: {
    marginTop: '40px',
    marginLeft: '72px',
    [theme.breakpoints.down('md')]: {
      width: '152px',
      height: '16px',
      marginTop: '40px',
      marginLeft: '0px',
    },
  },
  footerLinksContainer: {
    height: '192px',
    marginLeft: '72px',
    marginTop: '19px',
    lineHeight: '33px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
  },
  copyright: {
    width: '100%',
    textAlign: 'center',
    height: '48px',
    fontFamily: 'Inter',
    color: '#6A6A6A',
    fontSize: '16px',
    fontWeight: '500',
  },
}));

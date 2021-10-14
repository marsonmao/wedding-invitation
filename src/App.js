import './App.css';
import { css } from "@emotion/css";
import { ReactComponent as Ohm } from './ohm_tamil.svg';

function App() {
  return (
    <div className={classes.root}>
      <img src={'wedding-invitation/wed_inv.png'} className={classes.image} alt="-" />
      <div className={classes.logoMask}></div>
      <Ohm className={classes.logo} />
      <div className={classes.centerBlock}>
        <div className={classes.mask}></div>
        <div className={classes.topSection}>
          <div className={classes.topSectionCell}>
            {/* <span className={classes.title1}>新郎</span> */}
            <span className={classes.text1}>毛璽樹</span>
            {/* <span className={classes.title2}>男方家長</span> */}
            <span className={classes.text2}>毛佛南　韓綺芸</span>
          </div>
          <div className={classes.topSectionCell}>
            {/* <span className={classes.title1}>新娘</span> */}
            <span className={classes.text1}>黃詩雅</span>
            {/* <span className={classes.title2}>女方家長</span> */}
            <span className={classes.text2}>黃永祥　蘇靖園</span>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.bottomSection}>
          <span className={classes.text3}>2021.12-12.1202</span>
          <span className={classes.text3}>優聖美地</span>
          <span className={classes.text3}>新北市新店區屈尺里石厝路10號</span>
          <span className={classes.text3}>2666-3507</span>
        </div>
      </div>      
    </div>
  );
}

export default App;

const grey = '#a8a8a8';
const red = '#c40f24';
const gold = '#e2c08b';
const opacity = 0.99;

const classes = {
  title1: css`
    font-size: 18px;
    color: ${gold};
    font-weight: 400;
  `,
  text1: css`
    font-size: 24px;
    color: ${gold};
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 48px;
  `,
  title2: css`
    font-size: 18px;
    color: ${gold};
    font-weight: 400;
  `,
  text2: css`
    font-size: 24px;
    color: ${gold};
    font-weight: 300;
    line-height: 36px;
  `,
  text3: css`
    font-size: 24px;
    color: ${gold};
    font-weight: 300;
    line-height: 40px;
  `,
  ////
  root: css`
    width: 100%;
    height: 100%;
    position: relative;
    font-family: 'NotoSerifTC';
  `,
  logoMask: css`
    position: absolute;
    top: 133px;
    left: 545px;
    width: 110px;
    height: 110px;
    background-color: ${red};
    opacity: ${opacity};
  `,
  logo: css`
    position: absolute;
    top: 163px;
    left: 545px;
    width: 110px;
    height: 110px;
    fill: currentColor;
    color: ${gold};
  `,
  image: css`
    width: 1200px;
    height: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  `,
  ////
  centerBlock: css`
    width: 534px;
    height: 462px;
    position: relative;
    top: 244px;
    left: 334px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  mask: css`
    width: 100%;
    height: 100%;
    background-color: ${red};
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: ${opacity};
    z-index: -1;
  `,
  topSection: css`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  `,
  topSectionCell: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  divider: css`
    width: 446px;
    height: 1px;
    background-color: ${gold};
    margin-top: 50px;
    margin-bottom: 50px;
  `,
  bottomSection: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
}
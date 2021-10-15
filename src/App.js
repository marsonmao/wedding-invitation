import './App.css';
import { css, cx } from "@emotion/css";
import { ReactComponent as Ohm } from './ohm_tamil.svg';

const bg_src = process.env.NODE_ENV === 'development' ? 'wedding-invitation/wed_inv.png' : 'wed_inv.png';

function App() {
  return (
    <div className={classes.root}>
      <img src={bg_src} className={classes.image} alt="-" />
      <div className={classes.logoMask}></div>
      {/* <Ohm className={classes.logo} /> */}
      <div className={classes.logo}>ௐ</div>
      <div className={classes.centerBlock}>
        <div className={classes.mask}></div>
        <div className={classes.topSection}>
          <div className={classes.topSectionCell}>
            {/* <span className={classes.title1}>新郎</span> */}
            <span className={classes.text1}>毛璽樹</span>
            <span className={classes.text1Margin} />
            {/* <span className={classes.title2}>男方家長</span> */}
            <span className={classes.text2}>毛佛南 韓綺芸</span>
          </div>
          <div className={classes.topSectionCellGap} />
          <div className={classes.topSectionCell}>
            {/* <span className={classes.title1}>新娘</span> */}
            <span className={classes.text1}>黃詩雅</span>
            <span className={classes.text1Margin} />
            {/* <span className={classes.title2}>女方家長</span> */}
            <span className={classes.text2}>黃永祥 蘇靖園</span>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.bottomSection}>
          <div className={classes.text3Wrap}>
            <span className={cx(classes.text3, classes.text3Number, classes.text3Space1)}>2021.12.12</span>
            <span className={cx(classes.text3)}>優聖美地</span>
          </div>
          <div className={classes.text3Wrap}>
            <span className={cx(classes.text3, classes.text3Number, classes.text3Space2)}>11</span>
            <span className={cx(classes.text3, classes.text3Space2)}>證婚</span>
            <span className={cx(classes.text3, classes.text3Number, classes.text3Space2)}>12</span>
            <span className={cx(classes.text3)}>吃飯</span>
          </div>
          <span className={classes.text3Margin} />
          <span className={classes.text4}>新北市新店區屈尺里石厝路十號</span>
          <span className={cx(classes.text4, classes.text4Number)}>2666-3507</span>
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
const logoSize = 80;
const rootWidth = 1200;

const classes = {
  // title1: css`
  //   font-size: 18px;
  //   color: ${gold};
  //   font-weight: 400;
  // `,
  text1: css`
    font-size: 34px;
    color: ${gold};
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 2px;
  `,
  text1Margin: css`
    margin-bottom: 48px;
  `,
  // title2: css`
  //   font-size: 18px;
  //   color: ${gold};
  //   font-weight: 400;
  // `,
  text2: css`
    font-size: 32px;
    color: ${gold};
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 2px;
  `,
  text3Wrap: css`
    display: flex;
    align-items: baseline;
  `,
  text3: css`
    font-size: 28px;
    color: ${gold};
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 2px;
  `,
  text3Number: css`
    font-family: 'Optima';
    font-weight: 400;
    font-size: 30px;
  `,
  text3Space1: css`
    margin-right: 12px;
  `,
  text3Space2: css`
    margin-right: 4px;
  `,
  text3Margin: css`
    margin-bottom: 40px;
  `,
  text4: css`
    font-size: 24px;
    color: ${gold};
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 2px;
  `,
  text4Number: css`
    font-family: 'Optima';
    font-weight: 400;
  `,
  ////
  root: css`
    width: ${rootWidth}px;
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
    left: calc(${rootWidth * 0.5}px - ${logoSize * 0.5}px + ${logoSize * 0.15}px);
    width: ${logoSize}px;
    height: ${logoSize}px;
    // For svg
    fill: currentColor;
    color: ${gold};
    // For text
    font-size: ${logoSize}px;
    line-height: ${logoSize}px;
    font-family: 'NotoSerifTamil';
    font-weight: 200;
  `,
  image: css`
    width: ${rootWidth}px;
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
    justify-content: flex-start;
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
    margin-top: 60px;
    margin-bottom: 72px;
  `,
  topSectionCell: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  topSectionCellGap: css`
    width: 48px;
    height: 8px;
    flex-shrink: 0;
  `,
  divider: css`
    width: 64%;
    height: 1px;
    flex-shrink: 0;
    background-color: ${gold};
    margin-bottom: 12px;
  `,
  bottomSection: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
}
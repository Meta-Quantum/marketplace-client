import React from 'react';
import img1 from '../../../data/homePage images/img1.png';
import img2 from '../../../data/homePage images/img2.png';
import img4 from '../../../data/homePage images/img4.png';
import img5 from '../../../data/homePage images/img5.png';
import img6 from '../../../data/homePage images/img6.png';
import img7 from '../../../data/homePage images/img7.png';
// import HomeHiddenNav from '../../Hidden Navs/Home Hidden Nav/HomeHiddenNav';
import HomeSlideShow from './HomeSlideShow';
import './home.css';

const ads = [img1, img2, img4, img5, img6, img7];

const MainAds = () => {
  return (
    <div className="all-publicity">
      {/* <HomeHiddenNav /> */}
      <HomeSlideShow ads={ads} />
      <div className="small-publicity">
        <div>
          <img src={img6} alt="" className="home-small-ad" />
        </div>
        <div>
          <img src={img4} alt="" className="home-small-ad" />
        </div>
      </div>
    </div>
  );
};

export default MainAds;

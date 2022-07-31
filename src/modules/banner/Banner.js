import React from 'react';
import BannerBG from 'assets/images/espresso-1510-x-1007.png';

function Banner() {
  return (
    <div id="banner-container" className="section-container">
      <div className="banner-img">
        <img alt="" src={BannerBG} className="" />
      </div>
      <div className="content">
        <div className="label mb-2">THE TASTE OF</div>
        <div className="highlight-container mb-2">
          <div className="highlight-bg">PERFECTION</div>
        </div>
        <div className="d-flex">
          <a href="#contacts-container" className="visit-us">VISIT US</a>
        </div>
      </div>
    </div>
  );
}

export default Banner

import React, { useEffect } from 'react';
import { animateOnScroll } from 'helpers/Animation';

function AboutUs() {
  useEffect(() => {
    animateOnScroll('text-init', 'text-animate');
    animateOnScroll('horizontal-bar-init', 'horizontal-bar-animate');
  }, []);

  return (
    <div id="about-us-container" className="section-container text-center">
      <div className="content">
        <div className="row mb-4 mb-lg-5">
          <div className="col-12 d-flex justify-content-center">
            <div className="horizontal-bar horizontal-bar-init  mb-3" />
          </div>
          <div className="col-12 text-center">
            <label className="section-title text-init">About our finest beverages</label>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-init">
              One of the Philippines’ finest coffee shop, 95° Cafe specializes in selecting and roasting the world's most exclusive coffee beans. Known for our famous selection of exotic indonesian coffee beans and luxurious chinese teas. 95° Cafe is sought after by many tourists and locals for its award winning <span className="text-italic">“kopi luwak“</span> and other exotic beverages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

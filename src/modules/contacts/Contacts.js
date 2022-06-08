import React, { useEffect } from 'react';
import LogoWhite from 'assets/images/logo-white.png';
import Instagram from 'assets/images/white-instagram.png';
import Facebook from 'assets/images/white-facebook.png';
import Twitter from 'assets/images/white-twitter.png';
import Map from 'assets/images/map.jpg';
import { animateOnScroll } from 'helpers/Animation';

function Contacts() {
  useEffect(() => {
    animateOnScroll('text-init', 'text-animate');
    animateOnScroll('horizontal-bar-init', 'horizontal-bar-animate');
  }, []);
  return (
    <div id="contacts-container" className="section-container">
      <div className="content">
        <div className="row">
          {/* COL 1 */}
          <div className="col-xs-8 col-sm-6 col-md-4 pb-5 pb-sm-4">
            <div className="h-100 d-flex align-items-start flex-column">
              <div className="logo mb-auto text-init">
                <img alt="logo" src={LogoWhite} />
              </div>
              <div className="w-100 navigation-holder">
                <div className="navigation-link text-init">
                  <a href="#banner-container">HOME</a>
                </div>
                <div className="navigation-link text-init">
                  <a href="#about-us-container">ABOUT US</a>
                </div>
                <div className="navigation-link text-init">
                  <a href="#menu-container">MENU</a>
                </div>
                <div className="navigation-link text-init">
                  <a href="#contacts-container">CONTACTS</a>
                </div>
              </div>
            </div>
          </div>
          {/* COL 2 */}
          <div className="col-xs-8 col-sm-6 col-md-4 pb-4">
            <div className="h-100 d-flex align-items-start flex-column contact-details">
              <div className="w-100 mb-auto">
                <div className="w-100">
                  <div className="horizontal-bar mb-2 horizontal-bar-init" />
                </div>
                <div className="w-100 text-init title secondary-title mb-4 mb-xs-5">Keep in Touch</div>
                <div className="w-100 text-init">(+63)935-9999-8888</div>
                <div className="w-100 text-init mb-4">95degreecafe@gmail.com</div>
                <div className="w-100 text-init mb-5">Old National Highway, Brgy, Santa Rosa, Laguna</div>
              </div>
              <div className="w-100">
                <img alt="instagram" src={Instagram} className="social-icon mr-4 text-init" />
                <img alt="facebook" src={Facebook} className="social-icon mr-4 text-init" />
                <img alt="twitter" src={Twitter} className="social-icon text-init" />
              </div>
            </div>
          </div>
          {/* COL 3 */}
          <div className="col-12 col-md-4 pb-4">
            <div className="map-holder text-init">
              <img alt="map" src={Map} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="copyright">© 2020 95°c Brew. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

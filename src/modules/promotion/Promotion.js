import React, { useEffect } from 'react';
import BG1 from 'assets/images/tea-480-x-720.png';
import BG2 from 'assets/images/pancake-576-x-867.png';
import BG3 from 'assets/images/black-coffee-512-x-654.png';
import { animateOnScroll } from 'helpers/Animation';

const list = [
  {
    id: 1,
    title: 'The finest tea in town',
    content: 'Spoil yourself with some of our finest tea imported directly from china',
    image: BG1,
  },
  {
    id: 2,
    title: 'Perfect way to start off your day',
    content: 'There is no better partner for your perfect  beverages than our perfect pancakes',
    image: BG2,
  },
  {
    id: 3,
    title: 'Perfectly brewed coffee',
    content: 'Start your work as you enjoy our coffee freshly brewed by the finest baristas',
    image: BG3,
  },
];
function Promotion() {
  useEffect(() => {
    animateOnScroll('promotion-image-init', 'promotion-image-animate');
    animateOnScroll('text-init', 'text-animate');
    animateOnScroll('horizontal-bar-init', 'horizontal-bar-animate');
  }, []);
  return (
    <div id="promotion-container">
      <div className="w-100 row m-0">
        {list.map(item => (
          <div
            key={item.id}
            className="col-sm-12 col-md-4 p-0 content"
            style={{backgroundImage: `url(${item.image})`}}
          >
            <div className="overlay">
              <div className="w-100 d-flex justify-content-center">
                <div className="horizontal-bar horizontal-bar-init mb-2" />
              </div>
              <div className="w-100 d-flex justify-content-center mb-3">
                <div className="highlight text-init">
                  <label className="secondary-title">{item.title}</label>
                </div>
              </div>
              <p className="text-init">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotion;

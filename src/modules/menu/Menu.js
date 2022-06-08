import React, { useEffect } from 'react';
import BG1 from 'assets/images/bean-1.png';
import BG2 from 'assets/images/bean-2.png';
import BG3 from 'assets/images/bean-3.png';
import BG4 from 'assets/images/bean-4.png';
import { animateOnScroll } from 'helpers/Animation';
import {
  menu_coffee,
  menu_espresso,
  menu_tea,
  menu_food,
} from './dataset';
import MenuTableLG from './components/MenuTableLG';
import MenuTableMD from './components/MenuTableMD';
import MenuTableSM from './components/MenuTableSM';


function Menu() {
  useEffect(() => {
    animateOnScroll('text-init', 'text-animate');
    animateOnScroll('horizontal-bar-init', 'horizontal-bar-animate');
  }, []);
  return (
    <div id="menu-container" className="section-container">
      <img alt="bean-1" src={BG1} className="bean-bg bean-1" />
      <img alt="bean-2" src={BG2} className="bean-bg bean-2" />
      <img alt="bean-3" src={BG3} className="bean-bg bean-3" />
      <img alt="bean-4" src={BG4} className="bean-bg bean-4" />

      <div className="content">
        <div className="w-100 d-flex justify-content-center">
          <div className="horizontal-bar horizontal-bar-init mb-3" />
        </div>
        <div className="w-100 title section-title text-center text-init">Menu</div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 pr-3 pr-lg-4">
            <div className="w-100 mb-5 text-init">
              <MenuTableLG data={menu_coffee} />
            </div>
            <div className="w-100 mb-5 text-init">
              <MenuTableLG data={menu_espresso} />
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-6 pr-3 pr-lg-4">
            <div className="w-100 mb-5 text-init">
              <MenuTableMD data={menu_tea} />
            </div>
            <div className="w-100 text-init">
              <MenuTableSM data={menu_food} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

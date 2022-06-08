import React from 'react';
import Header from 'components/sections/Header';
import Banner from 'modules/banner/Banner';
import AboutUs from 'modules/about-us/AboutUs';
import Promotion from 'modules/promotion/Promotion';
import Menu from 'modules/menu/Menu';
import Contacts from 'modules/contacts/Contacts';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Promotion />
      <Menu />
      <Contacts />
    </>
  );
}

export default App;
  
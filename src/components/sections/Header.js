import React, { useState, useEffect } from 'react';
import Logo from 'assets/images/logo-primary.png';
import LogoWhite from 'assets/images/logo-white.png';

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 75) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }
  const handleCloseNavbar = () => {
    setIsToggled(false);
  };
  const handleToggleNavbar = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.body.addEventListener('click', handleCloseNavbar);
    return () => {
      document.body.addEventListener('click', handleCloseNavbar);
    };
  });

  return (
    <nav id="header-container" className={`section-container ${hasScrolled && 'is-scrolled'} ${isToggled && 'toggled'}`}>
      <div className="content d-flex align-items-center">
        <div className="header-logo">
          <img alt="logo" src={(hasScrolled || isToggled) ? Logo : LogoWhite} />
        </div>

        <div className={`navigation-holder ${isToggled && 'toggled'}`}>
          <a href="#banner-container" className="navigation-link">HOME</a>
          <a href="#about-us-container" className="navigation-link">ABOUT US</a>
          <a href="#menu-container" className="navigation-link">MENU</a>
          <a href="#contacts-container" className="navigation-link">CONTACTS</a>
        </div>
        <a
          role="button"
          aria-label="navigation-burger"
          href="/"
          className={`burger-header ml-auto ${isToggled && 'toggled'}`}
          onClick={handleToggleNavbar}
        >
          <div />
          <div />
          <div />
        </a>
      </div>
    </nav>
  );
}

export default Header;

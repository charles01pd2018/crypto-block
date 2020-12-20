import React, { useState, useRef, useEffect } from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// objects
import NAV_LINKS from './objects/NavLinks';

// elements
import { Logo } from './partials';
import { HeaderDropdown } from './partials/header';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: true,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);
  const [isNavMenuActive, setIsNavMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nav = useRef(null);
  const hamburger = useRef(null);
  const navDesktopDropdown = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    isNavMenuActive && openNavMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    window.addEventListener('resize', handleWindowWidthChange);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      window.removeEventListener('resize', handleWindowWidthChange)
      closeAllMenus();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
    isNavMenuActive && e.keyCode === 27 && closeNavMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current || !navDesktopDropdown.current) return;
    if (nav.current.contains(e.target) || navDesktopDropdown.current.contains(e.target)) return;
    if (e.target  === hamburger.current) return;
    closeAllMenus();
  }  

  const handleWindowWidthChange = () => {
    setWindowWidth(window.innerWidth);
  }

  const openNavMenu = () => {
    navDesktopDropdown.current.style.maxHeight = navDesktopDropdown.current.scrollHeight + 'px';
    setIsNavMenuActive(true);
  }

  const closeNavMenu = () => {
    navDesktopDropdown.current && (navDesktopDropdown.current.style.maxHeight = null);
    setIsNavMenuActive(false);
  }

  const closeAllMenus = () => {
    closeMenu();
    closeNavMenu();
  }

  
  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className='container'>
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeAllMenus : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>

              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>

                <div className="header-nav-inner">

                  <ul className={
                    classNames(
                      'list-reset text-sm',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                      { NAV_LINKS.map( ( { navTitle, navBody } )  => (
                        <li key={`${navTitle}-list-item`}>
                          <Link to='#' className='list-item-label' onClick={isNavMenuActive ? closeNavMenu : openNavMenu}>
                            {navTitle}
                          </Link>

                          { isNavMenuActive && ( windowWidth <= 1024 ) ? 
                            <HeaderDropdown navBody={navBody} onClick={closeAllMenus}/> : ( null )
                          }
                        </li>
                      ))}
                  </ul>

                  <Link to='/crypto-block/learn/what-is-bitcoin' className='list-item-label' onClick={isNavMenuActive ? closeNavMenu : openNavMenu}>
                      What is Bitcoin?
                  </Link>


                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>

      <div ref={navDesktopDropdown}>
        { NAV_LINKS.map( navLinksItem  => ( 
          isNavMenuActive && ( windowWidth > 1024 ) ? 
            <HeaderDropdown
            key={`${navLinksItem.navTitle}-desktop-header-dropdown`} 
            navBody={navLinksItem.navBody} 
            onClick={closeAllMenus} 
            /> : ( null ) 
        ))}
      </div>

    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
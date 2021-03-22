import React, { useState, useRef, useEffect } from 'react';

// dependencies
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// content
import { LEARN_LINKS, REVIEW_LINKS } from './NavLinks';

// elements
import Logo from '../Logo';
import HeaderDropdown from './HeaderDropdown';


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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // hamburger navigation
  const [isActive, setIsactive] = useState(false);

  // header dropdowns
  const [isLearnNavMenuActive, setIsLearnNavMenuActive] = useState(false);
  const [isReviewsNavMenuActive, setIsReviewsNavMenuActive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);
  const navDesktopDropdown = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    isLearnNavMenuActive && openLearnNavMenu();
    isReviewsNavMenuActive && openReviewsNavMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    document.addEventListener("touchstart", function() {}, true);
    window.addEventListener('resize', handleWindowWidthChange);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      document.removeEventListener("touchstart", function() {}, true);
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

  const openLearnNavMenu = () => {
    closeAllDropdownMenus();
    navDesktopDropdown.current.style.maxHeight = navDesktopDropdown.current.scrollHeight + 'px';
    setIsLearnNavMenuActive(true);
  }

  const closeLearnNavMenu = () => {
    navDesktopDropdown.current && (navDesktopDropdown.current.style.maxHeight = null);
    setIsLearnNavMenuActive(false);
  }

  const openReviewsNavMenu = () => {
    closeAllDropdownMenus();
    navDesktopDropdown.current.style.maxHeight = navDesktopDropdown.current.scrollHeight + 'px';
    setIsReviewsNavMenuActive(true);
  }

  const closeReviewsNavMenu = () => {
    navDesktopDropdown.current && (navDesktopDropdown.current.style.maxHeight = null);
    setIsReviewsNavMenuActive(false);
  }

  const closeAllDropdownMenus = () => {
    navDesktopDropdown.current && (navDesktopDropdown.current.style.maxHeight = null);
    setIsLearnNavMenuActive(false);
    setIsReviewsNavMenuActive(false);
  }

  const closeAllMenus = () => {
    closeAllDropdownMenus();
    closeMenu();
  }

  const handleWindowWidthChange = () => {
    setWindowWidth(window.innerWidth);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
    isLearnNavMenuActive && e.keyCode === 27 && closeLearnNavMenu();
    isReviewsNavMenuActive && e.keyCode === 27 && closeReviewsNavMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current || !navDesktopDropdown.current) return;
    if (nav.current.contains(e.target) || navDesktopDropdown.current.contains(e.target)) return;
    if (e.target  === hamburger.current) return;
    closeAllMenus();
  }  

  const isDesktop = () => {
    if ( windowWidth > 1024 ) return true;
    return false;
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
          <Logo onClick={closeAllMenus} />
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
                   
                        <li>
                          <Link to='#' 
                            className={classNames(
                              isLearnNavMenuActive && isDesktop() ? 'list-item-active' : ( null ), 
                              isLearnNavMenuActive && !isDesktop() ? ( null ) : ( 'list-item-label' ) )} 
                            onClick={isLearnNavMenuActive ? closeLearnNavMenu : openLearnNavMenu}>
                            <span>{LEARN_LINKS.navTitle}</span>
                          </Link>  

                          { !isDesktop() ? (
                            <span className={classNames(
                              'chevron-container',
                              isLearnNavMenuActive && 'chevron-active' )}>
                                <span className='chevron'></span> 
                            </span>
                          ) : ( null ) }
                          
                          { isLearnNavMenuActive && !isDesktop() ? 
                            <HeaderDropdown navBodies={LEARN_LINKS.navBodies} onClick={closeAllMenus}/> 
                            : ( null ) }
                        </li>

                        <li>
                          <Link to='#' 
                            className={classNames(
                              isReviewsNavMenuActive && isDesktop() ? 'list-item-active' : ( null ), 
                              isReviewsNavMenuActive && !isDesktop() ? ( null ) : ( 'list-item-label' ))}
                            onClick={isReviewsNavMenuActive ? closeReviewsNavMenu : openReviewsNavMenu}>
                            <span>{REVIEW_LINKS.navTitle}</span>
                          </Link>

                          { !isDesktop() ? (
                            <span className={classNames(
                              'chevron-container',
                              isReviewsNavMenuActive && 'chevron-active' )}>
                                <span className='chevron'></span> 
                            </span>
                          ) : ( null ) }

                          { isReviewsNavMenuActive && !isDesktop() ? 
                            <HeaderDropdown navBodies={REVIEW_LINKS.navBodies} onClick={closeAllMenus} /> 
                            : ( null ) }
                        </li>
    
                  </ul>

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
        { isLearnNavMenuActive && isDesktop() ? 
            <HeaderDropdown navBodies={LEARN_LINKS.navBodies} onClick={closeAllMenus} /> 
          : ( null ) }

        { isReviewsNavMenuActive && isDesktop() ? 
            <HeaderDropdown navBodies={REVIEW_LINKS.navBodies} onClick={closeAllMenus} /> 
            : ( null ) }
      </div>

    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
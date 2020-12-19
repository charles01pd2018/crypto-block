import React, { useState, useEffect, useRef } from 'react';

// types
import { Link } from 'react-router-dom';

const HeaderMainLink = ({
    HeaderDropdown
}) => {

    const [isActive, setIsActive] = useState(false);
    const nav = useRef(null);

    useEffect(() => {
        isActive && openMenu();
        document.addEventListener('keydown', keyPress);
        document.addEventListener('click', clickOutside);
        return () => {
          document.removeEventListener('keydown', keyPress);
          document.addEventListener('click', clickOutside);
          closeMenu();
        };
      });  

    
      const openMenu = () => {
        setIsActive(true);
      }
    
      const closeMenu = () => {
        setIsActive(false);
      }

      const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
      }
    
      const clickOutside = (e) => {
        if (!nav.current) return
        if (!isActive || nav.current.contains(e.target)) return;
        closeMenu();
      }  

    return (
    <>
        <Link to='#' onClick={isActive ? closeMenu : openMenu}>Reviews</Link>

        {isActive ?
            <HeaderDropdown /> : ( null )
        }
    </>
    );
}

export default HeaderMainLink;
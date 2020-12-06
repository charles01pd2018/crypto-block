import React, { useState, useRef, useEffect } from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// elements
import Button from '../../../components/elements/Button';
import ButtonGroup from '../../../components/elements/ButtonGroup';


const Dropdown = () => {

    const [isActive, setIsactive] = useState(false);

    const nav = useRef(null);
    const hamburger = useRef(null);

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
        document.body.classList.add('off-nav-is-active');
        //nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setIsactive(true);
      }
    
      const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        //nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
      }

      const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
      }
    
      const clickOutside = (e) => {
        if (!nav.current) return
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
      }  

    return (
<>
            <p className='center-content text-color-primary'><b>Dropdown Menu</b></p>

        
                <Button wide color="secondary" ref={hamburger} onClick={isActive ? closeMenu : openMenu}>
                    <span className="hamburger">
                        <span className="hamburger-inner"></span>
                     </span>
              </Button>

              { isActive ? (
                <div className='container center-content'> Hello World </div>
              ) : ( null )
}
</ >
    )
}

export default Dropdown;
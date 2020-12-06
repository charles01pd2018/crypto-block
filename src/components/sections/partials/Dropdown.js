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
        setIsactive(true);
      }
    
      const closeMenu = () => {
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

              <div className='panel-dropdown'>

                  <Button wide panel color='light-dark' size='sm' ref={hamburger} onClick={isActive ? closeMenu : openMenu}>
                      <span className='dropdown-title'>
                        Promotions
                      </span>
                  </Button>

                { isActive ? (

                  <div className='panel-dropdown-descripton'>
                    <div className='container ml-16 pb-4 pt-8 border-top'>
                      <p className='fw-600 mb-0'> <u>Title</u> </p>
                        <p> This would be me desribing what is going on</p>
                    </div>
                  </div>

                ) : ( null ) }

              </div>           
</ >
    )
}

export default Dropdown;
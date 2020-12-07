import React, { useState, useRef, useEffect, useCallback } from 'react';

// types
import classNames from 'classnames';

// elements
import Button from '../../../elements/Button';


const defaultProps = {
    children: null,
  }

const DropdownItem = ({
  className,
  item: {title, body},
  children
}) => {

    const [isActive, setIsactive] = useState(false);

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
        if (!isActive || nav.current.contains(e.target)) return;
        closeMenu();
      }  

      const dropdownItemClasses = classNames (
          'dropdown-item',
          className
      )

    return (
            <>
            <div className={dropdownItemClasses}>
                {children}
                <div className='dropdown-button'>
                    <Button wide panel color='light-dark' size='sm' onClick={isActive ? closeMenu : openMenu}>
                        <span className='dropdown-title'>
                        {title}
                        </span>
                    </Button>
                </div>

                { isActive ? (
                <div className='panel-dropdown-descripton'>
                    <div className='container ml-16 pb-4 pt-8 border-top'>
                    <p className='fw-600 mb-0'> <u>{body.header}</u> </p>
                        <p>{body.description}</p>
                    </div>
                </div> ) : ( null ) }
            </div>
            </>
    )
}


export default DropdownItem;
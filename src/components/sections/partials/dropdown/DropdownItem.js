import React, { useState, useEffect } from 'react';

// types
import classNames from 'classnames';

// elements
import Button from '../../../elements/Button';


const defaultProps = {
    children: null,
  }

const DropdownItem = ({
  className,
  item: { title, body },
  children
}) => {

    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
      isActive && openMenu();
      document.addEventListener('keydown', keyPress);
      return () => {
        document.removeEventListener('keydown', keyPress);
        closeMenu();
      };
    });  

    const keyPress = (e) => {
      isActive && e.keyCode === 27 && closeMenu();
    };

      const closeMenu = () => {
        setIsActive(false);
      };

      const openMenu = () => {
        setIsActive(true);
      };

      const dropdownItemClasses = classNames (
          'dropdown-item',
          className
      );

    return (
          <>
            <div className={dropdownItemClasses}>
                {children}
                <div className='dropdown-button'>
                    <Button wide panel color='light-dark' onClick={isActive ? closeMenu : openMenu}>
                        <span className='dropdown-title'>
                          <p className='mb-0'>{title}</p>
                        </span>
                    </Button>
                </div>

                { isActive ? (
                <div className='dropdown-description panels-item-inner'>
                    <span className='text-sm'>
                      <p className='fw-600 mb-0'> <u>{body.header}</u> </p>
                      <p>{body.description}</p>
                    </span>
                </div> ) : ( null ) }
            </div>
          </>
    )
}

DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
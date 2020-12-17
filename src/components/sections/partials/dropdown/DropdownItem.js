import React, { useState, useEffect } from 'react';

// types
import classNames from 'classnames';

// elements
import { Button } from '../../../elements';


const defaultProps = {
    children: null,
  }

const DropdownItem = ({
  className,
  item: { title, body },
  dropdownKey,
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

      const dropdownItemClasses = classNames(
          'dropdown-item',
          className
      );

      const dropdownTitleClasses = classNames(
        'dropdown-title',
        isActive && 'panel-description-open'
      );

      const dropdownDescriptionClasses = classNames(
        'dropdown-description panels-item-inner'
      );

    return (
          <>
            <div className={dropdownItemClasses} >
                {children}
                <div className='dropdown-button'>
                    <Button wide panel color='light-dark' onClick={isActive ? closeMenu : openMenu}>
                        <span className={dropdownTitleClasses}>
                          <span className='title'><p className='mb-0'>{title}</p></span>
                          <span className='chevron'></span>
                        </span>
                    </Button>
                </div>

                { isActive ? (
                <div className={dropdownDescriptionClasses}>
                    <span className='text-sm'>
                      <ul>
                      {body.map( ( description, index ) => (
                        <li key={`${dropdownKey}-${title}-description-${index}`}>
                          {description}
                        </li>
                      ))}
                      </ul>
                    </span>
                </div> ) : ( null ) }
            </div>
          </>
    )
}

DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
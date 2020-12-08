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
  dropdownName,
  children
}) => {

    const [isActive, setIsactive] = useState(false);
    
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
        setIsactive(false);
        localStorage.setItem({dropdownName}, false)
      };

      const openMenu = () => {
        setIsactive(true);

        const isMenuOpen = localStorage.getItem({dropdownName});
        
        if (isMenuOpen === true) {
          let closeMenuFunc = localStorage.getItem('closeMenu');
          closeMenuFunc();

          localStorage.setItem('closeMenu', closeMenu);
        } 
        else { 
          localStorage.setItem({ dropdownName }, true );
          localStorage.setItem('closeMenu', closeMenu);
        }
      };

      const dropdownItemClasses = classNames (
          'dropdown-item',
          className
      );

      console.log( localStorage.getItem({ dropdownName } ))
      console.log( localStorage.getItem('closeMenu'))
      

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
                <div className='dropdown-descripton'>
                    <div className='container ml-16 pb-4 pt-8 border-top text-sm'>
                    <p className='fw-600 mb-0'> <u>{body.header}</u> </p>
                        <p>{body.description}</p>
                    </div>
                </div> ) : ( null ) }
            </div>
          </>
    )
}

DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
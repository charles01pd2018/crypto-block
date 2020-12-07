import React, { useState, useRef, useEffect } from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';

// elements
import Button from '../../../components/elements/Button';


const propTypes = {
  data: PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
    })
  }).isRequired,
  children: PropTypes.node
}

const defaultProps = {
  children: null,
}

const Dropdown = ({
  className,
  data,
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

      const dropdownClasses = classNames(
        'panel-dropdown',
        className
      );

    return (
            <>
              <div className={dropdownClasses}>
                  {children}
                  <Button wide panel color='light-dark' size='sm' onClick={isActive ? closeMenu : openMenu}>
                      <span className='dropdown-title'>
                        {data.title}
                      </span>
                  </Button>

                { isActive ? (

                  <div className='panel-dropdown-descripton'>
                    <div className='container ml-16 pb-4 pt-8 border-top'>
                      <p className='fw-600 mb-0'> <u>{data.body.header}</u> </p>
                        <p>{data.body.description}</p>
                    </div>
                  </div>

                ) : ( null ) }

              </div>           
            </>
    )
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
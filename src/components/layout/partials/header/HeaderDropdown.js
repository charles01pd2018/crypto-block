import React from 'react';

// types
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const propTypes = {
    navBody: PropTypes.shape({
        navBodyLabel: PropTypes.string.isRequired,
        navBodyLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
        navBodyLinksDestinations: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onClick: PropTypes.func,
    pushLeft: PropTypes.string,
    children: PropTypes.node
};
  
const defaultProps = {
    pushLeft: '',
    children: null
};

const HeaderDropdown = ({
    className,
    navBody: { navBodyLabel, navBodyLinks, navBodyLinksDestinations },
    onClick,
    pushLeft,
    children
}) => {

    const outerClasses = classNames(
        'container feature-tiles',
        className
      );
    
      const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
      );
    
      const tilesClasses = classNames(
        'tiles-wrap text-xs',
        pushLeft && 'push-left'
      );
    
      const tilesItemClasses = classNames(
        'header-dropdown-content tiles-item',
      );


    return (
    <>
        <div id='header-dropdown'>
            <div className={outerClasses}>
                <div className={innerClasses}>
                    <div className={tilesClasses}>

                    <div className={tilesItemClasses}>
                        <div className='tiles-item-inner'>
                            {children}
                            
                            <div className='fw-600 mb-16 text-color-secondary nav-title'>
                                <u>{navBodyLabel}</u>
                            </div>

                            { navBodyLinks.map( ( navBodyLink, index )  => {
                                const linkDesintation = navBodyLinksDestinations[index];
                                return (
                                <Link to={linkDesintation} key={linkDesintation} onClick={onClick} className='nav-link list-item-label'>
                                    {navBodyLink}
                                </Link>
                            )})}

                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;


export default HeaderDropdown;
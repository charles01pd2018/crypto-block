import React from 'react';

// types
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const propTypes = {
    navBodies: PropTypes.arrayOf(
        PropTypes.shape({
        navBodyLabel: PropTypes.string.isRequired,
        navBodyLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
        navBodyLinksDestinations: PropTypes.arrayOf(PropTypes.string).isRequired
    })
    ).isRequired,
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
    navBodies,
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

                            { navBodies.map( ( { navBodyLabel, navBodyLinks, navBodyLinksDestinations }, bodyIndex )  => ( 
                                 <div className={tilesItemClasses} key={`header-dropdown-conent-${bodyIndex}`}>
                                    <div className='tiles-item-inner' key={`header-tile-${bodyIndex}`}>
                                        {children}

                                        <div className='fw-600 mb-16 text-color-secondary nav-title' key={navBodyLabel}>
                                            <u>{navBodyLabel}</u>
                                        </div>

                                        { navBodyLinks.map( ( navBodyLink, linkIndex ) => {
                                            const linkDestination = navBodyLinksDestinations[linkIndex];
                                            return (
                                            <Link to={linkDestination} key={linkDestination} onClick={onClick} className='nav-link list-item-label'>
                                                {navBodyLink}
                                            </Link> 
                                            )})}
                                    </div>
                                </div>
                            ))}

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
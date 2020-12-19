import React from 'react';

// types
import { Link } from 'react-router-dom';


const HeaderDropdown = ({
    navBody: { navBodyLabel, navBodyLinks, navBodyLinksDestinations }
}) => {

    return (
    <section>
        <div id='header-dropdown'>
            <div className='container feature-tiles'>
                <div className='features-tiles-inner section-inner pt-0'>
                    <div className='tiles-wrap text-xs'>

                    <div className='header-dropdown-content tiles-item'>
                        <div className='tiles-item-inner'>
                            
                            <div className='fw-600 mb-16 text-color-secondary nav-title'>
                                <u>{navBodyLabel}</u>
                            </div>

                            { navBodyLinks.map( ( navBodyLink, index )  => {
                                const linkDesintation = navBodyLinksDestinations[index];
                                return (
                                <Link to={linkDesintation} key={linkDesintation} className='mb-24 list-item-label'>
                                    {navBodyLink}
                                </Link>
                                )})}
                                
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default HeaderDropdown;
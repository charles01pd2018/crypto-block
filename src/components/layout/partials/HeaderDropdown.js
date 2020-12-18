import React, { useState } from 'react';

// types
import { Link } from 'react-router-dom';


const HeaderDropdown = ({
    dropdownLabel,
    onclick,
    dropdownLinks
}) => {

    const [isActive, setIsActive] = useState(false);

    return (
    <>
        <div className='header-dropdown'>
            <div className='container features-tiles'>
                <div className='header-dropdown-section features-tiles-inner section-inner'>
                    <div className='tiles-wrap text-sm'>

                    <div className='header-dropdown-link tiles-item tiles-item-inner'>
                        <Link to='/crypto-block'>Best Cryptocurrency Exchanges USA</Link>
                        <Link to='/crypto-block'>Best Cryptocurrency Hardware Wallets USA</Link>
                    </div>
                

                    <div className='header-dropdown-link tiles-item tiles-item-inner'>
                        <Link to='/crypto-block'>Best Cryptocurrency Hardware Wallets USA</Link>
                    </div>
                
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default HeaderDropdown;
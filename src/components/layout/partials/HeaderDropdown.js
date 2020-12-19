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
            <div className='container feature-tiles'>
                <div className='features-tiles-inner section-inner pt-0'>
                    <div className='tiles-wrap text-xs'>

                    <div className='header-dropdown-content tiles-item'>
                        <div className='tiles-item-inner'>
                            <div className='fw-600 mb-16 text-color-secondary nav-title'>
                                <u>Essentials</u>
                            </div>
                            <Link to='/crypto-block' className='mb-24 list-item-label'>Best Crypto Exchanges in USA</Link>
                            <Link to='/crypto-block' className='mb-24 list-item-label'>Best Crypto Hardware Wallets in USA</Link>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default HeaderDropdown;
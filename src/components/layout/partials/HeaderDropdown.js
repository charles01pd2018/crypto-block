import React, { useState } from 'react';


const HeaderDropdown = ({
    dropdownLabel,
    onclick,
    dropdownLinks
}) => {

    const [isActive, setIsActive] = useState(false);

    return (
    <>
        <div className='header-dropdown'>
            Hello World
        </div>
    </>
    );
}

export default HeaderDropdown;
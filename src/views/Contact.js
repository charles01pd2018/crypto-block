import React from 'react';

// sections
import Hero from '../components/sections/pages/contact/Hero';
import GenericSection from '../components/sections/GenericSection';


const Terms = () => {

    const contactEmail = (
        <p className='center-content fw-600'>yooshcrypto@gmail.com</p>
    );

    return (
        <>
            <Hero bottomDivider />
            <GenericSection children={contactEmail}/>
        </>
    );

}

export default Terms;
import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero } from '../../components/sections/pages/secondary/contact';
import GenericSection from '../../components/sections/GenericSection';


const Terms = () => {

    const contactEmail = (
        <p className='center-content fw-600'>yooshcrypto@gmail.com</p>
    );

    return (
        <>
         <Helmet>
            <meta name="description" content="Crypto Block Contact" /> 
            <title>Contact: Crypto Block</title>
         </Helmet>

            <Hero bottomDivider />
            <GenericSection children={contactEmail}/>
        </>
    );

}

export default Terms;
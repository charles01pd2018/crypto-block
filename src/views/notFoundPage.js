import React from 'react';
import { Helmet } from "react-helmet";

// sections
import Hero from '../components/sections/pages/notFoundPage/Hero';


const notFoundPage = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Crypto Block Not Found Page 404 Error" /> 
            <title>Page Not Found: Crypto Block</title>
        </Helmet>

        <Hero bottomDivider className='illustration-section-01'/>   
    </>
    );
}

export default notFoundPage;
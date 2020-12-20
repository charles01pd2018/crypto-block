import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero } from '../../../components/sections/pages/learn/bitcoin';


const WhatIsBTC = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="What is bitcoin BTC? Learn the basics of bitcoin." /> 
                <title>What is Bitcoin?</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
        </>
    );
}

export default WhatIsBTC;
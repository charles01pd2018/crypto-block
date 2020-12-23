import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, LearnCryptoTiles } from '../../../components/sections/pages/learn/crypto';

const LearnCrypto = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="Learn about cryptocurrency. Learn what cryptocurrency is, cryptocurrencies use cases, and how you can use cryptocurrency." /> 
                <title>Learn About Cryptocurrency</title>
            </Helmet>

            <Hero className='illustration-section-01'/>   
            <LearnCryptoTiles border tileLink />
        </>
    );
}

export default LearnCrypto;
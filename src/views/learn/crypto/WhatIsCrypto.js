import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, CryptoExplanation, CryptoDifferences, CryptoKinds, CryptoUseCases } from '../../../components/sections/pages/learn/crypto/what-is-crypto';

const WhatIsCrypto = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="What is crypto cryptocurrency? Learn what cryptocurrency is and cryptocurrencies use cases." /> 
                <title>What is Cryptocurrency?</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
            <CryptoExplanation invertMobile bottomDivider />
            <CryptoDifferences invertMobile bottomDivider />
            <CryptoKinds invertMobile bottomDivider />
            <CryptoUseCases invertMobile bottomDivider />
        </>
    );
}

export default WhatIsCrypto;
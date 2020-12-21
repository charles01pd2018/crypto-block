import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, IsBitcoinMoney, IsBitcoinStock, BitcoinSummary } from '../../../components/sections/pages/learn/bitcoin/what-is-bitcoin';


const WhatIsBitcoin = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="What is bitcoin BTC? Learn the basics of bitcoin." /> 
                <title>What is Bitcoin?</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
            <IsBitcoinMoney invertMobile bottomDivider />
            <IsBitcoinStock invertMobile bottomDivider />
            <BitcoinSummary invertMobile bottomDivider />
        </>
    );
}

export default WhatIsBitcoin;
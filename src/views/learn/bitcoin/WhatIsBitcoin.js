import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, IsBitcoinMoney, IsBitcoinStock, BitcoinSummary } from '../../../components/sections/pages/learn/bitcoin/what-is-bitcoin';
import { Banner } from '../../../components/elements';


const WhatIsBitcoin = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="What is bitcoin BTC? Learn the basics of bitcoin." /> 
                <title>What is Bitcoin?</title>
            </Helmet>

            <Banner />
            <Hero bottomDivider className='illustration-section-01'/>
            <IsBitcoinMoney invertMobile bottomDivider />
            <IsBitcoinStock invertMobile bottomDivider />
            <BitcoinSummary invertMobile bottomDivider />
        </>
    );
}

export default WhatIsBitcoin;
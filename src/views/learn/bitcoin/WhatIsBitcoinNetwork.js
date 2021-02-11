import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, BitcoinNetworkExplanation, BitcoinParticipants, BitcoinNetworkImportance, BitcoinTransactions } from '../../../components/sections/pages/learn/bitcoin/what-is-bitcoin-network';
import { Banner } from '../../../components/elements';


const WhatIsBitcoinNetwork = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="What is the bitcoin BTC network? Learn the technology behind bitcoin." /> 
                <title>What is the Bitcoin Network?</title>
            </Helmet>

            <Banner />
            <Hero bottomDivider className='illustration-section-01'/>
            <BitcoinNetworkExplanation invertMobile bottomDivider />
            <BitcoinParticipants invertMobile bottomDivider />
            <BitcoinNetworkImportance invertMobile bottomDivider />
            <BitcoinTransactions invertMobile bottomDivider />
        </>
    );
}

export default WhatIsBitcoinNetwork;
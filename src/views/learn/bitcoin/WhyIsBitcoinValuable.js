import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, BitcoinStoreValue, BitcoinGlobalEconomy, BitcoinTokenomics } from '../../../components/sections/pages/learn/bitcoin/why-is-bitcoin-valuable';


const WhyIsBitcoinValuable = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="Why is bitcoin BTC valuable? Learn what bitcoin accomplishes." /> 
                <title>Why is Bitcoin Valuable?</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
            <BitcoinStoreValue invertMobile bottomDivider />
            <BitcoinGlobalEconomy invertMobile bottomDivider />
            <BitcoinTokenomics invertMobile bottomDivider />
        </>
    );
}

export default WhyIsBitcoinValuable;
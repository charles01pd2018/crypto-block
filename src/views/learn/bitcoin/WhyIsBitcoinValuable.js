import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, IsBitcoinMoney, IsBitcoinStock, BitcoinSummary } from '../../../components/sections/pages/learn/bitcoin/what-is-bitcoin';


const WhyIsBitcoinValuable = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="Why is bitcoin BTC valuable? Learn what bitcoin accomplishes." /> 
                <title>Why is Bitcoin Valuable?</title>
            </Helmet>

        </>
    );
}

export default WhyIsBitcoinValuable;
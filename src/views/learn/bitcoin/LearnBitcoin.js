import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, LearnBitcoinTiles } from '../../../components/sections/pages/learn/bitcoin';


const LearnBitcoin = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Learn about bitcoin. Get a beginner's overview of what bitcoin is, why bitcoin is valuale, and what the bitcoin network is." /> 
            <title>Learn About Bitcoin</title>
        </Helmet>

        <Hero className='illustration-section-01'/>   
        <LearnBitcoinTiles border tileLink />
    </>
    );
}

export default LearnBitcoin;
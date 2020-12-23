import React from 'react';
import { Helmet } from "react-helmet";

// elements
import SectionHeader from '../../components/sections/partials/SectionHeader';

// sections
import { Hero } from '../../components/sections/pages/learn';
import { LearnBitcoinTiles } from '../../components/sections/pages/learn/bitcoin';
import { LearnCryptoTiles } from '../../components/sections/pages/learn/crypto';



const Learn = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Learn what's possible in cryptocurrency." /> 
            <title>Learn About Bitcoin &amp; Cryptocurrency</title>
        </Helmet>

        <Hero className='illustration-section-01' bottomDivider/>   

        <SectionHeader data={{title: 'Learn About Bitcoin', paragraph: "get a beginner's overivew of bitcoin"}} textColor='text-color-secondary' className='center-content mt-32' />
        <LearnBitcoinTiles border tileLink bottomDivider />

        <SectionHeader data={{title: 'Learn About Cryptocurrency', paragraph: "learn what cryptocurrency is, its use cases, and how you can use crypto"}} textColor='text-color-secondary' className='center-content mt-32' />
        <LearnCryptoTiles border tileLink bottomDivider />
    </>
    );
}

export default Learn;
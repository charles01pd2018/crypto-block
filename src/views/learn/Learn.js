import React from 'react';
import { Helmet } from "react-helmet";

// elements
import SectionHeader from '../../components/sections/partials/SectionHeader';

// sections
import { Hero } from '../../components/sections/pages/learn';
import { FeaturesTiles } from '../../components/sections/pages/learn/bitcoin';



const Learn = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Learn what's possible in cryptocurrency." /> 
            <title>Learn About Cryptocurrency</title>
        </Helmet>

        <Hero className='illustration-section-01' bottomDivider/>   
        <SectionHeader data={{title: 'Learn About Bitcoin', paragraph: "get a beginner's overivew of bitcoin"}} textColor='text-color-secondary' className='center-content mt-32' />
        <FeaturesTiles border tileLink bottomDivider />
    </>
    );
}

export default Learn;
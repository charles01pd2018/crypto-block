import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, FeaturesSplit, FeaturesTiles } from '../../components/sections/pages/main/about';


const About = () => {

    return ( 
        <div>
            <Helmet>
                <meta name="description" content="Learn what's possible in cryptocurrency. Discover the best cryptocurrency exchanges and hardware wallets." /> 
                <title>Cryptocurrency: learn what's possible</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
            <FeaturesSplit />
            <FeaturesTiles />
        </div>
    );
}

export default About;
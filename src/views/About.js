import React from 'react';
import { Helmet } from "react-helmet";

// sections
import Hero from '../components/sections/pages/about/Hero';
import FeaturesSplit from '../components/sections/pages/about/FeaturesSplit';
import FeaturesTiles from '../components/sections/pages/about/FeaturesTiles';


const About = () => {

    return ( 
        <>
            <Helmet>
                <meta name="description" content="Learn what's possible in cryptocurrency. Discover the best cryptocurrency exchanges." /> 
                <title>Cryptocurrency: learn what's possible</title>
            </Helmet>

            <Hero bottomDivider className='illustration-section-01'/>
            <FeaturesSplit />
            <FeaturesTiles />
        </>
    );
}

export default About;
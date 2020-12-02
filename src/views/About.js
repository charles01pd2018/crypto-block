import React from 'react';

// sections
import Hero from '../components/sections/pages/about/Hero';
import FeaturesSplit from '../components/sections/pages/about/FeaturesSplit';
import FeaturesTiles from '../components/sections/pages/about/FeaturesTiles';


const About = () => {

    return ( 
        <>
            <Hero bottomDivider className='illustration-section-01'/>
            <FeaturesSplit />
            <FeaturesTiles />
        </>
    )
}

export default About;
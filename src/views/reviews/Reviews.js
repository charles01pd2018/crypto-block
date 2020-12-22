import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, FeaturesTiles } from '../../components/sections/pages/reviews'


const Reviews = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Discover the best cryptocurrency products and services." /> 
            <title>Best Cryptocurrency Products/Services</title>
        </Helmet>

        <Hero className='illustration-section-01'/>   
        <FeaturesTiles border tileLink />
    </>
    );
}

export default Reviews;
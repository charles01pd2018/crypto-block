import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, ReviewPanels } from '../../components/sections/pages/reviews/wallet-reviews';


const WalletReviews = () => {

    return (
    <>
        <Helmet>
            <meta name="description" content="Best Cryptocurrency Exchanges in USA, 2020" /> 
            <title>Best Cryptocurrency Exchanges in USA, 2020</title>
        </Helmet>

        <Hero className='illustration-section-01'/>   
        <ReviewPanels />
    </>
    );
}

export default WalletReviews;
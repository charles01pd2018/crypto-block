import React from 'react';
import { Helmet } from "react-helmet";

// sections
import Hero from '../components/sections/pages/terms/Hero';
import GenericSection from '../components/sections/GenericSection';


const Terms = () => {

    const termsText = (
        <p className='text-sm'> 
            <u className='fw-600'>Introduction</u>
            <br />
                Crypto Block is an online educational website about Blockchain and Cryptocurrency. The following are the Terms of Service for the Crypto Block website.
            <br />
            <br />
            <u className='fw-600'>Information Provided</u>
            <br />
                All content supplied to the Crypto Block website is a combination of aggregated information and opinions of the writers. 
                Although we will conduct due diligence on our research, we cannot 100% guarantee that all information provided will be timely or accurate. 
                We recommend all users of the Crypto Block website to conduct outside research from a number of sources in order to seek out their desired content/knowledge.  
            <br />
            <br />
            <u className='fw-600'>Not Financial Advice</u>
            <br />
                Any information obtained from the Crypto Block website should not be treated as financial advice. 
                Investment decisions made by users of the Crypto Block website will take full responsibility for their own actions.
            <br />
            <br />
            <u className='fw-600'>Privacy Policy</u>
            <br />
            As of right now, we do not collect any data from visitors of the Crypto Block website. We will update our privacy policy in the event that this changes.
            <br />
            <br />
            Any external links that redirect to websites outside of the Crypto Block domain will have their own separate Privacy Policy. These external websites may collect browser cookies data on top of any information you supply to the external website. We take no responsibility for any data collection that takes place outside of the Crypto Block domain. 
            <br />
            <br />
            Our affiliate software, <a href='https://impact.com/'><u>Impact</u></a>, does allow us to view data related to our affiliate links. Note that we do not collect this data, but rather the Impact software provides us information so that our affiliate partners can compensate us appropriately. This information is not personally identifiable, and Crypto Block only gets to see a broad overview of the numbers. The data provided includes: 
            <br />
            <br />
            <ul>
                <li>
                Number of clicks on the affiliate link.
                </li>
                <li>
                Number of actions taken on our affiliate partner’s website. 
                </li>
                <li>
                Amount of money spent on our affiliate partner’s website.
                </li>
            </ul>
        </p>
    );

    return (
        <>
            <Helmet>
                <meta name="description" content="Crypto Block Terms of Service" /> 
                <title>Terms: Crypto Block</title>
            </Helmet>

            <Hero bottomDivider />
            <GenericSection children={termsText}/>
        </>
    );

}

export default Terms;
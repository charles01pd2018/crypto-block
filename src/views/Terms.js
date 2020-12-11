import React from 'react';

// sections
import Hero from '../components/sections/pages/terms/Hero';
import GenericSection from '../components/sections/GenericSection';


const Terms = () => {

    const termsText = (
        <p className='text-sm'> These are going to be terms of service yeehaw  </p>
    );

    return (
        <>
            <Hero bottomDivider />
            <GenericSection children={termsText}/>
        </>
    )

}

export default Terms;
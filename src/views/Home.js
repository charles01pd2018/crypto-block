import React from 'react';
import { Helmet } from "react-helmet";

// sections
import Hero from '../components/sections/pages/home/Hero';
import FeaturesTiles from '../components/sections/pages/home/FeaturesTiles';
import FeaturesSplit from '../components/sections/pages/home/FeaturesSplit';


const Home = () => {

  return (
    <>
      <Helmet>
        <meta name="description" content="Learn what's possible in cryptocurrency. Discover the best cryptocurrency exchanges." /> 
        <title>Cryptocurrency: learn what's possible</title>
      </Helmet>

      <Hero className="illustration-section-01" />
      <FeaturesTiles bottomDivider border />
      <FeaturesSplit invertMobile imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;
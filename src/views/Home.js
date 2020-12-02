import React from 'react';

// sections
import Hero from '../components/sections/pages/home/Hero';
import FeaturesTiles from '../components/sections/pages/home/FeaturesTiles';
import FeaturesSplit from '../components/sections/pages/home/FeaturesSplit';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles bottomDivider/>
      <FeaturesSplit invertMobile imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;
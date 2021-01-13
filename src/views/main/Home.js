import React from 'react';
import { Helmet } from "react-helmet";

// sections
import { Hero, FeaturesTiles, FeaturesSplit } from '../../components/sections/pages/main/home';


const Home = () => {

  return (
    <>
      <Helmet>
        <meta name="description" content="Learn what's possible in cryptocurrency. Discover the best cryptocurrency exchanges and hardware wallets." /> 
        <title>Cryptocurrency: learn what's possible</title>
      </Helmet>

      <Hero className="illustration-section-01" />
      <FeaturesTiles bottomDivider border tileLink/>
      <FeaturesSplit invertMobile className="illustration-section-02" />
    </>
  );
}

export default Home;
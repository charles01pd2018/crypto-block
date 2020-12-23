import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// utils
import { ScrollToTop, AppRoute, ScrollReveal } from'./utils/route';

// layouts
import LayoutDefault from './layouts/LayoutDefault';

// views 
import { About, Home } from './views/main';
import { Contact, NotFoundPage, Terms } from './views/secondary';

import { Reviews, ExchangeReviews, WalletReviews } from './views/reviews';

import { Learn } from './views/learn';
import { LearnBitcoin, WhatIsBitcoin, WhyIsBitcoinValuable, WhatIsBitcoinNetwork } from './views/learn/bitcoin';
import { LearnCrypto, WhatIsCrypto } from './views/learn/crypto';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <ScrollToTop>
          <Switch>
            <AppRoute exact path="/crypto-block" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/about" component={About} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/reviews" component={Reviews} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/reviews/exchanges" component={ExchangeReviews} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/reviews/hardware-wallets" component={WalletReviews} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/learn" component={Learn} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/learn/bitcoin" component={LearnBitcoin} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/learn/bitcoin/what-is-bitcoin" component={WhatIsBitcoin} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/learn/bitcoin/why-is-bitcoin-valuable" component={WhyIsBitcoinValuable} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/learn/bitcoin/what-is-the-bitcoin-network" component={WhatIsBitcoinNetwork} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/learn/cryptocurrency" component={LearnCrypto} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/learn/cryptocurrency/what-is-cryptocurrency" component={WhatIsCrypto} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/contact" component={Contact} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/terms" component={Terms} layout={LayoutDefault} />

            <AppRoute path="*" component={NotFoundPage} layout={LayoutDefault} />
          </Switch>
        </ScrollToTop>
      )} />
  );
}

export default App;
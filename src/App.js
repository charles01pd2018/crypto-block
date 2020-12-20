import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// utils
import { ScrollToTop, AppRoute, ScrollReveal } from'./utils/route';

// layouts
import LayoutDefault from './layouts/LayoutDefault';

// views 
import { About, Home } from './views/main';
import { ExchangeReviews, WalletReviews } from './views/reviews';
import { Contact, NotFoundPage, Terms } from './views/secondary';
import { WhatIsBTC } from './views/learn/bitcoin';


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

            <AppRoute exact path="/crypto-block/reviews/exchanges" component={ExchangeReviews} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/reviews/hardware-wallets" component={WalletReviews} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/learn/what-is-bitcoin" component={WhatIsBTC} layout={LayoutDefault} />

            <AppRoute exact path="/crypto-block/contact" component={Contact} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/terms" component={Terms} layout={LayoutDefault} />

            <AppRoute path="*" component={NotFoundPage} layout={LayoutDefault} />
          </Switch>
        </ScrollToTop>
      )} />
  );
}

export default App;
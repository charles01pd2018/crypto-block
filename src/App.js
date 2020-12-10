import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// utils
import ScrollToTop from './utils/ScrollToTop';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// layouts
import LayoutDefault from './layouts/LayoutDefault';

// views 
import Home from './views/Home';
import About from './views/About';
import Reviews from './views/Reviews';


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
            <AppRoute exact path="/crypto-block/" component={Home} layout={LayoutDefault} />
            
            <AppRoute exact path="/crypto-block/about" component={About} layout={LayoutDefault} />
            <AppRoute exact path="/crypto-block/reviews" component={Reviews} layout={LayoutDefault} />
          </Switch>
        </ScrollToTop>
      )} />
  );
}

export default App;
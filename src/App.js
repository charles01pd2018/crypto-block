import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// utils
import { ScrollToTop, ScrollReveal } from'./utils';

// routes
import Routes from './Routes';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = ({
  history
}) => {

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
    <ScrollReveal ref={childRef} children={ () => (
        <ScrollToTop history={history} >
          <Routes />
        </ScrollToTop>
      ) } />
  );
}

export default App;
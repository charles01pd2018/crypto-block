import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// route paths
import RoutePaths from './RoutePaths';


const SitemapRoutes = (
  <BrowserRouter>
    <Switch>
        { RoutePaths.map ( ([ routePath, view ]) => (
          <Route path={routePath} /> ) ) 
        }
        <Route />
    </Switch>
    </BrowserRouter>
);

export default SitemapRoutes;

import React from 'react';
import { Route } from 'react-router-dom';

// route paths
import RoutePaths from './RoutePaths';


const SitemapRoutes = (
    <Route>
        { RoutePaths.map ( ([ routePath, view ]) => (
          <Route path={routePath} /> ) ) 
        }
    </Route>
);

export default SitemapRoutes;

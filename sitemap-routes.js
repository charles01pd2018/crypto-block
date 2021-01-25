import React from 'react';
import { Route } from 'react-router-dom';

// route paths
import RoutePaths from "./src/views/RoutePaths";

export default (
    <Route>
         {
            RoutePaths.map( ( [ routePath, view ] ) => (
                <Route exact path={routePath}  /> )) 
            }
    </Route>
);
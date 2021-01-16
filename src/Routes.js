import React from 'react';
import { Switch } from 'react-router-dom';

// utils
import { AppRoute } from './utils/route';

// layouts
import LayoutDefault from './layouts/LayoutDefault';

// route paths
import RoutePaths from "./views/RoutePaths";


const Routes = () => {

    return (
        <Switch>
            {
            RoutePaths.map( ( [ routePath, view ] ) => (
                <AppRoute exact path={routePath} component={view} layout={LayoutDefault} />
            )) }
          </Switch>
    );
}

export default Routes;
import React from 'react';
import { Switch } from 'react-router-dom';

// utils
import { AppRoute } from './utils/route';

// layouts
import LayoutDefault from './layouts/LayoutDefault';

// views 
import { About, Home } from './views/main';
import { Contact, NotFoundPage, Terms } from './views/secondary';

import { Reviews, ExchangeReviews, WalletReviews } from './views/reviews';

import { Learn } from './views/learn';
import { LearnBitcoin, WhatIsBitcoin, WhyIsBitcoinValuable, WhatIsBitcoinNetwork } from './views/learn/bitcoin';
import { LearnCrypto, WhatIsCrypto } from './views/learn/crypto';


const Routes = () => {

    return (
        <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/about" component={About} layout={LayoutDefault} />

            <AppRoute exact path="/reviews" component={Reviews} layout={LayoutDefault} />
            <AppRoute exact path="/reviews/exchanges" component={ExchangeReviews} layout={LayoutDefault} />
            <AppRoute exact path="/reviews/hardware-wallets" component={WalletReviews} layout={LayoutDefault} />

            <AppRoute exact path="/learn" component={Learn} layout={LayoutDefault} />

            <AppRoute exact path="/learn/bitcoin" component={LearnBitcoin} layout={LayoutDefault} />
            <AppRoute exact path="/learn/bitcoin/what-is-bitcoin" component={WhatIsBitcoin} layout={LayoutDefault} />
            <AppRoute exact path="/learn/bitcoin/why-is-bitcoin-valuable" component={WhyIsBitcoinValuable} layout={LayoutDefault} />
            <AppRoute exact path="/learn/bitcoin/what-is-the-bitcoin-network" component={WhatIsBitcoinNetwork} layout={LayoutDefault} />

            <AppRoute exact path="/learn/cryptocurrency" component={LearnCrypto} layout={LayoutDefault} />
            <AppRoute exact path="/learn/cryptocurrency/what-is-cryptocurrency" component={WhatIsCrypto} layout={LayoutDefault} />

            <AppRoute exact path="/contact" component={Contact} layout={LayoutDefault} />
            <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />

            <AppRoute path="*" component={NotFoundPage} layout={LayoutDefault} />
          </Switch>
    );
}

export default Routes;
// views 
import { About, Home } from './main';
import { Contact, NotFoundPage, Terms } from './secondary';

import { Reviews, ExchangeReviews, WalletReviews } from './reviews';

import { Learn } from './learn';
import { LearnBitcoin, WhatIsBitcoin, WhyIsBitcoinValuable, WhatIsBitcoinNetwork } from './learn/bitcoin';
import { LearnCrypto, WhatIsCrypto } from './learn/crypto';


const RoutePaths = [
    [ "/", Home ],
    [ "/about", About ],
    
    [ "/reviews", Reviews ],
    [ "/reviews/exchanges", ExchangeReviews ],
    [ "/reviews/hardware-wallets", WalletReviews ],

    [ "/learn", Learn ],

    [ "/learn/bitcoin", LearnBitcoin ],
    [ "/learn/bitcoin/what-is-bitcoin", WhatIsBitcoin ],
    [ "/learn/bitcoin/why-is-bitcoin-valuable", WhyIsBitcoinValuable ],
    [ "/learn/bitcoin/what-is-the-bitcoin-network", WhatIsBitcoinNetwork ],
    
    [ "/learn/cryptocurrency", LearnCrypto ],
    [ "/learn/cryptocurrency/what-is-cryptocurrency", WhatIsCrypto ],

    [ "/contact", Contact ],
    [ "/terms", Terms ],

    [ "*", NotFoundPage ]
];

export default RoutePaths;
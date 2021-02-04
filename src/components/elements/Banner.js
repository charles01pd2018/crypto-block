import React, { useState, useEffect } from 'react';
import axios from 'axios';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';

// data fetching
import { GetTokenPriceURL } from '../../data/tokens';
import { Bars } from '@agney/react-loading';


const propTypes = {
  children: PropTypes.node,
  tokenSymbol: PropTypes.string
}

const defaultProps = {
  children: null,
  tokenSymbol: 'bitcoin'
}

const Banner = ({
  className,
  children,
  tokenSymbol,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    className
  );

  const innerClasses = classNames(
    'banner-inner',
  );
  
  const [tokenPriceData, setTokenPriceData] = useState(null);

  const getTokenPriceData = async () => {
    axios.get( GetTokenPriceURL(tokenSymbol) )
      .then( response => {
        const data = response.data.bitcoin;
        setTokenPriceData(data);
      })
      .catch( error => {
        setTokenPriceData(0);
      });
  }

  const handleFetchTokenPrice = ( valueType ) => {
    if (tokenPriceData === null) return ( <Bars width="28" /> );
    else if (tokenPriceData === 0) return '...Error...';
    else return tokenPriceData[ valueType ];
  }

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const roundNumber = (num, decimalPlaces) => {
    return ( Math.round(num * 100) / 100 ).toFixed(decimalPlaces);
  }

  useEffect( () => {
    getTokenPriceData();
    console.log(tokenPriceData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="banner">
        <div className={innerClasses}>
          {children}

          <div className='banner-item'>
          <span>24hr Change</span>
            <span className='fw-600 banner-value text-color-secondary'>
            { roundNumber( handleFetchTokenPrice('usd_24h_change'), 2 ) }%
            </span>
          </div>

          <div className='banner-item'>
          <span>BTC Market Cap:</span>
            <span className='fw-600 banner-value text-color-secondary'>
            ${ numberWithCommas( roundNumber(handleFetchTokenPrice( 'usd_market_cap' ), 0 )) }
            </span>
          </div>

          <div className='banner-item'>
          <span>BTC Price:</span>
            <span className='fw-600 banner-value text-color-secondary'>
            ${ numberWithCommas(handleFetchTokenPrice( 'usd' )) }
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
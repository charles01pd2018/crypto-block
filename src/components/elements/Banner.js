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

  const [tokenPriceData, setTokenPriceData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePercentChange = () => {
    let percentChange = tokenPriceData?.usd_24h_change;
    if (percentChange === 0)  return 0;
    else if (percentChange > 0) return 1;
    else if (percentChange < 0) return -1;
  }

  const outerClasses = classNames(
    'section',
    className
  );

  const innerClasses = classNames(
    'banner-inner',
  );

  const bannerValueClasses = classNames(
    'fw-600 banner-value',
    handlePercentChange() === 1 && 'text-color-secondary',
    handlePercentChange() === -1 && 'negative'
  );

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
    if (tokenPriceData === 0) return '...Error...';
    else return tokenPriceData[ valueType ];
  }

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const roundNumber = (num, decimalPlaces) => {
    return ( Math.round(num * 100) / 100 ).toFixed(decimalPlaces);
  }

  const handleWindowWidthChange = () => {
    setWindowWidth(window.innerWidth);
  }

  const isDesktop = () => {
    if ( windowWidth > 1024 ) return true;
    return false;
  }

  useEffect( () => {
    getTokenPriceData();
    window.addEventListener('resize', handleWindowWidthChange);
    return () => {
      window.removeEventListener('resize', handleWindowWidthChange)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      { isDesktop() ? (
      <div className="banner">
        <div className={innerClasses}>
          {children}

          <div className='banner-item'>
          <span>24hr Change</span>
            <span className={bannerValueClasses}>
            { tokenPriceData === null ? 
             <Bars width="28" /> : 
             roundNumber( handleFetchTokenPrice('usd_24h_change'), 2 ) }%
            </span>
          </div>

          <div className='banner-item'>
          <span>BTC Market Cap:</span>
            <span className={bannerValueClasses}>
            ${ tokenPriceData === null ? 
              <Bars width="28" /> : 
              numberWithCommas( roundNumber(handleFetchTokenPrice( 'usd_market_cap' ), 0 )) }
            </span>
          </div>

          <div className='banner-item'>
          <span>BTC Price:</span>
            <span className={bannerValueClasses}>
            ${ tokenPriceData === null ? 
              <Bars width="28" /> : 
              numberWithCommas(handleFetchTokenPrice( 'usd' )) }
            </span>
          </div>

        </div>
      </div>
      )
      : (null)
    }
    </section>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
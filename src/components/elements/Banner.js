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
}

const defaultProps = {
  children: null,
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
    axios.get( GetTokenPriceURL() )
      .then( response => {
        const data = response.data.bitcoin;
        setTokenPriceData(data);
        console.log(data)
      })
      .catch( error => {
        setTokenPriceData(null);
        console.log(error);
      });
  }

  const handleFetchTokenPrice = () => {
    if (tokenPriceData === null) return ( <Bars width="28" /> );
    else return `$${tokenPriceData.usd}`;
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
          <span>BTC:</span>
            <span className='fw-600 banner-value'>
            { handleFetchTokenPrice() }
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
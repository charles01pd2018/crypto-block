import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';

// data fetching
import { GetTokenPriceURL } from '../../data/tokens';


const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {
  children: null,
}

const Banner = ({
  className,
  children,
  price,
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
        const data = response.data;
        setTokenPriceData(data.bitcoin);
        console.log(data.bitcoin);
      })
      .catch( error => {
        setTokenPriceData(null);
        console.log(error);
      });
  }

  useEffect( () => {
    getTokenPriceData();
    console.log(tokenPriceData);
  }, [] );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="banner">
        <div className={innerClasses}>
          {children}
          <span className='fw-600'>{price}</span>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
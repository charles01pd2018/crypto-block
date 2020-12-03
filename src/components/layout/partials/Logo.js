import React from 'react';

// typess
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// elements
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/crypto-block">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={60}
            height={60} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
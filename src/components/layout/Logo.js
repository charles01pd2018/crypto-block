import React from 'react';

// dependencies
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// elements
import { Image } from '../elements';

const Logo = ({
  className,
  onClick,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../assets/images/logo.svg')}
            alt="crypto-block-logo"
            width={60}
            height={60} 
            onClick={onClick} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
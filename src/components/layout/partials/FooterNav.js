import React from 'react';

// types
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/crypto-block/about">About</Link>
        </li>
        <li>
          <Link to="/crypto-block/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
import React from 'react';

// types
import PropTypes from 'prop-types';
import classNames from 'classnames';


const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {
  children: null,
}

const Banner = ({
  className,
  children,
  ...props
}) => {

  const outerClasses = classNames(
    'banner',
    className
  );

  const innerClasses = classNames(
    'section-inner',
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {children}
          fdafsd
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
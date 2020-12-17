import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../../utils/SectionProps';
import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">

            <h1 className="mt-0 mb-16">
              Uh Oh!
            </h1>
            
            <div className="container-xs">
              <p className="m-0 mb-32">
                it looks like the page you are searching for does not exist :-(
              </p>
            </div>
            
            <Link to="/crypto-block" >
              <p className='text-color-secondary fw-600'>Click Here to Return Home!</p>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
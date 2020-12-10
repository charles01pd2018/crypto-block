import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../utils/SectionProps';
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
      <div className="container-xs">
        <div className={innerClasses}>
          <div className="hero-content">

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-secondary">Best <span className='text-color-primary'>Cryptocurrency</span> Exchanges</span>
            </h1>

            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Discover the best and most trusted cryptocurrency exchanges. Compare offers to get the best deals and transaction rates.
            </p>

            <Link>
              <p className="m-0 mb-16 reveal-from-bottom text-xs text-color-primary" data-reveal-delay="600">
                  Advertising Disclosure
              </p>
            </Link>

            <p className="m-0 reveal-from-bottom text-sm" data-reveal-delay="600">
                  Updated ____ 
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
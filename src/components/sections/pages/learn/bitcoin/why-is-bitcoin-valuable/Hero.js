import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../../../utils/SectionProps';


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

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Why is <span className="text-color-primary">Bitcoin</span> Valuable?
            </h1>
            
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                learn what bitcoin accomplishes
              </p>
            </div>

            <p className="m-0 reveal-from-bottom text-sm" data-reveal-delay="600">
                <time className='text-xs fw-600' dateTime="2021-01-10">Updated January 10, 2021</time>
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
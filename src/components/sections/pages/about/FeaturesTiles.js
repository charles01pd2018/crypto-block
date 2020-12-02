import React from 'react';

// types
import classNames from 'classnames';
import { SectionTilesProps } from '../../../../utils/SectionProps';

// elements
import Image from '../../../elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className='container feature-tiles'>
        <div className={innerClasses}>

          <div className='section-inner center-content'>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Our Values
            </h1>
          </div>

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Time
                    </h4>
                  <p className="m-0 text-sm">
                    Financial Literacy gives people the time to do what they want to do. Spend time with loved ones. Play video games. Give back to communities. Anything you are passionate about! 
                  </p>
                </div>
              </div>
            </div>
          
          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Equal Opportunity
                  </h4>
                  <p className="m-0 text-sm">
                    Decentralized Finance is creating a new economic system backed by trust. It is giving everyone access to financial resources and opportunities not previously seen. <b>We want to make you aware of these new developments so you can take advantage of them</b>.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Learn
                  </h4>
                  <p className="m-0 text-sm">
                    We believe in constantly learning new things and accepting new ideas. The only way to know if something is better is to challenge traditional methods of thinking and try out new things!  
                  </p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
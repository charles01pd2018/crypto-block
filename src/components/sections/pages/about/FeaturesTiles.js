import React from 'react';

// types
import classNames from 'classnames';
import { SectionTilesProps } from '../../../../utils/SectionProps';

// elements
import SectionHeader from '../../partials/SectionHeader';


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
  border,
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

  const tilesItemClasses = classNames(
    'tiles-item reveal-from-bottom',
    border && 'border'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className='container feature-tiles'>
        <div className={innerClasses}>

          <SectionHeader data={ {title: 'Our Values'} } className='center-content' />

          <div className={tilesClasses}>

            <div className={tilesItemClasses}>
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    Time
                  </h4>
                </div>

                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    Financial Literacy gives people the time to do what they want to do. Spend time with loved ones. Play video games. Give back to communities. Anything you are passionate about! 
                  </p>
                </div>
              </div>
            </div>
          
          <div className={tilesItemClasses}>
              <div className="tiles-item-inner">
                
                <div className="features-tiles-item-header">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    Equal Opportunity
                  </h4>
                </div>

                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    Decentralized Finance is creating a new economic system backed by trust. It is giving everyone access to financial resources and opportunities not previously seen. <b>We want to make you aware of these new developments so you can take advantage of them</b>.
                  </p>
                </div>
              </div>
            </div>

            <div className={tilesItemClasses}>
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    Learn
                  </h4>
                </div>

                <div className="features-tiles-item-content">
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
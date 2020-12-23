import React from 'react';
import { Link } from 'react-router-dom';

// types
import classNames from 'classnames';
import { SectionTilesProps } from '../../../../../utils/SectionProps';

// elements
import { Image } from '../../../../elements';


const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const LearnCryptoTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  border,
  tileLink,
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
    border && 'border',
    tileLink && 'tile-link'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className='container feature-tiles'>
        <div className={innerClasses}>
          <div className={tilesClasses}>

          <Link to='/crypto-block/learn/cryptocurrency/what-is-cryptocurrency'>
            <div className={tilesItemClasses} style={{height: '190px'}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    What is Cryptocurrency?
                  </h4>
                  <p className="m-0 text-sm">
                    Learn what cryptocurrency is and its use cases
                  </p>
                </div>
              </div>
            </div>
          </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
}

LearnCryptoTiles.propTypes = propTypes;
LearnCryptoTiles.defaultProps = defaultProps;

export default LearnCryptoTiles;
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

const LearnBitcoinTiles = ({
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

          <Link to='/learn/bitcoin/what-is-bitcoin'>
            <div className={tilesItemClasses} style={{height: '190px'}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    What is Bitcoin?
                  </h4>
                  <p className="m-0 text-sm">
                    Learn the basics of bitcoin 
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/learn/bitcoin/why-is-bitcoin-valuable'>
            <div className={tilesItemClasses} style={{height: '190px'}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    Why is Bitcoin Valuable?
                  </h4>
                  <p className="m-0 text-sm">
                    Learn what bitcoin accomplishes
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/learn/bitcoin/what-is-the-bitcoin-network'>
            <div className={tilesItemClasses} style={{height: '190px'}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../../../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 text-color-secondary">
                    What is the Bitcoin Network?
                  </h4>
                  <p className="m-0 text-sm">
                    Learn the technology behind bitcoin
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

LearnBitcoinTiles.propTypes = propTypes;
LearnBitcoinTiles.defaultProps = defaultProps;

export default LearnBitcoinTiles;
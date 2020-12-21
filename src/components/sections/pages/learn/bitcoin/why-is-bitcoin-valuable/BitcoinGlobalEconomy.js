import React from 'react';

// types
import classNames from 'classnames';
import { SectionSplitProps } from '../../../../../../utils/SectionProps';

// elements
import { Image } from '../../../../../elements';
import SectionHeader from '../../../../partials/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const BitcoinGlobalEconomy = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>

        <SectionHeader data={{title: 'Powering the Global Economy'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div></div>
            <p className='fw-600 center-content mt-32'>Bitcoin payments have no boundaries and span the global economy.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Global Reserve Currency
                </h3>
         
                <p className="m-0">
                    Bitcoin could potentially be used as the standard for our global economy to compare its currency to. Right now, many countries compare its respective currency to the US dollar. However, a non-binding global standard for monetary value could potentially create a higher degree of global economic stability.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-global-economy/bitcoin-global-reserve-currency.svg')}
                  alt="Bitcoin Global Reserve Currency"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

BitcoinGlobalEconomy.propTypes = propTypes;
BitcoinGlobalEconomy.defaultProps = defaultProps;

export default BitcoinGlobalEconomy;
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

const BitcoinTokenomics = ({
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

        <SectionHeader data={{title: 'Bitcoin Tokenomics'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div></div>
            <p className='fw-600 center-content mt-32'>Bitcoin is “created” and released into circulating supply at a steady rate.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Steady Supply Increase
                </h3>
         
                <p className="m-0">
                    Bitcoin supply grows at an expected rate and can be tracked based on the blockchain data. Compare this to fiat currency, which can be “printed” at any time. Or gold, which is difficult to determine the amount that will be mined in any given year.                 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-tokenomics/bitcoin-steady-supply.svg')}
                  alt="Bitcoin Steady Supply"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Bitcoin Total Supply
                </h3>
         
                <p className="m-0">
                    As of right now, there are around 18.5 million Bitcoins. Following Bitcoin’s current rule book, at approximately year 2140, there will only ever be 21 million Bitcoins in existence.                 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-tokenomics/bitcoin-total-supply.svg')}
                  alt="Bitcoin Total Supply"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Programmed Scarcity
                </h3>
         
                <p className="m-0">
                    Approximately every 4 years, the amount of Bitcoin set to be “created” and released into circulation is cut in half (called the bitcoin halvening). This means that Bitcoin will become increasingly scarce over time.                 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-tokenomics/bitcoin-programmed-scarcity.svg')}
                  alt="Bitcoin Programmed Scarcity"
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

BitcoinTokenomics.propTypes = propTypes;
BitcoinTokenomics.defaultProps = defaultProps;

export default BitcoinTokenomics;
import React from 'react';

// types
import classNames from 'classnames';
import { SectionSplitProps } from '../../../../utils/SectionProps';

// elements
import { Image } from '../../../../../elements';
import SectionHeader from '../../../../../elements/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const BitcoinNetworkImportance = ({
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

        <SectionHeader data={{title: 'Why is the Bitcoin Network Important?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

          <div></div>
          <p className='fw-600 center-content mt-32'>The bitcoin network removes the need for financial intermediaries to process transactions. This results in a couple of things.</p>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Faster, Global Payments
                </h3>
         
                <p className="m-0">
                    You can send payments anywhere you want in typically 10 minutes!
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-network-importance/bitcoin-global-payments.svg')}
                  alt="Bitcoin Global Payments"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Lower Fees
                </h3>
                <p className="m-0">
                    You are not paying a portion of your transaction to a third-party financial provider. That means you keep more of the money you spend/receive!
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-network-importance/bitcoin-lower-fees.svg')}
                  alt="Bitcoin Lower Fees"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Accessibility
                </h3>
                <p className="m-0">
                    You have full access to your money without restrictions!
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-network-importance/bitcoin-accessibility.svg')}
                  alt="Bitcoin Accesibility"
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

BitcoinNetworkImportance.propTypes = propTypes;
BitcoinNetworkImportance.defaultProps = defaultProps;

export default BitcoinNetworkImportance;
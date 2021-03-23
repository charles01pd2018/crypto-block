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

const BitcoinStoreValue = ({
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

        <SectionHeader data={{title: 'Bitcoin as a Store of Value'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div></div>
            <p className='fw-600 center-content mt-32'>Bitcoin functions as a relatively reliable store of value because of its programmed qualities.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Transferable
                </h3>
         
                <p className="m-0">
                    Bitcoins can be broken down into very small units (meaning that it is not necessary to own 1 entire bitcoin) and can be easily transferred from one digital wallet to another. The smallest unit of a Bitcoin is called a satoshi, and there are 100 million satoshis in a bitcoin.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-store-value/bitcoin-small-unit.svg')}
                  alt="Bitcoin Small Unit"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Durable
                </h3>
         
                <p className="m-0">
                    Bitcoin’s cannot be destroyed or removed from the circulating supply. Compare Bitcoin to a physical dollar bill, which could potentially be destroyed.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-store-value/bitcoin-durable.svg')}
                  alt="Bitcoin Durable"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Secure
                </h3>
         
                <p className="m-0">
                    Bitcoin is powered by a decentralized network made up of devices that each store a copy of the blockchain ledger database detailing every Bitcoin transaction that has ever occurred. This system makes Bitcoin <i>secure</i> and <i>difficult to manipulate</i>.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/why-is-bitcoin-valuable/bitcoin-store-value/bitcoin-secure.svg')}
                  alt="Bitcoin Secure"
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

BitcoinStoreValue.propTypes = propTypes;
BitcoinStoreValue.defaultProps = defaultProps;

export default BitcoinStoreValue;
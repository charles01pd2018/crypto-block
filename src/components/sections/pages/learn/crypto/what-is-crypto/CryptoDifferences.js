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

const CryptoDifferences = ({
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

        <SectionHeader data={{title: 'How is Cryptocurrency Different Than Traditional Money?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div></div>
            <p className='fw-600 center-content mt-32'>Cryptocurrencies are digital by design, meaning that they have some unique qualities.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Instant Payments
                </h3>
         
                <p className="m-0">
                    Transactions using fiat (traditional currency) can take anywhere from 1-3 business days. Because cryptocurrency transactions are automated, payments of cryptocurrency typically take less than 10 minutes and run 24/7! 
                 </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-differences/crypto-instant-payments.svg')}
                  alt="Crypto Instant Payments"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Methodology
                </h3>
         
                <p className="m-0">
                    Cryptocurrency utilizes blockchain technology to store and manage transactions. This system is typically referred to as a distributed ledger system, since the transactions are stored amongst network participants and the data storage method resembles an online version of a bookkeeping ledger.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-differences/crypto-methodology.svg')}
                  alt="Crypto Methodology"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Decentralized Design
                </h3>
         
                <p className="m-0">
                    Anyone could potentially get involved in cryptocurrency networks, or create their own! This removes many financial barriers posed by our current system, enabling more opportunity for everyone. Decentralization also leads to increased transparency, efficiency, and security.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-differences/crypto-decentralized.svg')}
                  alt="Crypto Decententralized"
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

CryptoDifferences.propTypes = propTypes;
CryptoDifferences.defaultProps = defaultProps;

export default CryptoDifferences;
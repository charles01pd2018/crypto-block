import React from 'react';

// types
import classNames from 'classnames';
import { SectionSplitProps } from '../../../../utils/SectionProps';

// elements
import { Image } from '../../../../../elements';
import SectionHeader from '../../../../partials/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const CryptoUseCases = ({
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

        <SectionHeader data={{title: 'What Are Cryptocurrencies Used For?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Investment
                </h3>
         
                <p className="m-0">
                    Cryptocurrency can be viewed as a worthwhile investment for those more risk tolerant. It is important to research the potential value in the cryptocurrency you are considering investing in. This can include adoption of the cryptocurrency, cryptocurrency network usage, cryptocurrency price technicals, etc.                
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-use-cases/crypto-investment.svg')}
                  alt="Crypto Investment"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Self Storage of Money
                </h3>
         
                <p className="m-0">
                    Cryptocurrencies enable you to be your own bank and gives you the option to self-host your own money. If you choose to do so, make sure to take proper security precautions and use good practice when storing your digital assets.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-use-cases/crypto-self-storage.svg')}
                  alt="Crypto Self Storage"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    New Financial Applications
                </h3>
         
                <p className="m-0">
                    New financial applications are being created rapidly thanks to the technologies supporting cryptocurrencies. As cryptocurrency becomes more widely adopted, additional use cases are bound to surface, driven by innovative companies!
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-use-cases/crypto-financial-applications.svg')}
                  alt="Crypto Financial Applications"
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

CryptoUseCases.propTypes = propTypes;
CryptoUseCases.defaultProps = defaultProps;

export default CryptoUseCases;
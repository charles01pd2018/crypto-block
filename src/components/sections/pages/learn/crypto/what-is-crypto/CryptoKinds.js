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

const CryptoKinds = ({
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

        <SectionHeader data={{title: 'What are the Different Kinds of Cryptocurrency?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Value Tokens
                </h3>
         
                <p className="m-0">
                    Value tokens are intended to hold some sort of intrinsic value, whether it be a reserve asset (like Bitcoin) or used similarly to a traditional currency as a medium of exchange.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-kinds/crypto-value-tokens.svg')}
                  alt="Crypto Value Tokens"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Stablecoins
                </h3>
         
                <p className="m-0">
                    Stablecoins are price stable tokens meant to track an underlying asset. This means the price of the stablecoin will follow whatever the price of the underlying asset is. The most common example are stablecoins that track the US dollar, where 1 stablecoin attempts to equal exactly $1 (examples include USDC and DAI).                 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-kinds/crypto-stablecoins.svg')}
                  alt="Crypto Stablecoins"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Utility Tokens
                </h3>
         
                <p className="m-0">
                    Utility tokens are used to transact value within a cryptocurrency network. You can think of utility tokens similar to in-game currencies. Both utility tokens and in-game currencies are methods of getting involved in your respective community.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-kinds/crypto-utility-tokens.svg')}
                  alt="Crypto Utility Tokens"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <h3 className="mb-12 text-color-secondary">
                        Governance Tokens
                    </h3>

                    <p className="m-0">
                        Governance tokens are used to vote in a cryptocurrency network. Because cryptocurrency networks are decentralized, proposed changes typically need agreement from community members within the network. This is where governance tokens come in, giving network participants a standardized method to propose changes and vote on changes.
                    </p>
                </div>

                <div className={
                    classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                    src={require('./../../../../../../assets/images/pages/learn/crypto/what-is-crypto/crypto-kinds/crypto-governance-tokens.svg')}
                    alt="Crypto Governance Tokens"
                    width={528}
                    height={396} />
                </div>
            </div>

            <p className='mt-32 text-xs'>*This list is not exhaustive (and more kinds of tokens may be invented over time), but it should give you a general sense of the different applications cryptocurrency can have!</p>

          </div>
        </div>
      </div>
    </section>
  );
}

CryptoKinds.propTypes = propTypes;
CryptoKinds.defaultProps = defaultProps;

export default CryptoKinds;
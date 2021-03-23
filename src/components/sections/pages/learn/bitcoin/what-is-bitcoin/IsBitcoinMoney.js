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

const IsBitcoinMoney = ({
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

        <SectionHeader data={{title: 'Is Bitcoin Money?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
         
                <p className="m-0">
                    Bitcoin isn’t money in the traditional sense because it is not regulated by a centralized governing authority. In fact, no single person has control over the supply or protocol of Bitcoin. Compare this to the US dollar, which is backed and governed by the Federal Reserve, giving them direct oversight into USD monetary policy.                
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin/is-bitcoin-money/bitcoin-money.svg')}
                  alt="Bitcoin Money"
                  width={528}
                  height={396} />
              </div>
            </div>

            <p className='fw-600 center-content mt-32'>However, bitcoin does have properties that make it comparable to traditional money.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Payments
                </h3>
                <p className="m-0">
                    Bitcoin can be transferred from one person to another person. For example, you could send a specified amount of BTC (short for Bitcoin) to a friend.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin/is-bitcoin-money/bitcoin-transfer.svg')}
                  alt="Bitcoin Transfer"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Monetary Value
                </h3>
                <p className="m-0">
                    Bitcoin holds a relative amount of monetary value that <i>could</i> be used at time of exchange. For example, let's say 1 BTC is valued at $23,700 (around the current value at the time of this writing). This means you can buy $23,700 worth of goods with your 1 BTC.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin/is-bitcoin-money/bitcoin-buy.svg')}
                  alt="Bitcoin Buy"
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

IsBitcoinMoney.propTypes = propTypes;
IsBitcoinMoney.defaultProps = defaultProps;

export default IsBitcoinMoney;
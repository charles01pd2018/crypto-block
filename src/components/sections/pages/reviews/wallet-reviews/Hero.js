import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../../utils/SectionProps';

// elements
import { Modal } from '../../../../elements';

// objects
import { advertisingModalTrigger, advertisingDiclosureText } from '../objects/AdvertisingDisclosure';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const explanationModalTrigger = (
      <p className="m-0 reveal-from-bottom text-xs text-color-secondary" data-reveal-delay="600">
          What Are Hardware Wallets?
      </p>
  );

  const cryptoExchangeExplanation = (
    <p className='text-xs'>
      Cryptocurrency exchanges are your outlet to buy and sell digital assets. This can be done through either fiat currency or other digital assets. 
      <br/><br/>
      This can take the form of the following:
      <br/>
      <br/>
      <ul>
        <li>
        Buy cryptocurrency in exchange for USD.
        </li>
        <li>
        Sell cryptocurrency in exchange for USD.
        </li>
        <li>
        Buy cryptocurrency in exchange for a different cryptocurrency.
        </li>
        <li>
        Sell cryptocurrency in exchange for a different cryptocurrency.
        </li>
      </ul>
      <br/>
      *Additionally, owned cryptocurrency can be transferred between different digital wallets.
      </p>
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-xs">
        <div className={innerClasses}>
          <div className="hero-content">

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-secondary">Best <span className='text-color-primary'>Cryptocurrency</span> Hardware Wallets in USA</span>
            </h1>

            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Buy <span className='text-color-secondary'>Bitcoin</span>, <span className='text-color-secondary'>Ethereum</span>, and more. Discover the best and most trusted cryptocurrency exchanges. Compare offers to get the best deals and transaction rates.
            </p>

            <Modal trigger={advertisingModalTrigger} title='Advertising Disclosure' textContent={advertisingDiclosureText}/>
            
            <p className="m-0 reveal-from-bottom text-sm" data-reveal-delay="600">
                  <time className='text-xs fw-600' dateTime="2020-12-11">Updated December 11, 2020</time>
            </p>
            
            <Modal trigger={explanationModalTrigger} title='What Are Cryptocurrency Exchanges?' textContent={cryptoExchangeExplanation}/>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
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
      Cryptocurrency hardware wallets are the safest and most secure method for storing your cryptocurrency and enable you to be the one and only custodian of your digital assets. 
      Think of it as a way to be your own bank. Instead of putting your trust in financial institutions, you are taking control of your own money.
      <br/><br/>
      <u className='fw-600'>Why Hardware Wallets Are Important</u>
      <br/><br/>
      <ul>
        <li>
        Hardware wallets keep your cryptocurrency secure and offline.
        </li>
        <li>
        Cryptocurrency stored in connected online servers are prone to being hacked. Over $1.78 billion has been hacked from cryptocurrency exchanges. 
        </li>
        <li>
        A physical backup device ensures that your crypto is safe in extraneous circumstances.
        </li>
        <li>
        It’s cool :-D
        </li>
      </ul>
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
              <span className="text-color-secondary">Best <span className='text-color-primary'>Cryptocurrency Hardware Wallets</span> in USA</span>
            </h1>

            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Discover the best hardware wallets to ensure safe storage of your cryptocurrency. Keep your crypto offline to prevent hackers from getting in.            
            </p>

            <Modal trigger={advertisingModalTrigger} title='Advertising Disclosure' textContent={advertisingDiclosureText}/>
            
            <p className="m-0 reveal-from-bottom text-sm" data-reveal-delay="600">
                  <time className='text-xs fw-600' dateTime="2020-12-11">Updated December 11, 2020</time>
            </p>
            
            <Modal trigger={explanationModalTrigger} title='What Are Hardware Wallets?' textContent={cryptoExchangeExplanation}/>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
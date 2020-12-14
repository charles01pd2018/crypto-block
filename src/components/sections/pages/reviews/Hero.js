import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../utils/SectionProps';
import { Link } from 'react-router-dom';

// elements
import Modal from '../../../elements/Modal';


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

  const modalTrigger = (
    <Link to='#'>
      <p className="m-0 mb-16 reveal-from-bottom text-xs text-color-primary" data-reveal-delay="600">
          Advertising Disclosure
      </p>
    </Link>
  );

  const advertisingDiclosureText = (
    <p className='text-xs'>
      We make money through affiliate links. Here is how they generally work: 
      <br/><br/>
      If you click on one of the “Learn More” buttons and sign up for the product/service within a specified time frame, we will receive a portion of the money you spend on that product/service. This is known as a revenue share model.
      <br/><br/>
      The specified time frame and amount of compensation we receive will vary depending on how these products/services structure their program.
      <br/><br/>
      Note that even though we are financially incentivised for you to spend money on their platform, affiliate programs <b>will never</b> influence how we structure content on our website. Because most companies will offer an affiliate program to attract new customers, these programs will not play a role in our decision making process. Although some of these affiliate programs may be more attractive than others from a compensation perspective, it will not impact which companies we choose to support and advertise. It simply does not align with our mission.
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
              <span className="text-color-secondary">Best <span className='text-color-primary'>Cryptocurrency</span> Exchanges in USA</span>
            </h1>

            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Buy <span className='text-color-secondary'>Bitcoin</span>, <span className='text-color-secondary'>Ethereum</span>, and more. Discover the best and most trusted cryptocurrency exchanges. Compare offers to get the best deals and transaction rates.
            </p>

            <Modal trigger={modalTrigger} title='Advertising Disclosure' textContent={advertisingDiclosureText}/>

            <p className="m-0 reveal-from-bottom text-sm" data-reveal-delay="600">
                  <time className='text-xs fw-600' dateTime="2020-12-11">Updated December 11, 2020</time> 
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
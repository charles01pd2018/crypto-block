import React from 'react';

// types
import classNames from 'classnames';
import { SectionTilesProps } from '../../../../utils/SectionProps';

// elements
import Image from '../../../elements/Image';


const propTypes = {
    ...SectionTilesProps.types
  }
  
  const defaultProps = {
    ...SectionTilesProps.defaults
  }

const ReviewPanels = ({
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
    border,
    ...props
}) => {

    const outerClasses = classNames(
        'review-panels section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
      const innerClasses = classNames(
        'review-panels-inner section-inner pt-0',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
    
      const panelsClasses = classNames(
        'panels-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
      );

      const panelsItemClasses = classNames(
        'panels-item reveal-from-bottom section-inner',
        border && 'border'
      );


    return (
        <section
        {...props}
        className={outerClasses}
        >
            <div className='container review-panels'>
                <div className={innerClasses}>
                    <div className={panelsClasses}>

                        <div className={panelsItemClasses}>
                          <div className='panels-item-inner'>

                            <div className='panels-heading'>
                              <div className='panels-image'>
                                  <Image
                                    src={require('./../../../../assets/images//pages/reviews/exchanges/coinbase-logo.png')}
                                    alt="Image"
                                    width={150}
                                    height={150} />
                              </div>

                              <div className='panels-title-name panels-item-inner'>
                                <h2>Coinbase - <span className='text-color-secondary'>Best for Beginners</ span></ h2>
                              </div>
                            </div>
                              
                            <div className='panels-description'>
                              <div className='panels-main-description'>
                                <h3>Main Description</h3>
                                <p>Transaction Fee: <b>High</b></p>
                                <p>Transaction Fee with Credit Card: <b>3.99%</b></p>
                                <p>Transaction Fee with Bank Transfer: <b>1.49%</b></p>
                              </div>

                              <div className='panels-qualities'>
                                <h3>Qualities</h3>
                                <p># of Cryptocurrencies Available: <b>37</b></p>
                                <p>Margin Trading: <b>No</b></p>
                              </div>
                            </div>

                        </div>
                      </div>

                      <div className={panelsItemClasses}>
                        <div className='panels-item-inner'>

                          <div className='panels-heading'>
                            <div className='panels-image'>
                                <Image
                                  src={require('./../../../../assets/images//pages/reviews/exchanges/kraken-logo.png')}
                                  alt="Image"
                                  width={150}
                                  height={150} />
                            </div>

                            <div className='panels-title-name panels-item-inner'>
                              <h2>Kraken - <span className='text-color-secondary'>Best for Traders</ span></ h2>
                            </div>
                          </div>

                          <div className='panels-description'>
                            <div className='panels-main-description'>
                              <h3>Main Description</h3>
                              <p>Transaction Fee: <b>Low</b></p>
                              <p>Transaction Fee with Credit Card: <b>Unavailable</b></p>
                              <p>Transaction Fee with Bank Transfer: <b>~0.2%</b></p>
                            </div>

                            <div className='panels-qualities'>
                              <h3>Qualities</h3>
                              <p># of Cryptocurrencies Available: <b>50</b></p>
                              <p>Margin Trading: <b>Yes</b></p>
                            </div>
                          </div>
                            
                          </div>
                        </div>

                        <div className={panelsItemClasses}>
                          <div className='panels-item-inner'>

                            <div className='panels-heading'>
                              <div className='panels-image'>
                                  <Image
                                    src={require('./../../../../assets/images//pages/reviews/exchanges/cryptocom-logo.jpg')}
                                    alt="Image"
                                    width={150}
                                    height={150} />
                              </div>
                        
                              <div className='panels-title-name panels-item-inner'>
                                <h2>Crypto.com - <span className='text-color-secondary'>Best for Deal Hunters</ span></h2>
                              </div>
                            </div>

                          <div className='panels-description'>
                            <div className='panels-main-description'>
                              <h3>Main Description</h3>
                              <p>Transaction Fee: <b>Low</b></p>
                              <p>Transaction Fee with Credit Card: <b>4%</b></p>
                              <p>Transaction Fee with Bank Transfer: <b>~0.2%</b></p>
                            </div>

                            <div className='panels-qualities'>
                              <h3>Qualities</h3>
                              <p># of Cryptocurrencies Available: <b>58</b></p>
                              <p>Margin Trading: <b>No</b></p>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

ReviewPanels.propTypes = propTypes;
ReviewPanels.defaultProps = defaultProps;

export default ReviewPanels;
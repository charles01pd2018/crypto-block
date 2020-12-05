import React from 'react';

// types
import classNames from 'classnames';
import { ReviewPanelsProps } from '../../../../utils/SectionProps';

// elements
import Image from '../../../elements/Image';


const propTypes = {
    ...ReviewPanelsProps.types
  }
  
  const defaultProps = {
    ...ReviewPanelsProps.defaults
  }

const ReviewPanels = ({
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
      );

      const panelsItemClasses = classNames(
        'panels-item reveal-from-bottom section-inner',
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

                              <div className='panels-title'>
                                <div className='header-best-attribute'>
                                  <div className="text-xs text-color-secondary fw-600 tt-u">
                                    <p>Best for Beginners</p>
                                  </div>
                                </div>

                                  <div className='panels-header'>
                                    <h2>Coinbase Exchange</ h2>
                                  </div>
                              </div>
                            </div>
                              
                            <div className='panels-description'>
                              <div className='panels-main-description'>
                                <p>Transaction Fee: <b>High</b></p>
                                <p>Transaction Fee with Credit Card: <b>3.99%</b></p>
                                <p>Transaction Fee with Bank Transfer: <b>1.49%</b></p>
                              </div>

                              <div className='panels-qualities text-color-third'>
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
    
                            <div className='panels-title'>
                              <div className='header-best-attribute'>
                                <div className="text-xs text-color-secondary fw-600 tt-u">
                                  <p>Best for Traders</p>
                                </div>
                              </div>

                              <div className='panels-header'>
                                <h2>Kraken Exchange</ h2>
                              </div>
                            </div>
                          </div>

                          <div className='panels-description'>
                            <div className='panels-main-description'>
                              <p>Transaction Fee: <b>Low</b></p>
                              <p>Transaction Fee with Credit Card: <b>Unavailable</b></p>
                              <p>Transaction Fee with Bank Transfer: <b>~0.2%</b></p>
                            </div>

                            <div className='panels-qualities'>
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
                        
                              <div className='panels-title'>
                                <div className='header-best-attribute'>
                                  <div className="text-xs text-color-secondary fw-600 tt-u mb-8">
                                    <p>Best for Deal Hunters</p>
                                  </div>
                                </div>

                                <div className='panels-header'>
                                  <h2>Crypto.com Exchange</h2>
                                </div>
                              </div>
                            </div>

                          <div className='panels-description'>
                            <div className='panels-main-description'>
                              <p>Transaction Fee: <b>Low</b></p>
                              <p>Transaction Fee with Credit Card: <b>4%</b></p>
                              <p>Transaction Fee with Bank Transfer: <b>~0.2%</b></p>
                            </div>

                            <div className='panels-qualities'>
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
import React from 'react';

// types
import classNames from 'classnames';
import { ReviewPanelsProps } from '../../../utils/SectionProps';

// elements
import { Image, Button } from '../../../../elements';
import DropdownMenu from '../../../partials/dropdown/DropdownMenu';

// objects
import { COINBASE_EXCHANGE_DATA, KRAKEN_EXCHANGE_DATA } from './objects';


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
        'panels-item reveal-from-bottom',
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
                                    src={require('./../../../../../assets/images/pages/reviews/exchanges/coinbase-logo.png')}
                                    alt="Image"
                                    width={130}
                                    height={130} />
                              </div>

                              <div className='panels-title'>
                                  <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Beginners</h4>
                                  <h2>Coinbase Exchange</ h2>
                              </div>
                            </div>
                            
                              <div className='panels-description'>
                                <div className='panels-main-description text-sm'>
                                  <p className='fw-600'>Transaction Fee: <span className='highlight'><b>High</b></span></p>
                                  <p className='fw-600'>Transaction Fee with Credit Card: <span className='highlight'><b>~3.99%</b></span></p>
                                  <p className='fw-600'>Transaction Fee with Bank: <span className='highlight'><b>~1.49%</b></span></p>
                                  
                                </div>

                                <div className='panels-overlay'>
                                  <div className='panels-qualities text-sm'>
                                    <p className='fw-600'>Cryptocurrencies Available: <span className='highlight'><b>BTC, ETH, +36 More</b></span></p>
                                    <p className='fw-600'>Margin Trading: <span className='highlight'><b>No</b></span></p>
                                  </div>

                                  <div className='affiliate-button'>
                                    <Button tag='a' color='primary' href='https://coinbase-consumer.sjv.io/DDyE5' target='_blank'>
                                      <p className='fw-600'>Learn More</p>
                                    </Button>
                                      <p className='text-xxs'>on Coinbase's site</p>
                                  </div>
                                </div>

                              </div>
                            </div>

                            <DropdownMenu data={COINBASE_EXCHANGE_DATA} dropdownKey='coinbase'/>
                      </div>

                      <div className={panelsItemClasses}>
                        
                        <div className='panels-item-inner'>

                          <div className='panels-heading'>
                            <div className='panels-image'>
                                <Image
                                  src={require('./../../../../../assets/images/pages/reviews/exchanges/kraken-logo.jpg')}
                                  alt="Image"
                                  width={130}
                                  height={130} />
                            </div>
    
                            <div className='panels-title'>
                                <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Traders</h4>
                                <h2 className='mt-0'>Kraken Exchange</ h2>
                            </div>
                          </div>

                          
                            <div className='panels-description'>
                              <div className='panels-main-description text-sm'>
                                <p className='fw-600'>Transaction Fee: <span className='highlight'><b>Low</b></span></p>
                                <p className='fw-600'>Transaction Fee with Credit Card: <span className='highlight'><b>Unavailable</b></span></p>
                                <p className='fw-600'>Transaction Fee with Bank: <span className='highlight'><b>~0.2%</b></span></p>
                              </div>

                            <div className='panels-overlay'>
                              <div className='panels-qualities text-sm'>
                                <p className='fw-600'>Cryptocurrencies Available: <span className='highlight'><b>BTC, ETH, +48 More</b></span></p>
                                <p className='fw-600'>Margin Trading: <span className='highlight'><b>Up to 5X</b></span></p>
                              </div>

                              <div className='affiliate-button'>
                               <Button tag='a' color='primary' href='https://r.kraken.com/gyO9g' target='_blank'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                <p className='text-xxs'>on Kraken's site</p>
                              </div>
                            </div>

                          </div>
                          </div>

                            <DropdownMenu data={KRAKEN_EXCHANGE_DATA} dropdownKey='kraken'/>
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
import React from 'react';

// types
import classNames from 'classnames';
import { ReviewPanelsProps } from '../../../../utils/SectionProps';

// elements
import Image from '../../../elements/Image';
import Dropdown from '../../partials/dropdown/DropdownMenu';
import Button from '../../../elements/Button';

// objects
import EXCHANGE_DATA from './objects/exchange-data';


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

                        <div className={panelsItemClasses} key='coinbase-panel'>

                          <div className='panels-item-inner' key='coinbase-panel-inner'>

                            <div className='panels-heading' key='coinbase-panel-heading'>
                              <div className='panels-image' key='coinbase-panel-image'>
                                  <Image
                                    src={require('./../../../../assets/images//pages/reviews/exchanges/coinbase-logo.png')}
                                    alt="Image"
                                    width={130}
                                    height={130} />
                              </div>

                              <div className='panels-title' key='coinbase-panel-title'>
                                  <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Beginners</h4>
                                  <h2>Coinbase Exchange</ h2>
                              </div>
                            </div>
                            
                              <div className='panels-description' key='coinbase-panel-description'>
                                <div className='panels-main-description text-sm' key='coinbase-panel-main-description'>
                                  <p>Transaction Fee: <span className='highlight'><b>High</b></span></p>
                                  <p>Transaction Fee with Credit Card: <span className='highlight'><b>3.99%</b></span></p>
                                  <p>Transaction Fee with Bank Transfer: <span className='highlight'><b>1.49%</b></span></p>
                                </div>

                                <div className='panels-overlay' key='coinbase-panel-overlay'>
                                  <div className='panels-qualities text-sm' key='coinase-panel-qualities'>
                                    <p>Cryptocurrencies Available: <span className='highlight'><b>37</b></span></p>
                                    <p>Margin Trading: <span className='highlight'><b>No</b></span></p>
                                  </div>

                                  <div className='affiliate-button' key='coinbase-affiliate-button'>
                                    <Button color='primary' >
                                      <p className='fw-600'>Learn More</p>
                                    </Button>
                                      <p className='text-xxs'>on Coinbase's site</p>
                                  </div>
                                </div>

                              </div>
                            </div>

                            <Dropdown data={EXCHANGE_DATA} key='coinbase-panel-dropdown'/>
                      </div>

                      <div className={panelsItemClasses} key='kraken-panel'>
                        
                        <div className='panels-item-inner' key='kraken-panel-inner'>

                          <div className='panels-heading' key='kraken-panel-heading'>
                            <div className='panels-image' key='kraken-panel-image'>
                                <Image
                                  src={require('./../../../../assets/images//pages/reviews/exchanges/kraken-logo.png')}
                                  alt="Image"
                                  width={130}
                                  height={130} />
                            </div>
    
                            <div className='panels-title' key='kraken-panel-title'>
                                <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Traders</h4>
                                <h2 className='mt-0'>Kraken Exchange</ h2>
                            </div>
                          </div>

                          
                            <div className='panels-description' key='kraken-panel-description'>
                              <div className='panels-main-description text-sm' key='kraken-panel-main-description'>
                                <p>Transaction Fee: <span className='highlight'><b>Low</b></span></p>
                                <p>Transaction Fee with Credit Card: <span className='highlight'><b>Unavailable</b></span></p>
                                <p>Transaction Fee with Bank Transfer: <span className='highlight'><b>~0.2%</b></span></p>
                              </div>

                            <div className='panels-overlay' key='kraken-panel-overlay'>
                              <div className='panels-qualities text-sm' key='kraken-panel-qualities'>
                                <p>Cryptocurrencies Available: <span className='highlight'><b>50</b></span></p>
                                <p>Margin Trading: <span className='highlight'><b>Yes</b></span></p>
                              </div>

                              <div className='affiliate-button' key='kraken-affiliate-button'>
                                <Button color='primary'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                <p className='text-xxs'>on Kraken's site</p>
                              </div>
                            </div>

                          </div>
                          </div>

                            <Dropdown data={EXCHANGE_DATA} key='kraken-panel-dropdown'/>
                        </div>

                        <div className={panelsItemClasses} key='crytpocom-panel'>

                          <div className='panels-item-inner' key='cryptocom-panel-inner'>

                            <div className='panels-heading' key='cryptocom-panel-heading'>
                              <div className='panels-image' key='cryptocom-panel-image'>
                                  <Image
                                    src={require('./../../../../assets/images//pages/reviews/exchanges/cryptocom-logo.jpg')}
                                    alt="Image"
                                    width={130}
                                    height={130} />
                              </div>
                        
                              <div className='panels-title' key='cryptocom-panel-title'>
                                  <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Deal Hunters</h4>
                                  <h2 className='mt-0'>Crypto.com Exchange</h2>
                              </div>
                            </div>

                          <div className='panels-description' key='cryptocom-panel-description'>
                            <div className='panels-main-description text-sm' key='cryptocom-panel-main-description'>
                              <p>Transaction Fee: <span className='highlight'><b>Low</b></span></p>
                              <p>Transaction Fee with Credit Card: <span className='highlight'><b>4%</b></span></p>
                              <p>Transaction Fee with Bank Transfer: <span className='highlight'><b>~0.2%</b></span></p>
                            </div>

                            <div className='panels-overlay' key='cryptocom-panel-overlay'>
                              <div className='panels-qualities text-sm' key='cryptocom-panel-qualities'>
                                <p>Cryptocurrencies Available: <span className='highlight'><b>58</b></span></p>
                                <p>Margin Trading: <span className='highlight'><b>No</b></span></p>
                              </div>

                            <div className='affiliate-button' key='cryptocom-affiliate-button'>
                                <Button color='primary'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                <p className='text-xxs'>on Crypto.com</p>
                            </div>
                          </div>

                        </div>
                      </div>
                      
                      <Dropdown data={EXCHANGE_DATA} key='cryptocom-panel-dropdown'/>
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
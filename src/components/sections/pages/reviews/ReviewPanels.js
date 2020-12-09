import React from 'react';

// types
import classNames from 'classnames';
import { ReviewPanelsProps } from '../../../../utils/SectionProps';

// elements
import Image from '../../../elements/Image';
import Dropdown from '../../partials/dropdown/DropdownMenu';
import Button from '../../../elements/Button';


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

      const dropdownObject = [ { 
        title: 'Promotions',
        body: {
          header: 'Sign-Up Bonuses',
          description: 'Get $100 for signing up!'
        }},
        { title: 'Security',
        body: {
          header: 'Hardware Storage',
          description: '95% cold storage'
        }
      } ];
      

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
                                  <p>Transaction Fee: <div className='highlight'><b>High</b></div></p>
                                  <p>Transaction Fee with Credit Card: <div className='highlight'><b>3.99%</b></div></p>
                                  <p>Transaction Fee with Bank Transfer: <div className='highlight'><b>1.49%</b></div></p>
                                </div>

                                <div className='panels-overlay'>
                                  <div className='panels-qualities text-sm'>
                                    <p>Cryptocurrencies Available: <div className='highlight'><b>37</b></div></p>
                                    <p>Margin Trading: <div className='highlight'><b>No</b></div></p>
                                  </div>

                                  <div className='affiliate-button center-content'>
                                    <Button color='primary' >
                                      <p className='fw-600'>Learn More</p>
                                    </Button>
                                      <p className='text-xxs'>on Coinbase's site</p>
                                  </div>
                                </div>

                              </div>
                            </div>

                            <Dropdown data={dropdownObject}  />
                      </div>

                      <div className={panelsItemClasses}>
                        
                        <div className='panels-item-inner'>

                          <div className='panels-heading'>
                            <div className='panels-image'>
                                <Image
                                  src={require('./../../../../assets/images//pages/reviews/exchanges/kraken-logo.png')}
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
                                <p>Transaction Fee: <div className='highlight'><b>Low</b></div></p>
                                <p>Transaction Fee with Credit Card: <div className='highlight'><b>Unavailable</b></div></p>
                                <p>Transaction Fee with Bank Transfer: <div className='highlight'><b>~0.2%</b></div></p>
                              </div>

                            <div className='panels-overlay'>
                              <div className='panels-qualities text-sm'>
                                <p>Cryptocurrencies Available: <div className='highlight'><b>50</b></div></p>
                                <p>Margin Trading: <div className='highlight'><b>Yes</b></div></p>
                              </div>

                              <div className='affiliate-button'>
                                <Button color='primary'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                <p className='text-xxs'>on Kraken's site</p>
                              </div>
                            </div>

                          </div>
                          </div>

                            <Dropdown data={dropdownObject}/>
                        </div>

                        <div className={panelsItemClasses}>

                          <div className='panels-item-inner'>

                            <div className='panels-heading'>
                              <div className='panels-image'>
                                  <Image
                                    src={require('./../../../../assets/images//pages/reviews/exchanges/cryptocom-logo.jpg')}
                                    alt="Image"
                                    width={130}
                                    height={130} />
                              </div>
                        
                              <div className='panels-title'>
                                  <h4 className="text-xs text-color-secondary fw-600 tt-u">Best for Deal Hunters</h4>
                                  <h2 className='mt-0'>Crypto.com Exchange</h2>
                              </div>
                            </div>

                          <div className='panels-description'>
                            <div className='panels-main-description text-sm'>
                              <p>Transaction Fee: <div className='highlight'><b>Low</b></div></p>
                              <p>Transaction Fee with Credit Card: <div className='highlight'><b>4%</b></div></p>
                              <p>Transaction Fee with Bank Transfer: <div className='highlight'><b>~0.2%</b></div></p>
                            </div>

                            <div className='panels-overlay'>
                              <div className='panels-qualities text-sm'>
                                <p>Cryptocurrencies Available: <div className='highlight'><b>58</b></div></p>
                                <p>Margin Trading: <div className='highlight'><b>No</b></div></p>
                              </div>

                            <div className='affiliate-button'>
                                <Button color='primary'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                <p className='text-xxs'>on Crypto.com</p>
                            </div>
                          </div>

                        </div>
                      </div>
                      
                      <Dropdown data={dropdownObject}/>
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
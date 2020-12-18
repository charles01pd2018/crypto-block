import React from 'react';

// types
import classNames from 'classnames';
import { ReviewPanelsProps } from '../../../../../utils/SectionProps';

// elements
import { Image, Button } from '../../../../elements';
import DropdownMenu from '../../../partials/dropdown/DropdownMenu';

// objects
import { LEDGER_WALLET_DATA, TREZOR_WALLET_DATA } from './objects';


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
                                    src={require('./../../../../../assets/images/pages/reviews/wallets/ledger-logo.jpg')}
                                    alt="Image"
                                    width={130}
                                    height={130} />
                              </div>

                              <div className='panels-title'>
                                  <h4 className="text-xs text-color-secondary fw-600 tt-u">Most Popular</h4>
                                  <h2>Ledger Wallet</ h2>
                              </div>
                            </div>
                            
                              <div className='panels-description'>
                                <div className='panels-main-description'>
                                    <ul className='text-sm fw-600'>
                                      <div className='pb-12'><u>Key Features</u></div>
                                      <li className='highlight list-item'><b>1500 Tokens Supported</b></li>
                                      <li className='highlight list-item right'><b>Send &amp; Receive Cryptocurrency</b></li>
                                      <li className='highlight list-item'><b>Stake &amp; Lend</b></li>

                                      <div className='pt-12 pb-12'><u>Security Certifications</u></div>
                                      <li className='highlight list-item'><b>Independently ANSSI Certified</b></li>
                                      <li className='highlight list-item'><b>Certified Secure Element</b></li>
                                    </ul>
                                </div>
                              </div>
                              
                              <div className='affiliate-button'>
                                <Button tag='a' color='primary' href='https://shop.ledger.com/pages/christmas-pack?r=5556387b0f31' target='_blank'>
                                  <p className='fw-600'>Learn More</p>
                                </Button>
                                  <p className='text-xxs'>on Ledger's site</p>
                              </div>
                            </div>

                            <DropdownMenu data={LEDGER_WALLET_DATA} dropdownKey='ledger'/>
                      </div>

                      <div className={panelsItemClasses}>
                        
                        <div className='panels-item-inner'>

                          <div className='panels-heading'>
                            <div className='panels-image'>
                                <Image
                                  src={require('./../../../../../assets/images/pages/reviews/wallets/trezor-logo.png')}
                                  alt="Image"
                                  width={130}
                                  height={130} />
                            </div>
    
                            <div className='panels-title'>
                                <h4 className="text-xs text-color-secondary fw-600 tt-u">The Original</h4>
                                <h2 className='mt-0'>Trezor Wallet</h2>
                            </div>
                          </div>

                            <div className='panels-description'>
                              <div className='panels-main-description'>
                                  <ul className='text-sm fw-600'>
                                    <div className='pb-12'><u>Key Features</u></div>
                                    <li className='highlight list-item'><b>1613 Tokens Supported</b></li>
                                    <li className='highlight list-item right'><b>Send &amp; Receive Cryptocurrency</b></li>
                                    <li className='highlight list-item'><b>Stake &amp; Lend</b></li>

                                    <div className='pt-12 pb-12'><u>Security Certifications</u></div>
                                    <li className='highlight list-item'><b>RoHS Certified</b></li>
                                  </ul>
                              </div>
                            </div>
                            
                            <div className='affiliate-button'>
                              <Button tag='a' color='primary' href='https://shop.trezor.io/product/trezor-model-one-double-pack-white?offer_id=73&aff_id=5882' target='_blank'>
                                <p className='fw-600'>Learn More</p>
                              </Button>
                                <p className='text-xxs'>on Trezor's site</p>
                            </div>
                        </div>

                          <DropdownMenu data={TREZOR_WALLET_DATA} dropdownKey='trezor'/>
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
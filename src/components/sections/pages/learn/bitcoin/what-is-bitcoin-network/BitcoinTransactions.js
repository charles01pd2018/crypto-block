import React from 'react';

// types
import classNames from 'classnames';
import { SectionSplitProps } from '../../../../../../utils/SectionProps';

// elements
import { Image } from '../../../../../elements';
import SectionHeader from '../../../../partials/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const BitcoinTransactions = ({
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

        <SectionHeader data={{title: 'How do Transactions Occur on the Bitcoin Network?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    1.
                </h3>
         
                <p className="m-0">
                  Transactions get submitted to the bitcoin network, which are then relayed to all the <i>bitcoin nodes</i>.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-transactions/bitcoin-transaction-submit.svg')}
                  alt="Bitcoin Transaction Submit"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    2.
                </h3>
                <p className="m-0">
                  <i>Bitcoin miners</i> take the transaction data from the nodes and validate it, ensuring that all the transaction data is legitimate.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-transactions/bitcoin-validate-transaction.svg')}
                  alt="Bitcoin Validate Transaction"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    3.
                </h3>
                <p className="m-0">
                  Once all the <i>bitcoin miners</i> reach consensus about the proper transaction data, this data is then appended to the blockchain database.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-transactions/bitcoin-consensus.svg')}
                  alt="Bitcoin Consensus"
                  width={528}
                  height={396} />
              </div>
            </div>

            <p className='fw-600 center-content mt-32'>All transactions are stored on the bitcoin blockchain (kept safe by bitcoin nodes), so that everyone will know how much bitcoin they have at any given time!</p>
            
            <div className='pt-32'>
              <p className='mt-32 text-xs'>*The financial benefits of Bitcoin also apply to many other cryptocurrencies. However, bitcoin was the first to popularize applications of the blockchain network to enable P2P financial transactions.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

BitcoinTransactions.propTypes = propTypes;
BitcoinTransactions.defaultProps = defaultProps;

export default BitcoinTransactions;
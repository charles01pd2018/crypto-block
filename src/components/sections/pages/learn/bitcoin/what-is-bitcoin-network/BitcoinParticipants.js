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

const BitcoinParticipants = ({
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

        <SectionHeader data={{title: 'Who Participates in the Bitcoin Network?'}} textColor='text-color-secondary' className='center-content' />

          <div className={splitClasses}>

          <div></div>
          <p className='fw-600 center-content mt-32'>The bitcoin network is made up of nodes that store the blockchain transaction data, and miners that keep the network secure by validating transactions.</p>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Bitcoin Nodes
                </h3>
         
                <p className="m-0">
                  A bitcoin node is a connected computer in the bitcoin network that stores blockchain transaction data. This data is given to miners so they can validate transactions. 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-participants/bitcoin-nodes.svg')}
                  alt="Bitcoin Nodes"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mb-12 text-color-secondary">
                    Bitcoin Miners
                </h3>
                <p className="m-0">
                  Bitcoin miners ensure the security of the network by making sure transaction data added to the blockchain database is legitimate. In return for the miners hard work, they receive a small transaction fee. 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../../assets/images/pages/learn/bitcoin/what-is-bitcoin-network/bitcoin-participants/bitcoin-miners.svg')}
                  alt="Bitcoin Miners"
                  width={528}
                  height={396} />
              </div>
            </div>

            <p className='fw-600 center-content mt-32'>Together, bitcoin nodes and miners keep the network running so that everyone can use it!</p>

          </div>
        </div>
      </div>
    </section>
  );
}

BitcoinParticipants.propTypes = propTypes;
BitcoinParticipants.defaultProps = defaultProps;

export default BitcoinParticipants;
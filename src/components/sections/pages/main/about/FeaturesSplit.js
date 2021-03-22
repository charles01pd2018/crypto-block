import React from 'react';

// types
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';

// elements
import { Image } from '../../../../elements';
import SectionHeader from '../../../partials/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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

  const sectionHeaderText = {
    title: 'Mission',
    paragraph: 'To equip everyone with the knowledge necessary to navigate the world of cryptocurrency'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>

          <SectionHeader data={sectionHeaderText} className='center-content has-bottom-divider' />

          <div className={splitClasses}>
            <div className="split-item section">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <h3 className="mb-12 text-color-secondary">
                  A New Financial Economy
                </h3>

                <p className="m-0">
                  Cryptocurrency and Decentralized Finance is continuing to revolutionize the traditional financial industry. Approaching this unfamiliar landscape can be daunting. We here at Crypto Block are here to make that confrontation less scary! 
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../../../../assets/images/pages/about/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
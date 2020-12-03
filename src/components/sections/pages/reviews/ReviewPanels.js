import React from 'react';

// types
import classNames from 'classnames';
import { SectionProps } from '../../../../utils/SectionProps';


const propTypes = {
    ...SectionProps.types
  }
  
  const defaultProps = {
    ...SectionProps.defaults
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
        'panels-wrap center-content',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
      );

      const panelsItemClasses = classNames(
        'panels-item reveal-from-bottom',
        border && 'border'
      );

    return (
        <section
        {...props}
        className={outerClasses}
        >
            <div className='container review-panels'>
                <div className={innerClasses}>
                    
                    <h1 className='center-content'>Hello World</h1>

                    <div className={panelsClasses}>

                        <div className={panelsItemClasses}>
                            
                        </div>

                        <div className={panelsItemClasses}>
                            
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
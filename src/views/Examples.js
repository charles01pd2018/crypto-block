import React, { useState } from 'react';

// elements
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';

import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';

import SectionHeader from '../components/sections/partials/SectionHeader';

// sections
import Testimonial from '../components/sections/pages/examples/Testimonial';
import Cta from '../components/sections/pages/examples/Cta';


const Examples = () => {
    
    // video player hooks
    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
     } 
    
    // section header props
    const sectionHeaderText = {
        title: 'Section Header Title',
        paragraph: 'section header paragraph'
    }


    return ( 
        <>
        <section className='hero section illustration-section-01'>
            <div className='container has-bottom-divider'>
                <div className='hero-inner section-inner center-content'>
                    <div className="hero-content">

                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            <span className="text-color-secondary">Examples</span>
                        </h1>

                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                this page is for developement purposes. it will contain section examples.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <section className='button-group section'>
            <div className='container has-bottom-divider'>
                <div className='section-inner center-content'>

                    <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        <span>Button Group</span>
                    </h1>

                    &nbsp; 

                    <ButtonGroup>
                        <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                            Get started
                        </Button>

                        <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                            View on Github
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </section>
        
        <section className='video-group section'> 
            <div className='container has-bottom-divider'>
                <div className='section-inner'>
                    <div className="hero-figure center-content" data-reveal-value="20px" data-reveal-delay="800">

                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            <span>Video Player</span>
                        </h1>

                        &nbsp; 

                        <a
                            data-video="https://player.vimeo.com/video/174002812"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal} >
                        <Image
                            className="has-shadow"
                            src={require('../assets/images/video-placeholder.jpg')}
                            alt="Hero"
                            width={896}
                            height={504} />
                        </a>
                        &nbsp; 
                    </div>

                    <Modal
                        id="video-modal"
                        show={videoModalActive}
                        handleClose={closeModal}
                        video="https://player.vimeo.com/video/174002812"
                        videoTag="iframe" />
                </div>
            </div>
        </section>

        <section className='section-header section'> 
            <div className='container has-bottom-divider'>
                <div className='pt-0'>
                    <SectionHeader data={sectionHeaderText} className="center-content section-inner" />
                </div>
            </div>
        </section>

        <Testimonial bottomDivider/>

        <Cta split />

        </>              
    )
}

export default Examples;
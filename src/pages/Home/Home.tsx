import React from 'react'
import Slider from 'react-slick'

//Components

//styles
import './Home.scss'

import bannerSlider from './../../assets/images/bannerSlider.jpg';
import bannerSlider_1 from './../../assets/images/bannerSlider_1.jpg'


export const Home = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
    }
    return (
        <div className="Home">
            <div className="block_section">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <div className="banner">
                                <img src={bannerSlider} alt="Banner" />
                                <div className="banner__content">
                                    <h3>Sale of the summer collection</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="banner">
                                <img src={bannerSlider_1} alt="Banner" />
                                <div className="banner__content">
                                    <h3>Sale of the summer collection</h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div >
    )
}

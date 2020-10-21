import React from 'react'
import Slider from 'react-slick'

//Components

//styles
import './Home.scss'

import bannerSlider from './../../assets/images/bannerSlider.jpg';
import bannerSlider_1 from './../../assets/images/bannerSlider_1.jpg'
import banner_box_1 from './../../assets/images/banner_box_1.png'
import banner_box_2 from './../../assets/images/banner_box_2.png'
import { Link } from 'react-router-dom';


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
            <section className="banner_boxes">
                <div className="container">
                    <div className="banner_box__wrapper">
                        <div className="banner_box">
                            <img src={banner_box_1} alt="Banner image" />
                            <div className="banner_content_1">
                                <h4>New arrivals are now in!</h4>
                                <Link to='#'><button className='banner_button_1'>SHOW COLLECTION</button></Link>
                            </div>
                        </div>
                        <div className="banner_box">
                            <img src={banner_box_2} alt="Banner image" />
                            <div className="banner_content_2">
                                <h4>Basic t-shirts</h4>
                                <span>$29,99</span>
                                <Link to='#'><button className='banner_button_2'>MORE DETAILS</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

import React from 'react'
import Slider from 'react-slick'

//Components
import { ProductBox, ProductBoxProps } from '../../components/ProductBox/ProductBox'
//styles
import './Home.scss'

import bannerSlider from './../../assets/images/bannerSlider.jpg';
import bannerSlider_1 from './../../assets/images/bannerSlider_1.jpg'
import banner_box_1 from './../../assets/images/banner_box_1.png'
import banner_box_2 from './../../assets/images/banner_box_2.png'
import ProdBox_1 from './../../assets/images/ProdBox_1.png'
import ProdBox_2 from './../../assets/images/ProdBox_2.png'
import ProdBox_3 from './../../assets/images/ProdBox_3.png'
import ProdBox_4 from './../../assets/images/ProdBox_4.png'
import { Link } from 'react-router-dom';
import { isBigIntLiteral } from 'typescript';
import { Newsletter } from '../../components/Newsletter/Newsletter';

const products: ProductBoxProps[] = [
    {
        id: 1,
        image: ProdBox_1,
        price: "$89.99",
        description: 'T-Shirt Summer Vibes',
    },
    {
        id: 2,
        image: ProdBox_2,
        price: "$119.99",
        description: 'Loose Knit 3/4 Sleeve'
    },
    {
        id: 3,
        image: ProdBox_3,
        price: "$79.99",
        description: 'Basic Slim Fit T-Shirt'
    },

    {
        id: 4,
        image: ProdBox_4,
        price: "$119.99",
        description: 'Loose Textured T-Shirt'
    }
]

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
            <section className="ProductBox ProductBox--big">
                <div className="container">
                    <h3>Your favorites</h3>
                    <div className="row has_gutter">
                        {products.map((product: ProductBoxProps) => {
                            return (
                                <div className="column-3" key={product.id}>
                                    <ProductBox
                                        id={product.id}
                                        image={product.image}
                                        price={product.price}
                                        description={product.description}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        <Newsletter/>
        </div >
    )
}

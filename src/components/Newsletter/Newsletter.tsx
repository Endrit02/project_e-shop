import React from 'react'

// styles

import './Newsletter.scss'
import newsletter_img from './../../assets/images/newsletter_img.jpg'
import { Link } from 'react-router-dom'

export const Newsletter = () => {
    return (
        <div className="newsletter_section">
            <div className="container">
                <div className="newsletter__wrapper">
                    <img src={newsletter_img} alt="Newsletter image" />
                    <div className="newsletter__content">
                        <h2>Subscribe to our newsletter and
                        receive exclusive offers every week</h2>
                        <form className="newsleter_form" action="submit">
                            <input type="email" placeholder="Enter your Email" />
                        </form>
                        <Link to='#'><button className='newsletter_button'>SUBSCRIBE</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

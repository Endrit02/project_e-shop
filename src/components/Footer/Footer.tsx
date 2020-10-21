import React from 'react'

//styles
import './Footer.scss'
import footer_logo from '../../assets/images/footer_logo.svg'
import facebook_icon from '../../assets/images/facebook_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'
import linkedin_icon from '../../assets/images/linkedin_icon.svg'
import instagram_icon from '../../assets/images/instagram_icon.svg'
import youtube_icon from '../../assets/images/youtube_icon.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="info_and_socialMedia">
                        <img src={footer_logo} alt="Logo" />
                        <p>House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable</p>
                        <div className="socialMedia__icons">
                            <Link to="#"> <img src={facebook_icon} alt="Social Media Icons" /></Link>
                            <Link to="#"> <img src={twitter_icon} alt="Social Media Icons" /></Link>
                            <Link to="#"> <img src={linkedin_icon} alt="Social Media Icons" /></Link>
                            <Link to="#"> <img src={instagram_icon} alt="Social Media Icons" /></Link>
                            <Link to="#"> <img src={youtube_icon} alt="Social Media Icons" /></Link>
                        </div>
                    </div >
                    <div className="shooping_online">
                        <h4>Shopping online</h4>
                        <ul>
                            <Link to="#"><li>Order Status</li></Link>
                            <Link to="#"><li>Shipping and Delivery</li></Link>
                            <Link to="#"><li>Returns</li></Link>
                            <Link to="#"><li>Payment Options</li></Link>
                            <Link to="#"><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="information">
                        <h4>Information</h4>
                        <ul>
                            <Link to="#"><li>Gift Cards</li></Link>
                            <Link to="#"><li>Find a store</li></Link>
                            <Link to="#"><li>Newsletter</li></Link>
                            <Link to="#"><li>Become a member</li></Link>
                            <Link to="#"><li>Site feedback</li></Link>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Contact</h4>
                        <ul>
                            <Link to="#"><li>store@uikit.com</li></Link>
                            <span>Hotline: +1 131 138 138</span>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>

            </div>
        </div >
    )
}

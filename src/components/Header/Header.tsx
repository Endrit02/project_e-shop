import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/logo.svg';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header_wrap">
                    <img src={logo} alt="Logo" className="logo" />
                    <nav className="nav_wrapper">
                        <ul>
                            <li><Link to="/Men">Men</Link></li>
                            <li><Link to="/Women">Women</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}

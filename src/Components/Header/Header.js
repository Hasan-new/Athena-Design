import React from 'react';
import './Header.css';
import headerImg from '../../images/header-img.png'

const Header = () => {
    return (
        <div className="container p-0 d-flex align-items-center header">
            <div className="col-lg-6 col-md-6 col-sm-12 header-left">
                <h1>Florence <br/> agency</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <button className="btn navContact mx-2 pricing-btn">See Pricing</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="header-img" src={headerImg} alt=""/>
            </div>
        </div>
    );
};

export default Header;
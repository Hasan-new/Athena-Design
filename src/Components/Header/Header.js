import React from 'react';
import './Header.css';
import headerImg from '../../images/header-img.png';
import background1 from '../../images/Group 45@2x.png'
import background2 from '../../images/Group 46@2x.png'
import studio from '../../images/STUDIO@1X.png'

const Header = () => {
    return (
        <div className="header">
            <div className="container p-0 d-flex align-items-center inside-header">
                <div className="col-lg-6 col-md-6 col-sm-12 header-left">
                    <h1>Florence <br/> agency</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <button className="btn navContact mx-2 pricing-btn">See Pricing</button>
                    <div className="studio style">
                        <img src={studio} alt=""/>
                    </div>
                    <div className="studio2 style">
                        <img src={studio} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="header-img" src={headerImg} alt=""/>
                </div>
                <div className="circle_background1 style">

                </div>
                <div className="circle_background2 style">

                </div>
                <div className="circle_background3 style">
                    
                </div>
            </div>
            <div className="background_image_1 style">
                <img src={background1} alt=""/>
            </div>
            <div className="background_image_2 style">
                <img src={background2} alt=""/>
            </div>
        </div>
    );
};

export default Header;
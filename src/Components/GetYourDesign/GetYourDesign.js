import React from 'react';
import './GetYourDesign.css';
import logo from '../../images/Logo.png';
import facebook from '../../images/facebook-logo-in-circular-shape@2x.png';
import linkedIn from '../../images/linkedin (2)@2x.png';
import dribbble from '../../images/dribbble (1)@2x.png';
import twitter from '../../images/twitter (4)@2x.png';

const GetYourDesign = () => {
    return (
        <div className="footer">
            <div className=" container text-center getYourDesign">
                <h2>Get your design right, right now</h2>
                <h6>Be the first know our latest offers and updates!</h6>
                <div className="footer-form">
                    <input className="email-input" placeholder="Enter your email address" type="email"/>
                    <div className="btn started-btn navContact pricing-btn">Get Started</div>
                </div>
                <div className="footer-bottom">
                    <div className="col-lg-5 col-md-5 col-sm-12 footer-left">
                        <a href="#"><img className="navLogo" src={logo} alt=""/></a>
                        <div className="mt-4">
                            <a target="_blank" className="footer-icon" href="https://www.facebook.com/"><img src={facebook} alt=""/></a>
                            <a target="_blank" className="footer-icon" href="https://twitter.com/"><img src={twitter} alt=""/></a>
                            <a target="_blank" className="footer-icon" href="https://www.linkedin.com/"><img src={linkedIn} alt=""/></a>
                            <a target="_blank" className="footer-icon" href="https://dribbble.com/"><img src={dribbble} alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 footer-right">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <a href="#">Features</a>
                            <a href="#">Enterprise</a>
                            <a href="#">Pricing</a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <a href="#">Blog</a>
                            <a href="#">Help Center</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Status</a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <a href="#">About Us</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Security</a>
                            <a href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetYourDesign;
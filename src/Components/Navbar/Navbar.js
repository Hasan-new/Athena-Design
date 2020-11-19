/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar align-items-start mt-3 navbar-expand-lg navbar-light container">
        <a href="#"><img className="navLogo" src={logo} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <a className="nav-link mx-2 px-2 active" href="#home">Home</a>
                <a className="nav-link mx-2 px-2" href="#about">About</a>
                <a className="nav-link mx-2 px-2" href="#services">Services</a>
                <a className="nav-link mx-2 px-2" href="#pricing">Pricing</a>
                <a className="nav-link mx-2 px-2" href="#our-team">Our Team</a>
                <button className="btn navContact mx-2">Contact us</button>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
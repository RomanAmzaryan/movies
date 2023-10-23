import React from "react";
import logo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";

import "./footer.css";
const Footer = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/`);
    };
    return (
        <footer className="container">
            <div className="footer-logo" onClick={navigateTo}>
                <img src={logo} alt="" />
                <div className="footer-logo-text-cont">
                    <span className="footer-logo-text">tooin.</span>
                    <span className="footer-logo-text">movies</span>
                </div>
            </div>
            <div className="copyright">
                <span className="copyright-icon">&copy;</span>
                <span>2023</span>
            </div>
        </footer>
    );
};

export default Footer;

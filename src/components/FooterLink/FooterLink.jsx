import React from 'react'
import { Link } from 'react-router-dom';
import './FooterLink.css';

const FooterLink = ({ phrase, link, toAddress }) => {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toAddress} className="footer-link-element">
                {link}
            </Link>
        </div>
    )
}

export default FooterLink;

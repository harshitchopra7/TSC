import React from 'react';
import './Footer.css';
import love from '../images/love.png';
import gmail from '../images/gmail.png';
import link from '../images/link.png';

function Footer() {
    return (
            <div className="footer">
                <p>Made with</p>
                <div>
                    <img className="love" src={love} alt="" />
                </div>
                <p>by Harshit Chopra</p>

                <div>
                    <div className="footer_right"> 
                        <a href="mailto:chopraharshit2000@gmail.com"><img className="gmail" src={gmail} alt="" /></a>
                        <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/"><img className="link" src={link} alt="" /></a>
                    </div>
            </div>
        </div>
    )
}

export default Footer;

import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import "./Footer.css";


// eslint-disable-next-line no-unused-vars
const Footer = () => {


    return (

        <footer className="footer">

            <div className="cont">
                <div className="contact">
                    <p>
                        Адрес: Саратов
                    </p>
                    <p>
                        Адрес: ул. Сакко и Ванцетти д. 00
                    </p>
                </div>
                <div className="social">
                    <p href="#" >
                        <FaTelegram /> telegram
                    </p>
                    <p>
                        <FaInstagram /> instagram
                    </p>
                    <p>
                        <FaFacebook /> facebook
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
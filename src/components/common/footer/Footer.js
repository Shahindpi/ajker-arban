import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './../../../assets/images/ajker-arban-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <div className="footer-section">
            <div className="footer-section__wrapper">
                <div className="footer-section__wrapper--container custom-row">
                    <div className="column">
                        {/* <a href="">
                            <img src={logo} alt="Ajker Arban" />
                        </a> */}
                        <Link to="/Details">
                            <img src={logo} alt="Ajker Arban" />
                        </Link>
                    </div>
                    <div className="column">
                        <div className="title">প্রকাশক ও সম্পাদক</div>
                        <span>সৈয়দ আরিফুজ্জামান </span>
                        <span>সম্পাদকীয় কার্যালয় : </span>
                        <span>কলেজ রোড, রাজপাড়া, পূর্বধলা, নেত্রকোনা </span>
                        <span>সেল ফোন : ০১৭১১-৭০৯৫৭২ </span>
                        <span>ই-মেইল : <a href="mailto: ajkerarbannews@gmail.com"> ajkerarbannews@gmail.com</a></span>
                    </div>   
                    <div className="column">
                        <div className="title">অনুসরণ করুন</div>
                        <ul>
                            <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
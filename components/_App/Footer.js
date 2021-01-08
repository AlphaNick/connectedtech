import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
       <React.Fragment>
           <footer className="footer-area pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img className="footer-logo" src="/images/logo.png" alt="Image" />
                                    </a>
                                </Link>
                              
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>

                                <ul className="address">
                                    <li className="location">
                                        <i className="bx bxs-location-plus"></i>
                                        2nd Floor Raven House, 29 Linkfield Ln, Redhill, RH1 1SS
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <a href="mailto:info@connectedtech.co.uk">info@connectedtech.co.uk</a>
                                        
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <a href="tel:0203 994 2911 ">0203 994 2911 </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="import-link">
                                    <li>
                                        <Link href="/#">
                                            <a>Cloud Computing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Cyber Security</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Business Continuity</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Communication Solutions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Help Desk</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Managed Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Resources</h3>

                                <ul className="import-link">
                                
                                    <li>
                                        <Link href="/#">
                                            <a>Consulting &amp; Strategy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Terms</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Cookie Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>Disclaimer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a>GDPR Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
            <div className="copy-right-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} ConnectedTech. Designed &amp; Developed by <a href="https://stokescreations.com/" target="_blank">Stokes Creations</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul className="footer-menu">
                            <li>
                                        <a href="#" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="bx bxl-linkedin-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </React.Fragment>
    );
}

export default Footer;
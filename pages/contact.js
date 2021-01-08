import React from 'react';
import NavbarFive from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <NavbarFive />
            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
            /> 

            <section className="main-contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-info">
                                <h3>Our contact details</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                <ul className="address">
                                    <li className="location">
                                        <i className="bx bxs-location-plus"></i>
                                        <span>Address</span>
                                        2nd Floor Raven House, 29 Linkfield Ln, Redhill, RH1 1SS
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <span>Phone</span>
                                        <a href="tel:0203 994 2911">0203 994 2911</a>
                              
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <span>Email</span>
                                        <a href="mailto:info@connectedtech.co.uk">info@connectedtech.co.uk</a>
                                        
                                    </li>
                                </ul>

                                <div className="sidebar-follow-us">
                                    <h3>Follow us:</h3>
                
                                    <ul className="social-wrap">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9990.573780513076!2d-0.1725986!3d51.2440612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x506759709a606428!2sRaven%20Housing%20Trust!5e0!3m2!1sen!2suk!4v1610112563642!5m2!1sen!2suk"></iframe>
            </div>
         
            <Footer />
        </React.Fragment>
    )
}

export default Contact;
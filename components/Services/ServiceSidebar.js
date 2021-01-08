import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
        <div className="services-sidebar">
            <div className="services-category">
                <ul>
                    <li>
                        <Link href="cloud-computing">
                            <a>
                                Cloud Computing <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="cyber-security">
                            <a>
                            Cyber Security
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="business-continuity">
                            <a>
                                Business Continuity
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="communication-solutions">
                            <a>
                                Communication Solutions
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="helpdesk">
                            <a>
                                Helpdesk
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="managed-services">
                            <a>
                                Managed Services
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="consulting-strategy">
                            <a>
                                Consultancy &amp; Strategy
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="services-contact mb-30">
                <h3>Contact us tday</h3>

                <Link href="/contact">
                    <a className="default-btn">
                        <span>Contact Us</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ServiceSidebar;
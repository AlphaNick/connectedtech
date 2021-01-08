import React from 'react';
import Link from 'next/link';

const RelatedServices = () => {
    return (
        <div className="related-post">
            <div className="title">
                <h2>Other Services</h2>
            </div>

            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-services">
                        <div className="services-img">
                            <Link href="/cyber-security">
                                <a>
                                    <img src="/images/services/services-1.jpg" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="services-content">
                            <h3>
                                <Link href="/cyber-security">
                                    <a>Cyber Security</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-services">
                        <div className="services-img">
                            <Link href="/managed-services">
                                <a>
                                    <img src="/images/services/services-2.jpg" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="services-content">
                            <h3>
                                <Link href="/managed-services">
                                    <a>Managed Services</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                    <div className="single-services">
                        <div className="services-img">
                            <Link href="/cloud-computing">
                                <a>
                                    <img src="/images/services/services-3.jpg" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="services-content">
                            <h3>
                                <Link href="//cloud-computing">
                                    <a>Cloud Computing</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedServices;
import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>ConnectedTech Services</span>
					<h2>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
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
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
                                <Link href="/cyber-security">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
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
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/managed-services">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
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
                                    <Link href="/cloud-computing">
                                        <a>Cloud Computing</a>
                                    </Link>
                                </h3> 
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/cloud-computing">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
                                <Link href="/helpdesk">
                                    <a>
                                        <img src="/images/services/services-4.jpg" alt="Image" />
                                    </a>
                                </Link>
							</div>
							<div className="services-content">
                                <h3>
                                    <Link href="/helpdesk">
                                        <a>Helpdesk</a>
                                    </Link>
                                </h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<Link href="/helpdesk">
                                    <a className="read-more">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Services;
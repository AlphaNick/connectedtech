import React from 'react';

const Protects = () => {
    return (
        <div className="protect-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="protect-img">
							<img src="/images/protect-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="protect-content">
							<div className="protect-title">
								<span>More Services</span>
								<h2>We provide a huge array of services, from Helpdesk to Support and Strategies, to Consultancy and Security</h2>
							</div>

							<div className="row">
								<div className="col-lg-6 col-sm-6">
									<div className="single-challenges overly-one">
										<div className="overly-two">
											<i className="flaticon-database"></i>
											<h3>Consultancy</h3>
											<p>Helping clients on how they can utilise information technology</p>
											<span className="flaticon-database"></span>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-challenges overly-one">
										<div className="overly-two">
											<i className="flaticon-application"></i>
											<h3>Strategy</h3>
											<p>Plan and implement effective IT strategies</p>
											<span className="flaticon-application"></span>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-challenges overly-one">
										<div className="overly-two">
											<i className="flaticon-security"></i>
											<h3>Helpdesk</h3>
											<p>Provide help desk IT support that will meet your requirements perfectly.</p>
											<span className="flaticon-security"></span>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-challenges overly-one">
										<div className="overly-two">
											<i className="flaticon-security-1"></i>
											<h3>Support</h3>
											<p>With our fully managed IT support, it’s like having your own IT department.</p>
											<span className="flaticon-security-1"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Protects;
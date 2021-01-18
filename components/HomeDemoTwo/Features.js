import React from 'react';

const Features = () => {
    return (
        <div className="feature-area pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-testing"></i>
									<h3>Cloud Computing</h3>
								</div>
								<p>Connected Tech comprises a number of applications that are available on the cloud platform to do specific tasks and link to other applications and services</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-cybercrime"></i>
									<h3>Cyber Security</h3>
								</div>
								<p>With Connected Tech, we will take away the worry of cyber security. We will give you the complete peace of mind that you are both compliant and covered.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i className="flaticon-cyber-security"></i>
									<h3>Managed Services</h3>
								</div>
								<p>Our approach to managed services makes your data more secure and more accessible, and makes your business more productive, cost-effective and compliant.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
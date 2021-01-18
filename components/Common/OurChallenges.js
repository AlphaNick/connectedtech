import React from 'react';

const OurChallenges = () => {
    return (
        <div className="challenges-area pt-100 pb-70 jarallax">
			<div className="container">
				<div className="section-title white-title">
					<span>Our Challenges</span>
					<h2>You Can Protect Your Organization’s Cybersecurity By Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-threat"></i>
								<h3>Identifying Threats</h3>
								<p>Using proven risk identification methodologies to find threats</p>
								<span className="flaticon-threat"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-cyber"></i>
								<h3>Cyber Risk Assessment</h3>
								<p>Receive critical insights into the Security of your network</p>
								<span className="flaticon-cyber"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-cyber-security-1"></i>
								<h3>Testing Cyber Security</h3>
								<p>A security assessment of any network service</p>
								<span className="flaticon-cyber-security-1"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-password"></i>
								<h3>Managing Cloud Security</h3>
								<p>Respond to security risks with greater speed and accuracy</p>
								<span className="flaticon-password"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurChallenges;
import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area banner-area-two bg-2 jarallax">
			<div className="container">
				<div className="banner-content">
					<span className="top-title">Cyber Security Solutions Built On Customer Trust</span>
					<h1>Top Level Cyber Security </h1>
					<p>Our advanced cyber security services proactively protect your organisation from the inside out and safeguard against the latest threats and vulnerabilities.</p>

                    <Link href="/about-us">
                        <a className="default-btn">
                            <span>About Us</span>
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;
import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area ptb-100 jarallax">
			<div className="container">
				<div className="testimonials">
					<span>What our customers say</span>

                    {display ? <OwlCarousel 
                        className="testimonials-slide owl-carousel owl-theme"
                        {...options}
                    > 
						<div className="testimonials-item">
							<i className="flaticon-quote"></i>
							<p>“Connected Tech was worth a fortune to my company, worth much more than I paid. I STRONGLY recommend Connected Tech to EVERYONE interested in running a secure online business!”</p> 
							
							<ul>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
							</ul>

							<h3>Steve Townsley</h3>
							<span>Director</span>
						</div>

						<div className="testimonials-item">
							<i className="flaticon-quote"></i>
							<p>“I will refer everyone I know. Best service ever! I'm good to go, knowing I'm 100% safe and secure. I can't thank Connected Tech enough.”</p> 
							
							<ul>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
								<li><i className="bx bxs-star"></i></li>
							</ul>

							<h3>Malinda Morris</h3>
							<span>Manager</span>
						</div>
                    </OwlCarousel> : ''}
				</div>
			</div>
		</div>
    )
}

export default Testimonials;
import React from 'react';
import { 
    resetIdCounter, 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
resetIdCounter();

const AboutUsContent = () => {
    return (
        <div className="about-us-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img mb_30">
							<img src="/images/about-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-content">
							<div className="about-title">
								<span>About Us</span>
								<h2>Here at Connected Tech, we provide a huge array of expert solutions to Cyber Security, Manages Services, Cloud Computing and Consulting &amp; Strategy. Using the worlds leading technologies across your data and security, giving you confidence in growing your business safe.</h2>
							</div>
 
                            <Tabs>
                                <TabList>
                                    <Tab>Cyber Security</Tab>
                                    <Tab>Managed Services</Tab>
                                    <Tab>Cloud Computing</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <p>Our cybersecurity refers to the avoidance of risk to your digital assets connected to the big world wide web, any device you have connected to the internet can be at risk, as well as networks, software, hardware, databases and email accounts.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Smart
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                           Safe
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Secure
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                <p>At Connected Tech we provide all aspects of Managed IT Services, from cloud computing to Helpdesk Support, delivering your company value through our proven methodologies. This is why we maintain our 98+% customer satisfaction..</p>

                                    <ul>
                                    <li>
                                            <i className="bx bx-check-circle"></i>
                                            Dedicated Support
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            System Backups
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Highly trained
                                        </li>
                                  
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                <p>We will work closely with you to understand your requirements and design a cloud infrastructure that is right for you. Our Cloud Services will help you and your business become more productive, enabling your employees to stay connected whether they are in a different office or working from home. This enhances your ability to collaborate more efficiently.</p>

                                    <ul>
                                    <li>
                                            <i className="bx bx-check-circle"></i>
                                            Communication
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Collaboration
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Customisation
                                        </li>
                                    </ul>
                                </TabPanel>
                            </Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;
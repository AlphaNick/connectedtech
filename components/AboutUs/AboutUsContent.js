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
								<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum</h2>
							</div>
 
                            <Tabs>
                                <TabList>
                                    <Tab>Cyber Security</Tab>
                                    <Tab>Managed Services</Tab>
                                    <Tab>Cloud Computing</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.</p>

                                    <ul>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cyber Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Managed Services
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cloud Computing
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Consulting &amp; Strategy
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.</p>

                                    <ul>
                                    <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cyber Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Managed Services
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cloud Computing
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Consulting &amp; Strategy
                                        </li>
                                    </ul>
                                </TabPanel>

                                <TabPanel>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque quibusdam fuga natus non necessitatibus eveniet maiores nostrum esse ut voluptates sint dolores, voluptatum consequatur ad est enim perferendis reprehenderit.</p>

                                    <ul>
                                    <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cyber Security
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Managed Services
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Cloud Computing
                                        </li>
                                        <li>
                                            <i className="bx bx-check-circle"></i>
                                            Consulting &amp; Strategy
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
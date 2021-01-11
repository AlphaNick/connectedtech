import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header className="header-area">
            <div id="navbar" className="navbar-area">
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md">

                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img className="primary-logo" src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/#" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Services <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/cloud-computing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Cloud Computing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cyber-security" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Cyber Security</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/business-continuity" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Business Continuity</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/communication-solutions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Comminications Solutions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/helpdesk" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Helpdesk</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/managed-services" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Managed Services</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/consulting-strategy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Consulting &amp; Strategy</a>
                                                </Link>
                                            </li>

                                            
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option">
                                    <div className="get-quote">
                                        <Link href="/#">
                                            <a className="default-btn">
                                                <span>Call Us Today</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

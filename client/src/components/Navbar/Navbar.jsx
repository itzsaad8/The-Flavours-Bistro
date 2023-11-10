import { React, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
    return (
        <>
        <div className="container-fluid bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar">
                            <div className="logo">
                                <a href="/">Your Logo</a>
                            </div>
                            <div className="menu-toggle" id="menu-toggle" onClick={toggleNav}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <ul className={`nav-links ${isNavActive ? 'active' : ''}`} id="nav-links">
                                <li><Link className='menu' to="/">Home</Link></li>
                                <li><Link className='menu' to="/">TAKEAWAY LUNCH & DINNER MENU</Link></li>
                                <li><Link className='menu' to="/selfcatfood">SELF CATERING FOOD</Link></li>
                                <li><Link className='menu' to="/gallery">GALLERY</Link></li>
                                <li><Link className='menu' to="/contact">CONTACT US</Link></li>
                            </ul>
                            <div className="bookButton">
                                <Link to="/" className='text-white'> BOOK NOW</Link>
                            </div>
                            {isNavActive && <div className="overlay" onClick={toggleNav}></div>}
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

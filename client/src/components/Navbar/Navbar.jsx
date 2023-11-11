import { React, useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);
    const [scrollClass,setScrollClass] = useState('bg-dark')
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
   
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
              setScrollClass('bg-light ')
        }
        else{
            setScrollClass("bg-dark")
        }
    })
    //     const [scrollY, setScrollY] = useState(0);

    //   useEffect(() => {
    //     const handleScroll = () => {
    //       setScrollY(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    //   const backgroundStyle = {
    //     backgroundColor: scrollY > 20 ? 'white' : 'transparent',
    //     color: scrollY > 20 ? 'black' : 'white',
    //     transition: 'background-color 0.3s ease-in-out',
    //   };
    return (
        <>
            <div className={`container-fluid   ${scrollClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar">
                                <div className="logo">
                                    <a href="/">   
                                         <img className='logo-image' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/2b29abc0-9fc1-4861-9145-dfba4435e21b_image_png-0845a24e-120w.png" alt="" />
                                    </a>
                                </div>
                                <div className="menu-toggle" id="menu-toggle" onClick={toggleNav}>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </div>
                                <ul className={`nav-links ${isNavActive ? 'active' : ''}`} id="nav-links">
                                    <li><Link className='menu' to="/">Home</Link></li>
                                    <li><Link className='menu' to="/takeaway">TAKEAWAY LUNCH & DINNER MENU</Link></li>
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

import { React, useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);
    const [scrollClass,setScrollClass] = useState('bg-dark');
    const [scrollClass2,setScrollClass2] = useState('menu');
    const [scrollClass3,setScrollClass3] = useState('bookNow');
    const [scrollClass4,setScrollClass4] = useState('bar');
    const toggleNav = () => {
        setIsNavActive(!isNavActive);
        
    };
   
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 30){
              setScrollClass('bg-white');
              setScrollClass2('menu2');
              setScrollClass3('bookNow2')
              setScrollClass4('bar2')
              
        }
        else{
            setScrollClass("bg-dark")
            setScrollClass2('menu');
            setScrollClass3('bookNow');
            setScrollClass4('bar')
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

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          
          if (navbar) {
            if (window.scrollY > 30) {
              navbar.classList.add('sticky');
            } else {
              navbar.classList.remove('sticky');
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Add an empty dependency array to ensure the effect runs only once
    
    

    return (
        <>
            <div className={`container-fluid   ${scrollClass} `}>
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
                                    <div className={` ${scrollClass4}`}></div>
                                    <div className={` ${scrollClass4}`}></div>
                                    <div className={` ${scrollClass4}`}></div>
                                </div>
                                <ul className={`nav-links ${isNavActive ? 'active' : ''} `} id="nav-links">
                                    <li><Link className={`${scrollClass2}`} test to="/">HOME</Link></li>
                                    <li><Link className={`${scrollClass2}`} to="/takeaway">ABOUT US</Link></li>
                                    <li><Link className={`${scrollClass2}`} to="/selfcatfood">MENUS</Link></li>

                                    <li><Link className={`${scrollClass2}`} to="/gallery">GALLERY</Link></li>
                                    <li><Link className={`${scrollClass2}`} to="/contact">CONTACT US</Link></li>
                                </ul>
                                <div className="bookButton">
                                    <Link to="/" className={`${scrollClass3}`}> BOOK NOW</Link>
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

import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [navScroll, setNavScroll] = useState(false);

    const location = useLocation();
    const pathName = location.pathname;

    // Nav backgoround change on scroll 
    const setNavBg = () => {
        if(window.scrollY >= 100) {
            setNavScroll(true);
        }
        else{
            setNavScroll(false);
        }
    }
    window.addEventListener("scroll", setNavBg);

    // Nav menu items 
    const navItems = [
            { id: 1, name: "Home", link: "/" },
            { id: 2, name: "Services", link: "/services" },
            { id: 3, name: "Coverage", link: "/coverage" },
            { id: 4, name: "Pricing", link: "/pricing" },
            { id: 5, name: "Contact Us", link: "/contact-us" },
    ];

    return (
        <header className={`fixed top-0 w-full border-b border-b-[#ffffff44] z-20 font-semibold ${navScroll ? 'bg-base-100 shadow-xl' : 'bg-transparent'} ${pathName !== "/" ? 'bg-base-100 shadow-xl' : ''}`}>
            <div className='container mx-auto'>
                <div className={`navbar text-white w-full ${navScroll || pathName !== "/" ? "text-neutral": ''}`}>

                    {/* Mobile Navbar  */}
                    <div className="navbar-start w-full flex justify-between md:justify-start px-2 md:px-0">
                        <div className="dropdown">
                            <label tabIndex="0" className={`btn bg-transparent mr-2 md:hidden ${navScroll || pathName !== "/" ? "border-primary text-primary": 'border-base-100 text-white'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-neutral rounded-box">
                                {
                                    navItems.map(item => <li key={item.id}><Link to={item.link}>{item.name}</Link></li>)
                                }
                                <li><a href='/merchant-login' className={`btn border-none font-bold hover:text-white ${navScroll ? "bg-primary text-white": 'bg-white text-primary'} ${pathName !== "/" ? 'bg-primary text-white' : ''}`}>Merchant Login</a></li>
                            </ul>
                        </div>
                        <Link to='/' className="normal-case text-3xl">RX Courier</Link>
                    </div>

                    {/* Regular Navbar  */}
                    <div className="navbar-end hidden md:flex w-full">
                        <ul className="menu menu-horizontal p-0 w-full flex justify-end">
                            {
                                navItems.map(item => <li key={item.id} className='ml-3'><Link to={item.link}>{item.name}</Link></li>)
                            }

                            <li className='ml-3'><a href='/merchant-login' className={`btn border-none font-bold hover:text-white ${navScroll ? "bg-primary text-white": 'bg-white text-primary'} ${pathName !== "/" ? 'bg-primary text-white' : ''}`}>Merchant Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;
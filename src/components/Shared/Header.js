import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [navScroll, setNavScroll] = useState(false);

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

    const navItems = [
            { id: 1, name: "Home", link: "/" },
            { id: 1, name: "Services", link: "/services" },
            { id: 1, name: "Coverage", link: "/coverage" },
            { id: 1, name: "Pricing", link: "/pricing" },
            { id: 1, name: "Contact Us", link: "/contact-us" },
    ];

    return (
        <header className={`fixed top-0 w-full border-b border-b-[#ffffff44] z-20 font-semibold ${navScroll ? 'bg-base-100 shadow-xl' : 'bg-transparen'}`}>
            <div className="container mx-auto navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-neutral rounded-box w-52">
                            {
                                navItems.map(item => <li id={item.id}><Link to={item.link}>{item.name}</Link></li>)
                            }
                            <li><a href='/merchant-login' className='btn bg-neutral border-none text-white font-semibold hover:text-white'>Merchant Login</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-3xl">RX Courier</Link>
                </div>

                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            navItems.map(item => <li id={item.id}><Link to={item.link}>{item.name}</Link></li>)
                        }

                        <li><a href='/merchant-login' className='btn bg-white border-none text-primary font-semibold hover:text-white'>Merchant Login</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
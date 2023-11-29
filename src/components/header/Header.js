import React from 'react';
import { Navbar, Link } from 'react-bootstrap';
import logo from '../../assets/images/ajker-arban-1.png'

const Header = () => {
    return(
        
        <section className="header-section">
            <div className="header-content flex-container">
            <BrowserRouter>
                <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                </header>
                <Routes>
                <Route index exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
                <header>
                    <nav>
                        <div className="logo">
                            <Navbar link to="/"><img src={logo} /></Navbar>
                        </div>
                        <div className="menu-bar">
                            <ul className="flex-container">
                                <li><a href="#">বাংলাদেশ</a></li>
                                <li><a href="#">রাজনীতি</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                                <li><a href="#">আন্তর্জাতিক</a></li>
                                <li><a href="#">খেলা</a></li>
                                <li><a href="#">বিনোদন</a></li>
                                <li><a href="#">স্বাস্থ্য</a></li>
                                <li><a href="#">সম্পাদকীয়</a></li>
                                <li><a href="#">অন্যান্য</a>
                                    <div className="dropdown desktop-hide">
                                        <ul>
                                            <li><a href="">আজকের এই দিনে</a></li>
                                            <li><a href="">আইন ও মানবাধিকার</a></li>
                                            <li><a href="">শিক্ষাঙ্গন</a></li>
                                            <li><a href="">আবহাওয়া</a></li>
                                            <li><a href="">জীবনযাপন</a></li>
                                            <li><a href="">অর্থনীতি</a></li>
                                            <li><a href="">অর্থনীতি</a></li>
                                            <li><a href="">অর্থনীতি</a></li>
                                            <li><a href="">অর্থনীতি</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </section>
    );
}

export default Header;
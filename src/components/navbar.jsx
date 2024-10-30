import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div classNAme="logoName">
            <p>Portfolio</p>
        </div>
        <ul>
            <li>
                <a href="#hero">
                    Home
                </a>
            </li>
            <li>
                <a href="#about">
                    About
                </a>
            </li>
            <li>
                <a href="#projects">
                    Projects
                </a>
            </li>
            <li className="contactbtn">
                <a href="#contact">
                    Contact
                </a>
            </li>
        </ul>     
    </nav>
  );
};

export default Navbar;
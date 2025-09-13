// src/components/Header.jsx

import React from 'react';
// Make sure to install react-router-dom: npm install react-router-dom
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/service' },
    { title: 'Workshops', path: '/workshop' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <nav className="px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">
            <Link to="/">Superbloom<span className="gradient-text">.</span> </Link>
          </h1>

          {/* Navigation Links - hidden on small screens */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/contact">
            <button className="bg-gradient-to-br from-[#c026d3] to-[#f472b6] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Let's Talk
            </button>
          </Link>
        </nav>
        {/* Divider Line */}
        <div className="border-b border-gray-800 mx-6"></div>
      </div>
    </header>
  );
};

export default Header;
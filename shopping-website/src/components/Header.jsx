import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="text-white bg-gradient-to-b from-[#f94e30] to-[#ff6433]">
      <div className="container mx-auto px-4">
        <div className="border-b border-orange-300">
          <div className="text-xs py-2 flex flex-col md:flex-row items-center justify-between">
            {/* Left Side Links */}
            <div className="mb-1 md:mb-0">
              <ul className="flex items-center flex-wrap gap-2 text-white">
                <li>
                  <Link to="/seller">Seller Center</Link>
                </li>
                <span className="w-px h-4 bg-white/40 mx-2"></span>
                
              </ul>
            </div>

            {/* Right Side Links */}
            <div>
              <ul className="flex items-center flex-wrap gap-2">
                <li>
                  <Link to="/" className="flex items-center gap-1">
                    <i className="fa-solid fa-circle-question text-sm mx-1"></i>
                    <span>Support</span>
                  </Link>
                </li>
                <span className="w-px h-4 bg-white/40 mx-2"></span>
                <li>
                  <Link to="/">Register</Link>
                </li>
                <span className="w-px h-4 bg-white/40 mx-2"></span>
                <li>
                  <Link to="/">Log in</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;

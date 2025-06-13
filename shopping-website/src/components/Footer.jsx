import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500">
      <div className="container mx-auto py-4 text-center">
        <div className="flex items-center justify-center text-white font-light text-sm space-x-4 flex-wrap">
          <Link to="/" className="uppercase hover:underline">
            Privacy Policy
          </Link>
          <span className="w-px h-4 bg-white/50"></span>
          <Link to="/" className="uppercase hover:underline">
            Terms of Service
          </Link>
          <span className="w-px h-4 bg-white/50"></span>
          <Link to="/" className="uppercase hover:underline">
            About SnapUp.
          </Link>
        </div>
        <span className="block text-white font-light text-sm mt-3 font-manrope">
          &copy; 2022 SnapUp. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

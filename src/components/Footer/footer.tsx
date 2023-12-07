// components/Footer.js

import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaSitrox } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-muted-foreground py-8 font-Roboto">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or site name */}
        <div className="text-2xl font-bold flex items-center text-ring"><FaSitrox/><span className='mt-2 text-muted-foreground'>hahid</span></div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gray-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import Logo from '../assets/my-logo.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={Logo }
              alt="Logo"
              className="w-16 h-16"
            />
            <span className="font-bold text-lg">KevStudio</span>
          </div>
          <p className="text-sm text-gray-500">
            Showcasing my passion for web development through clean, responsive, and modern designs.
          </p>
        </div>

        {/* Useful Link */}
        <div>
          <h4 className="font-semibold mb-4">Useful Link</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#main">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Product */}
       <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services">What I Offer</a></li>
                <li><a href="#faqs">Faqs - Working with Me</a></li>
                <li><a href="#testimonials">Client Feedback</a></li>
            </ul>
        </div>


        {/* Company & Social */}
        <div>
          
          <div className="flex gap-3">
            <a href="https://wa.me/639317969543" className="bg-gray-100 rounded-full p-2">
                <IoLogoWhatsapp className="text-green-500" size={24} />
            </a>
            <a href="https://www.facebook.com/kevinguerrero0827" className="bg-gray-100 rounded-full p-2">
                <FaFacebook className="text-blue-600" size={24} />
            </a>
            <a href="https://www.instagram.com/keev_dev/" className="bg-gray-100 rounded-full p-2">
                <FaInstagramSquare className="text-pink-600" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>Copyright © 2025 KevStudio. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
            <img src={Logo} alt="Code icon" className="w-16 h-16" />
            <span className="text-sm text-gray-600">Designed by <span className="font-semibold">Kevin Guerrero</span></span>
        </div>

      </div>
    </footer>
  )
}

export default Footer

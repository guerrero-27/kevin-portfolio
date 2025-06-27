import React, { useState } from "react";
import logo from "../assets/my-logo.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div>
      <div className="relative">
        <nav className="w-full fixed top-0 left-0 z-50  flex justify-between items-center px-4 py-2 bg-background md:hidden">
          <div className="flex items-center md:hidden z-50">
            <img src={logo} alt="" className="h-12 w-auto" />
            <h2 className="text-white text-[14px] -ml-1 font-furgatorio font-thin bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
              KEV STUDIO
            </h2>
          </div>

          <div
            onClick={handleNav}
            className="z-[99] md:hidden cursor-pointer transition-transform duration-300"
          >
            {nav ? (
              <AiOutlineClose
                className="text-white scale-100 duration-300"
                size={20}
              />
            ) : (
              <AiOutlineMenu
                className="text-white scale-100 duration-300"
                size={20}
              />
            )}
          </div>
        </nav>

        <div
          className={`fixed top-8 left-0 w-[75%] h-[90%] bg-bglight flex flex-col justify-center rounded-r-lg items-start z-40 transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Home */}
          <a
            href="#main"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <AiOutlineHome className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Home
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* About */}
          <a
            href="#faqs"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <BsPerson className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Faq's
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Projects */}
          <a
            href="#work"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <AiOutlineProject className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Projects
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Services */}
          <a
            href="#services"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <GrProjects className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Services
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Testimonials */}
          <a
            href="#testimonials"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <IoIosPeople className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Testimonials
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="group flex flex-col items-center cursor-pointer p-2 m-4"
            onClick={handleClose}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
                <AiOutlineMail className="text-black" size={20} />
              </div>
              <span className="font-furgatorio font-thin text-white pl-3">
                Contact
              </span>
            </div>
            <span className="block h-0.5 w-8 bg-white mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
        {/* Desktop Navbar (visible md and up) */}
        <div className="hidden md:flex justify-between items-center w-full px-4 lg:px-[10%] fixed top-0 z-30 bg-background">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-12 w-auto" />
            <h2 className="text-white text-[15px] -ml-1 font-furgatorio font-thin bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
              KEV STUDIO
            </h2>
          </div>
          <div className="font-Monserat font-extralight flex items-center">
            <a href="#main" className="relative group m-2 lg:m-4">
              <span className="text-white">Home</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#faqs" className="relative group m-2 lg:m-4">
              <span className="text-white">Faq's</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#work" className="relative group m-2 lg:m-4">
              <span className="text-white">Projects</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#services" className="relative group m-2 lg:m-4">
              <span className="text-white">Services</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#testimonials" className="relative group m-2 lg:m-4">
              <span className="text-white">Testimonials</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#contact"><button className="bg-gradient-to-r from-purple-500 to-black-500 py-2 px-4 rounded-full ml-4 lg:ml-9">
              <span className="text-white">Contact</span>
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

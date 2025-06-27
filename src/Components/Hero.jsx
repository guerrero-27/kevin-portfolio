import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Myimage from '../assets/my-img.jpeg'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const AnimatedCounter = ({ end = 0, duration = 2000, className = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [hasAnimated, end, duration]);

  let display = count;
  if (suffix === "K") {
    display = (count / 1000).toFixed(1);
  }
  if (suffix === "+") {
    display = count;
  }

  return (
    <h1
      ref={counterRef}
      className={`text-[65px]  font-bold lg:text-[60px] md:text-[40px] md:font-bold transition-all duration-300 ${className}`}
    >
      {display}
      {suffix}
    </h1>
  );
};

const Hero = () => {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = glowRef.current;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    box.style.setProperty("--x", `${x}px`);
    box.style.setProperty("--y", `${y}px`);
  };

  return (
    <div id="main" className="relative min-h-[190vh] md:min-h-screen flex items-center justify-center bg-background overflow-hidden px-4 md:px-[10%]">
      <div className="absolute top-[-15%] left-[85%] w-[200px] h-[200px] bg-purple-600 rounded-full opacity-1 blur-[100px] pointer-events-none z-50"></div>
      <div className="md:block md:top-[30%] absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-purple-600 rounded-full opacity-1 blur-[100px] pointer-events-none z-50 hidden"></div>

      <div className="w-full h-screen absolute top-0 left-0 bg-background text-white flex justify-evenly items-center z-55 flex-col md:flex-row mt-[30px] md:mt-0">
        <div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="font-monserat text-[23px] font-bold mb-2">I am Kevin</h2>
            <h1 className="font-monserat text-[35px] font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              WEBDEVELOPER + <br />UX DESIGNER
            </h1>
            <p className="w-[300px] text-stone-400 text-[15px]  my-3 sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] lg:w-[600px] md:w-[300px]">
              I design and develop stunning websites that deliver exceptional user experiences. My goal is to create solutions that are not only functional but also visually appealing.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-start items-center my-4"
          >
            <a href="#resume">
              <button className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent rounded-full px-5 py-2 border-2 border-purple-300 cursor-pointer text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[15px] font-monserat">
                Resume
              </button>
            </a>
            
                        <a href="https://wa.me/639317969543" className="bg-gray-100 rounded-full p-2 lg:ml-4 ml-2">
                            <IoLogoWhatsapp className="text-green-500" size={24} />
                        </a>
                        <a href="https://www.facebook.com/kevinguerrero0827" className="bg-gray-100 rounded-full p-2 lg:ml-4 ml-2">
                            <FaFacebook className="text-blue-600" size={24} />
                        </a>
                        <a href="https://www.instagram.com/keev_dev/" className="bg-gray-100 rounded-full p-2 lg:ml-4 ml-2">
                            <FaInstagramSquare className="text-pink-600" size={24} />
                        </a>
          </motion.div>
        </div>

        <div
          ref={glowRef}
          onMouseMove={handleMouseMove}
          className="border-2 rounded-md p-[40px]  flex-col items-center md:p-[80px] bg-white/10 backdrop-blur-md border-white/30 shadow-lg rotate-6 relative overflow-hidden my-8 md:my-0 hidden lg:block md:block"
          style={{
            "--x": "50%",
            "--y": "50%",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: `radial-gradient(160px circle at var(--x) var(--y), rgba(162,89,255,0.35), transparent 70%)`,
              transition: "background 0.1s",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <img src={Myimage} alt="" className="h-[100px] w-[100px] rounded-full" />
            <h2 className="text-center mt-4 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
              Mark kevin Guerrero
            </h2>
          </div>
        </div>

          <div className="absolute bottom-[-85%] left-0 right-0 flex justify-evenly items-center bg-transparent p-2 rounded-t-lg z-30 flex-col md:flex-row md:bottom-10 h-screen md:h-auto px-[5%] md:px-[10%]">
            <div className="flex flex-col items-center md:flex-row">
              <AnimatedCounter end={5} className="text-[38px] md:text-[35px] lg:text-[60px]" />
              <p className="md:ml-2 md:w-[100px] text-slate-400 text-[13px] md:text-[14px] lg:text-[15px]">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <AnimatedCounter end={100} suffix="+" className="text-[38px] md:text-[35px] lg:text-[60px]" />
              <p className="md:ml-2 md:w-[100px] text-slate-400 text-[13px] md:text-[14px] lg:text-[15px]">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <AnimatedCounter end={2500} suffix="K" className="text-[38px] md:text-[35px] lg:text-[60px]" />
              <p className="md:ml-2 md:w-[100px] text-slate-400 text-[13px] md:text-[14px] lg:text-[15px]">Satisfied Users</p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <AnimatedCounter end={20} className="text-[38px] md:text-[35px] lg:text-[60px]" />
              <p className="md:ml-2 md:w-[100px] text-slate-400 text-[13px] md:text-[14px] lg:text-[15px]">Industries Served</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
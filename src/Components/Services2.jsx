import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCogs } from 'react-icons/fa';
import Man from '../assets/man.png'

const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode className="text-3xl text-violet-600 mb-2" />,
    description: 'Responsive websites using React, Tailwind, and modern frameworks.',
  },
  {
    title: 'Mobile Optimization',
    icon: <FaMobileAlt className="text-3xl text-violet-600 mb-2" />,
    description: 'Ensure your site looks great on all devices and screen sizes.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush className="text-3xl text-violet-600 mb-2" />,
    description: 'Clean and intuitive interfaces that enhance user experience.',
  },
  {
    title: 'Automation & Integrations',
    icon: <FaCogs className="text-3xl text-violet-600 mb-2" />,
    description: 'Connect tools, automate workflows, and simplify your processes.',
  },
];

const FloatingCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
    className="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition"
  >
    {icon}
    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </motion.div>
);

const Services2 = () => {
  return (
    <div id='services' className="bg-white py-20 px-4 md:px-[10%] relative overflow-hidden md:mb-36">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase text-pink-600 font-semibold mb-2">My Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">What I Can Do For You</h2>

        {/* --- Desktop Layout --- */}
        <div className="relative hidden md:flex justify-center items-center">
          {/* Developer Image */}
          <img
            src={Man}
            alt="Web Developer"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full z-10 bg-white p-2 border shadow-md"
          />

          {/* Floating Cards */}
          <div className="absolute lg:-top-10 lg:-left-[-10%] md:-top-10 md:-left-[5%] w-56">
            <FloatingCard {...services[0]} delay={0} />
          </div>
          <div className="absolute lg:-top-10 lg:-right-[-10%] md:-top-6 md:-right-[5%] w-56">
            <FloatingCard {...services[1]} delay={1} />
          </div>
          <div className="absolute lg:bottom-[-30%] lg:-left-[-15%] md:bottom-[-35%] md:-left-[-5%] w-56">
            <FloatingCard {...services[2]} delay={2} />
          </div>
          <div className="absolute lg:bottom-[-30%] lg:-right-[-15%] md:bottom-[-35%] md:-right-[5%] w-60">
            <FloatingCard {...services[3]} delay={3} />
          </div>
        </div>

        {/* --- Mobile Layout --- */}
        <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FloatingCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services2;

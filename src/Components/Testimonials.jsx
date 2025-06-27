import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Sarah Mitchell",
    position: "Founder, GreenLeaf Wellness",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Working with him was a game-changer for my brand. He transformed our outdated site into a modern, responsive experience. Highly recommended!",
  },
  {
    name: "Laura Chen",
    position: "Marketing Director, ZenFlow Yoga",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "His design sense and attention to detail are exceptional. The website now feels alive and professional. Super easy to work with, too.",
  },
  {
    name: "Carlos Reyes",
    position: "Owner, Reyes Auto Detailing",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Solid developer! Built us a sleek, mobile-first site that brought in more local clients. Very responsive and reliable throughout.",
  },
  {
    name: "Michelle Lartey",
    position: "Co-founder, EcoMarket PH",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "He built our e-commerce platform from scratch and integrated all the automation we needed. Our customers love the user experience.",
  },
  {
    name: "James Tan",
    position: "Startup Consultant, BrandBoost Asia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "He’s the kind of developer every startup needs. Clean code, intuitive UX, and great communication. Will definitely hire again.",
  },
];

const FloatingCard = ({ name, image, quote, position, active, onClick }) => (
  <motion.div
    initial={{ opacity: 1, y: 30 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0], // floating effect
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    onClick={onClick}
    className={`relative bg-white p-4 rounded-lg shadow-md mb-6 w-full cursor-pointer transition-all ${
      active ? "border-l-4 border-violet-500 scale-[1.02]" : "hover:scale-[1.01]"
    }`}
  >
    <div className="flex items-start gap-4">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover mt-1"
      />
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-violet-500">{position}</p>
        <p className="text-gray-500 text-sm mt-1">{quote}</p>
      </div>
    </div>
    <div
      className={`absolute top-2 right-3 text-2xl ${
        active ? "text-violet-500" : "text-gray-300"
      }`}
    >
      ❝
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            What My <br />
            Clients Say
          </h2>
          <p className="text-gray-600 mb-6">
            Over the years, I’ve worked with amazing founders and business owners to design
            and build custom websites that convert and stand out. Here's what they say about
            working with me.
          </p>
          
        </div>

        {/* Scrollable Testimonials */}
        <div className="h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-transparent">
          {testimonialsData.map((item, index) => (
            <FloatingCard
              key={index}
              {...item}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

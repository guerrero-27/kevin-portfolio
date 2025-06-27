import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const boxes = [
  {
    title: "What services do you offer?",
    description: "Web design, development, automation, e-commerce setup, and maintenance.",
  },
  {
    title: "How long does a project take?",
    description: "Timeline depends on the scope. Typically 2–10 days for standard sites, longer for complex ones.",
  },
  {
    title: "How do you handle delays?",
    description: "I inform clients early, provide a revised timeline, and maintain transparent updates.",
  },
  {
    title: "What’s the cost?",
    description: "Rates depend on the project. Free consultations help me provide an accurate quote.",
  },
  {
    title: "Is the website mobile-friendly?",
    description: "Yes, all websites are responsive across devices (desktop, tablet, mobile).",
  },
  {
    title: "Can you redesign my old website?",
    description: "Yes, I can modernize your existing site to improve look, speed, and functionality.",
  },
  {
    title: "What tools do you use?",
    description: "React, Tailwind, WordPress, System.io, Zapier, Figma, Git, and more.",
  },
  {
    title: "How do we start working together?",
    description: "Contact me → Consultation → Proposal + Quote → Agreement → Project starts.",
  },
];

const AccordionItem = ({ title, description, isActive, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div
      className={`w-[80%] md:w-full mx-auto rounded-xl overflow-hidden border transition-all duration-300 ${
        isActive ? 'bg-[#F5F3FF] border-purple-600' : 'bg-white border-gray-300'
      }`}
    >
      <button
        className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-black text-[13px] md:text-[15px]">{title}</span>
        <span className="text-purple-600">{isActive ? <FaMinus size={12} /> : <FaPlus size={12} />}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
        }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="px-6 pb-4 pt-1 text-gray-600 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id='faqs' className="w-full md:px-[10%] py-5 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-[25px] font-bold md:text-[30px] font-monserat">FAQs – Working with Me</h1>
        <motion.p
        variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
        className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Quick answers to common questions about my process, timelines, and services.
        </motion.p>
      </div>

      <div className="flex flex-col gap-4">
        {boxes.map((box, index) => (
          <AccordionItem
            key={index}
            title={box.title}
            description={box.description}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

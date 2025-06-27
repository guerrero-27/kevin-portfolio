import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const dotRefs = useRef([]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerHeight = rect.height;
    const triggerPoint = window.innerHeight / 2;
    const scrolled = triggerPoint - rect.top;
    const progress = Math.min(Math.max(scrolled / containerHeight, 0), 1);

    setLineHeight(progress * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDotActive = (index) => {
    if (!dotRefs.current[index]) return false;
    const dotTop = dotRefs.current[index].getBoundingClientRect().top;
    const lineTop = containerRef.current.getBoundingClientRect().top + (lineHeight / 100) * containerRef.current.offsetHeight;
    return dotTop <= lineTop;
  };

  const Dot = ({ index }) => (
    <div
      ref={(el) => (dotRefs.current[index] = el)}
      className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white transition-colors duration-300 ${
        isDotActive(index) ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    ></div>
  );

  return (
    <section ref={containerRef} id='resume' className="relative py-20 px-4 max-w-6xl mx-auto text-gray-800">
      
      <div className="absolute lg:top-[25%] left-1/2 transform -translate-x-1/2 lg:h-[65%] w-1 bg-gray-300">
        <div
          className="absolute left-0 top-0 w-1 bg-blue-500 transition-all duration-100 ease-out"
          style={{ height: `${lineHeight}%` }}
        />
      </div>

      
      <h1 className="text-3xl font-bold text-center mb-2">Resume</h1>
      <motion.div
      variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
      >
        <p 
        className="text-center mb-16 text-sm text-gray-600">
            I am a skilled and dedicated web developer specializing in frontend development,
            automation, and social media management.
        </p>
      </motion.div>
      

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 relative z-10">
        <div 
        
        className="space-y-16">
         
          <motion.div 
          variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
          className="relative pl-10">
            <Dot index={0} />
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-sm italic">
              Creative and detail-oriented Front-End Web Developer with over 3 years of experience.
            </p>
            <ul className="text-sm mt-2 text-gray-700">
              <li>📍 Capalonga, Philippines</li>
              <li>📞 +63 9317969543</li>
              <li>📧 markkevinguerrero7@gmail.com</li>
            </ul>
          </motion.div>

          
          <motion.div
          variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
          className="relative pl-10">
            <Dot index={1} />
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Bachelor of Science in Information Technology</span><br />
              <span className="italic">2019 - 2022</span><br />
              Our Lady Of Lourdes College Foundation, Philippines
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
         
          <motion.div 
          variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
          className="relative pl-10">
            <Dot index={2} />
            <h2 className="text-xl font-bold mb-2">Junior Front-End Developer</h2>
            <p className="text-sm italic">2020 - 2021 | InnovateX Digital - Remote</p>
            <ul className="text-sm list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Designed and built responsive websites.</li>
              <li>Enhanced performance with optimization techniques.</li>
              <li>Converted mockups into HTML/CSS/JS code.</li>
            </ul>
          </motion.div>

          
          <motion.div 
          variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
          className="relative pl-10">
            <Dot index={3} />
            <h2 className="text-xl font-bold mb-2">Front-End Developer</h2>
            <p className="text-sm italic">2024 - Present | TechWave Solutions</p>
            <ul className="text-sm list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Build modern websites using HTML5, CSS3, JS.</li>
              <li>Work with back-end teams and APIs.</li>
              <li>Optimize SEO and performance.</li>
              <li>Use animations, sliders, modals, etc.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

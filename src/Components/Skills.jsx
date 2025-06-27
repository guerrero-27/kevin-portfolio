import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaReact, FaFigma, FaCss3Alt, FaHtml5, FaPhp, FaDatabase, FaJs } from "react-icons/fa";
import logo from '../assets/my-logo.png'

const Skills = () => {
  const cardRef = useRef(null);
  const [maskStyle, setMaskStyle] = useState({});
  const [isEffectEnabled, setIsEffectEnabled] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsEffectEnabled(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (!isEffectEnabled) {
      setMaskStyle({});
      return;
    }

    const card = cardRef.current;

    const updateMask = (x, y) => {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      setMaskStyle({
        WebkitMaskImage: `radial-gradient(
          550px at ${x}px ${y}px,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.4) 60%,
          rgba(255, 255, 255, 0.4) 70%
        )`,
        maskImage: `radial-gradient(
          550px at ${x}px ${y}px,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.4) 60%,
          rgba(255, 255, 255, 0.4) 70%
        )`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        transition: 'mask-image 0.1s ease, -webkit-mask-image 0.1s ease',
      });
    };

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      updateMask(x, y);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = card.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        updateMask(x, y);
      }
    };

    const handleLeave = () => {
      setMaskStyle({
        WebkitMaskImage: `radial-gradient(
          150px at -100% -100%,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 255, 255, 0.4) 100%
        )`,
        maskImage: `radial-gradient(
          150px at -100% -100%,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 255, 255, 0.4) 100%
        )`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        transition: 'mask-image 0.3s ease, -webkit-mask-image 0.3s ease',
      });
    };

    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleLeave);
      card.addEventListener('touchmove', handleTouchMove);
      card.addEventListener('touchend', handleLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleLeave);
        card.removeEventListener('touchmove', handleTouchMove);
        card.removeEventListener('touchend', handleLeave);
      }
    };
  }, [isEffectEnabled]);

  // Responsive icon positions (percentages for responsiveness)
  const skillTags = [
    { icon: FaHtml5, color: "#e44d26", top: '10%', left: '70%' },
    { icon: FaCss3Alt, color: "#1572b6", top: '25%', left: '15%' },
    { icon: FaReact, color: "#61dafb", top: '60%', left: '80%' },
    { icon: FaFigma, color: "#a259ff", top: '80%', left: '40%' },
    { icon: FaPhp, color: "#7377ad", top: '60%', left: '10%' },
    { icon: FaDatabase, color: "#f29111", top: '85%', left: '70%' },
    { icon: FaJs, color: "#f7df1e", top: '20%', left: '85%' },
  ];

  // Logo center (percent-based for responsiveness)
  const logoCenter = { top: '50%', left: '50%' };

  return (
    <div className="relative min-h-screen bg-[#0b0f1a] text-white px-4 py-16 md:px-[10%]">
      {/* Header */}
      <div className="text-center mb-16 z-20 relative">
        <h1 className="text-4xl md:text-5xl font-bold">Tech Mastery</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
           My skills cover the full stack of web development. I specialize in React, Figma, CSS3, HTML5, PHP, JavaScript, and database management. Each icon below represents a technology where I excel—delivering fast, creative, and reliable solutions for every project.
        </p>
      </div>

      {/* Feature Card */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-3xl p-10 flex flex-col-reverse md:flex-row gap-10 shadow-xl bg-gradient-to-br from-[#111827] to-[#0b0f1a] min-h-[800px] md:min-h-0"
        style={isEffectEnabled ? maskStyle : {}}
      >
        <div className="block absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-purple-600 rounded-full opacity-100 blur-[50px] pointer-events-none z-10"></div>

        {/* Glow Border Effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl z-10"
          style={
            isEffectEnabled
              ? {
                  padding: '2px',
                  backgroundColor: '#0b0f1a',
                  background: `radial-gradient(
                    150px at var(--mouse-x, -100px) var(--mouse-y, -100px),
                    rgba(168, 85, 247, 0.7),
                    rgba(99, 102, 241, 0.5),
                    transparent 70%
                  )`,
                  WebkitMaskImage: `radial-gradient(150px at var(--mouse-x, -100px) var(--mouse-y, -100px), white 0%, transparent 70%)`,
                  maskImage: `radial-gradient(150px at var(--mouse-x, -100px) var(--mouse-y, -100px), white 0%, transparent 70%)`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  filter: 'blur(1.5px)',
                  transition: 'all 0.1s ease',
                }
              : {}
          }
        />

        {/* Left Text Content */}
        <div className=" z-20 md:flex-1">
          <h2 className="text-2xl font-semibold mb-3">My Tech Stack & Skills</h2>
          <p className="text-gray-300 mb-6">
            I am highly skilled and experienced in modern web technologies and tools. From building robust React apps, designing in Figma, styling with CSS3 and HTML5, to backend development with PHP and databases, and creating dynamic experiences with JavaScript—these are the technologies I use to deliver high-quality, efficient, and creative solutions.
          </p>

          
        </div>

        {/* Floating Tags with Arrows */}
        <div className="flex-1 relative z-20">
          {/* SVG arrows */}
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            width="100%"
            height="100%"
          >
            {skillTags.map((item, idx) => (
              <line
                key={idx}
                x1="50%"
                y1="50%"
                x2={item.left}
                y2={item.top}
                stroke={item.color}
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            ))}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
              </marker>
            </defs>
          </svg>
          {/* Logo */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              width: 64,
              height: 64,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#192235] rounded-2xl flex items-center justify-center text-2xl">
              <img src={logo} alt="" className="w-10 h-10" />
            </div>
          </div>
          {/* Icons */}
          {skillTags.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="absolute rounded-full font-medium shadow-md border-white flex items-center justify-center
                  text-lg w-8 h-8 md:text-3xl md:w-12 md:h-12"
                style={{
                  top: item.top,
                  left: item.left,
                  background: "#18181b",
                  border: `2px solid ${item.color}`,
                  color: item.color,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
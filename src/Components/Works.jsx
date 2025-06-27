import React, { useState } from 'react';
import { FaLink, FaSearch } from 'react-icons/fa';
import workimg from  '../assets/1.png';
import workimg1 from  '../assets/2.png';
import workimg2 from  '../assets/3.png';
import workimg3 from  '../assets/4.png';
import workimg4 from  '../assets/5.png';
import workimg5 from  '../assets/6.png';
const workItems = [
  {
    id: 1,
    title: 'FlexLaunch',
    desc: 'Digital Creations is a premier web design and development agency...',
    image: workimg,
    category: 'agency',
  },
  {
    id: 2,
    title: 'QuickGo',
    desc: 'Online appointment and booking system with responsive UI.',
    image: workimg1,
    category: 'agency',
  },
  {
    id: 3,
    title: 'MPower Gym',
    desc: 'Build your body & shape yourself. Gym website with clean layout.',
    image: workimg2,
    category: 'gym',
  },
   {
    id: 4,
    title: 'OTw',
    desc: '',
    image: workimg3,
    category: 'food',
  },
   {
    id: 5,
    title: 'Sky Wings',
    desc: '',
    image: workimg4,
    category: 'travel',
  },
   {
    id: 6,
    title: 'HealthCare Plus',
    desc: '',
    image: workimg5,
    category: 'med',
  },
  
];

const categories = ['all', 'agency', 'food', 'travel', 'med', 'gym'];

const Works = () => {
  const [active, setActive] = useState('all');

  const filteredItems =
    active === 'all'
      ? workItems
      : workItems.filter((item) => item.category === active);

  return (
    <section id='work' className="py-16 px-4 mx-auto bg-white md:w-full md:px-[10%]">
      <h2 className="text-3xl font-bold text-center mb-2 text-black">Portfolio</h2>
      <p className="text-center max-w-2xl mx-auto mb-6 text-gray-500">
        Explore my work showcasing visually appealing, high-performing websites and digital solutions.
      </p>

      
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              active === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
          >
            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 p-11 lg:p-[90px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden border rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />

           
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300 p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{item.desc}</p>

              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700"
                >
                  <FaLink />
                </a>
                <a
                  href="#"
                  className="text-white bg-gray-600 p-2 rounded-full hover:bg-gray-700"
                >
                  <FaSearch />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Works;

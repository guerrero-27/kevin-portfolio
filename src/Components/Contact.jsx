import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString();
    setCurrentTime(formattedTime);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7o8elke', 'template_j0fm8gh', form.current, 'Mb9qySbySQKKUqzsV')
      .then(() => {
        document.getElementById('successPopup').classList.remove('hidden');
        setTimeout(closePopup, 5000);
        form.current.reset();
      })
      .catch(() => {
        alert('❌ Failed to send message. Please try again.');
      });
  };

  const closePopup = () => {
    document.getElementById('successPopup').classList.add('hidden');
  };

  return (
    <div id='contact' className="bg-[#0f172a] text-white font-sans min-h-screen flex items-center justify-center px-4 py-20 relative">
      
     
      <div id="successPopup" className="fixed inset-0 bg-black bg-opacity-30 z-50 hidden  items-center justify-center">
        <div className="p-4 bg-green-100 text-green-900 border border-green-200 rounded-md w-full max-w-md mx-auto">
          <div className="flex justify-between items-start">
            <div className="flex">
              <div className="mr-3 pt-1">
                <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.445 12.6675A.9.9 0 0 0 7.1424 13.91l2.5726 2.7448c.3679.3856.9884.3689 1.335-.036l5.591-7.0366a.9.9 0 0 0-1.3674-1.1705l-4.6548 5.9132a.4.4 0 0 1-.607.0252l-1.567-1.6826zM1.9995 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-md font-medium">Success!</h4>
                <p className="text-sm">Your message has been sent successfully.</p>
                <button
                  onClick={closePopup}
                  className="mt-3 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 sm:w-auto sm:text-sm"
                >
                  OK
                </button>
              </div>
            </div>
            <button
              onClick={closePopup}
              className="focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.6555 6.3331a.9.9 0 0 1 .001 1.2728l-4.1032 4.1085a.4.4 0 0 0 0 .5653l4.1031 4.1088a.9002.9002 0 0 1 .0797 1.1807l-.0806.092a.9.9 0 0 1-1.2728-.0009l-4.1006-4.1068a.4.4 0 0 0-.5662 0l-4.099 4.1068a.9.9 0 1 1-1.2738-1.2718l4.1027-4.1089a.4.4 0 0 0 0-.5652L6.343 7.6059a.9002.9002 0 0 1-.0796-1.1807l.0806-.092a.9.9 0 0 1 1.2728.0009l4.099 4.1055a.4.4 0 0 0 .5662 0l4.1006-4.1055a.9.9 0 0 1 1.2728-.001z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 p-6 md:p-10">
        
       
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            Have a web development project or need help with your website? Let's make it happen.
          </p>
          <p className="text-sm text-gray-400 mb-2">Follow us</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/kevinguerrero0827" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600" size={24} />
            </a>
            <a href="https://www.instagram.com/keev_dev/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-pink-600" size={24} />
            </a>
            <a href="https://wa.me/639317969543" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="text-green-500" size={24} />
            </a>
          </div>
        </div>

        
        <form ref={form} onSubmit={sendEmail} className="bg-[#1e293b] rounded-lg p-6 space-y-4">
          <input type="hidden" name="time" value={currentTime} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full p-2 mt-1 rounded bg-[#334155] text-white placeholder-gray-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-2 mt-1 rounded bg-[#334155] text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Number"
                className="w-full p-2 mt-1 rounded bg-[#334155] text-white placeholder-gray-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Ex. Careers"
                className="w-full p-2 mt-1 rounded bg-[#334155] text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Type your message here..."
              className="w-full p-2 mt-1 rounded bg-[#334155] text-white placeholder-gray-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

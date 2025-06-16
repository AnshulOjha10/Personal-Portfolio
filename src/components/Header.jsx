import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react"
function Header() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2 w-full">
      <motion.div 
      initial={{ scale: 0}}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="w-35 h-35 overflow-hidden rounded-full mb-3 ">
      <img src={assets.profile_img} className="rounded-full" />
      </motion.div>

      <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:0.3,}}
      className="flex items-center gap-2 text-xl md:text-2xl">
        Hi! I'm Anshul Ojha
        <img src={assets.hand_icon} className="w-6" />
      </motion.h3>
      <div className="text-center p-3 md:text-l">
        <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.5,}}
        className="text-3xl md:text-5xl mb-3">
          Frontend developer based in India.
        </motion.h1>
        <motion.p
        initial={{ opacity: 0,}}
        whileInView={{ opacity: 1,}}
        transition={{ duration: 0.6, delay:0.7,}}
          className="text-gray-500  max-w-2xl mx-auto"> I build user-focused web apps, design powerful backend systems, and solve complex Java and DSA challenges to deliver efficient, scalable tech solutions.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="px-10 py-3 border border-white rounded-full bg-white text-black flex items-center gap-2" href="#contact">
          Contact me
          <img src={assets.right_arrow_bold} className="w-4" alt="" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Resume.pdf"
          download=""
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <img src={assets.download_icon} className="w-4" alt="" />
        
        </motion.a>

      </div>
      <ul className='flex gap-4 mt-4'>
        <li><a href="https://www.linkedin.com/in/anshul-ojha/" target='_blank'>LinkedIn</a></li>
        <li><a href="https://www.instagram.com/aanshul_ojha07/" target='_blank'>Instagram</a></li>
        <li><a href="https://github.com/AnshulOjha10" target='_blank'>Github</a></li>
      </ul>
    </div>
  );
}

export default Header;


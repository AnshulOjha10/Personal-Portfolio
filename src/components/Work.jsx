import React from "react";
import assets, { workData } from "../assets/assets";
import { motion } from "motion/react"
function Work() {
  return (
    <motion.div
    initial={{ opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{ duration: 1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg">My Portfolio</motion.h4>
      <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}      
        className="text-center text-5xl">My latest work</motion.h2>

      <motion.p 
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      <motion.div 
                            initial={{ opacity: 0,}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.6, delay: 0.9 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workData.map((project, index) => (
          <a target="_blank" href={project.URL}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-[#1f1f1f] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className=" font-semibold">{project.title}</h2>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
              <div className="rounded-full bg-gray-500 p-1 group-hover:bg-gray-700 transition shadow-[4px_4px_0_#ebf498]">
                <img src="\send-black.svg" className="w-5"/>
              </div>
            </div>
          </motion.div>
          </a>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black duration-300 ">
          Show more →
        </button>
      </div>
    </motion.div>
  );
}

export default Work;

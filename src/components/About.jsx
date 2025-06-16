import React from "react";
import assets, { infoList, toolsData } from "../assets/assets";
import { motion } from "motion/react";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-10"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <img
            src={assets.user_image}
            className="w-69 rounded-3xl hover:scale-101 duration-500"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl text-center md:text-start">
            Hi, I’m a second-year B.Tech CSE student at Medicaps University,
            Indore. I got into coding when I realized I could turn ideas into
            real products through code. Since then, I’ve loved building web
            apps, exploring backend systems, and solving Java and DSA problems.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl hover:bg-gray-900 hover:-translate-y-1 duration-500 p-6 cursor-pointer hover:shadow-[4px_4px_0_rgb(229,224,221)]"
                key={index}
              >
                <img className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-500">{title}</h3>
                <p className="text-gray-300 md:text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-500"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:shadow-[4px_4px_0_rgb(229,224,221)]"
              >
                <img
                  src={tool}
                  alt="Tools"
                  key={index}
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;

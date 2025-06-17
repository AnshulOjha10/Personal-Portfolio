import React from "react";
import assets, { serviceData } from "../assets/assets";
import { motion } from "motion/react";
function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 min-h-screen flex flex-col items-center justify-center gap-2"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        I am a frontend developer from India, passionate about building modern
        web applications using technologies like React, Node.js, and MongoDB. I
        have collaborated on multiple projects across startups and growing tech
        companies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="group border border-gray-200 rounded-lg px-8 py-12 cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:-translate-y-1  hover:shadow-[4px_4px_0_rgb(229,224,221)] w-[250px] md:w-[220px] text-center"
          >
            <img src={icon} alt={title} className="w-10 mx-auto mb-4" />
            <h3 className="text-lg mb-4 font-semibold">{title}</h3>
            <p className="text-sm text-gray-500 leading-5 mb-6">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center justify-center gap-2 text-sm text-gray-500 "
            >
              Read more
              <img src={assets.right_arrow} className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;

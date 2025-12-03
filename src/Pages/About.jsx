import React from "react";
import { motion } from "framer-motion";

const aboutData = [

  {
    id: 1,
    title: "Our Mission",
    description:
      "Making plant care simple and joyful with expert guidance for greener lifestyles.",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "A world where every home thrives with eco‑friendly indoor plants.",
  },
  {
    id: 3,
    title: "Our Story",
    description:
      "GreenNest began with a vision: healthy plants should be easy for everyone to access.",
  },
];

const About = () => {
  return (
    <div className="w-full bg-gray-50 ">
      <section className="bg-green-50 py-16 px-6 md:px-14">
        <div className=" mx-auto text-center">
          <motion.h1  initial={{ opacity: 0, y: -40 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}  className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight" >  About GreenNest
          </motion.h1>
          <motion.p  initial={{ opacity: 0 }}  animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}  className=" mt-6 text-lg md:text-xl w-[94%] md:w-[85%] text-center mx-auto" > GreenNest is your trusted companion for healthy indoor plants, expert care tips, and eco‑friendly inspiration. We believe every home deserves a touch of nature.  </motion.p>
        </div>
      </section>

      <section className="py-10 bg-green-50 px-6 md:px-14">
        <div className="grid md:grid-cols-3 gap-10">
          {aboutData.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }} transition={{ duration: 0.6, delay: index * 0.2 }}  viewport={{ once: false, amount: 0.3 }} 
              className="bg-white shadow-md rounded-lg p-8 border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300" >
              <h2 className="text-2xl font-bold text-green-700 mb-4"> {item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-green-50 text-center px-6 md:px-14">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-green-800">  Ready to Start Your Green Journey? </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className=" mt-2" > Browse our collection and discover plants that bring life to your space. </motion.p>
        <motion.a href="/plants" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 inline-block bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 duration-200" > Explore Now  </motion.a>
      </section>
    </div>
  );
};

export default About;
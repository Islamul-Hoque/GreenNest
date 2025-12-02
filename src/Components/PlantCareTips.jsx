import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/careTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 14 } },
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl text-center mb-12">
        <motion.h2  initial={{ opacity: 0, y: -20 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.8 }}  className="text-[1.85rem] md:text-[2.3rem] font-extrabold text-green-800" >  Plant Care Tips  </motion.h2>
      </div>

      <motion.div  className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4" variants={containerVariants} initial="hidden"  whileInView="visible"  viewport={{ once: false, amount: 0.3 }} >
        {tips.map((tip) => (
          <motion.div  key={tip.id} variants={cardVariants} whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 120, damping: 12 } }} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 cursor-pointer" >
            <div className="mb-4">
              <img src={tip.image} alt={tip.title} className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlantCareTips;
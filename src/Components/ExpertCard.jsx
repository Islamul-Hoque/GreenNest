import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExpertCard = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("/experts.json")
            .then((res) => res.json())
            .then((data) => setExperts(data));
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
        <div className="pt-12 pb-16">
            <div className="mx-auto">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.8 }}  viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10" > Meet Our Green Experts </motion.h2>

                <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6"  variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} >
                    {experts.map((expert) => (
                    <motion.div key={expert.id} variants={cardVariants}  whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 120, damping: 12 } }}  className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 cursor-pointer" >
                        <img src={expert.image} alt={expert.name}  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200" />
                        <h3 className="text-xl font-bold text-green-700">{expert.name}</h3>
                        <p className="text-gray-600 font-medium">{expert.specialty}</p>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ExpertCard;
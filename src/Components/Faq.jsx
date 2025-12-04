import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
    const faqs = [
    {
        id: 1,
        question: "What is GreenNest?",
        answer: "GreenNest is your trusted companion for healthy indoor plants and eco‑friendly inspiration. We focus on bringing greenery into your home and workspace with plants that are easy to care for, visually pleasing, and suitable for different lifestyles. Our goal is to make plant care simple and enjoyable, even if you are a beginner."
    },
    {
        id: 2,
        question: "Do you provide plant care tips?",
        answer: "Yes! Each plant comes with easy care instructions that explain watering frequency, sunlight requirements, and soil preferences. In addition, we share seasonal care guides and practical tips on our Plant Care page, so you can learn how to keep your plants thriving all year round. Even if you have limited experience, our step‑by‑step advice makes it easy."
    },
    {
        id: 3,
        question: "Which plants are best for low light?",
        answer: "Snake Plant, ZZ Plant, and Peace Lily are excellent choices for low‑light spaces. These plants are hardy, require minimal watering, and can survive in areas where direct sunlight is limited. They are perfect for apartments, offices, or rooms with shaded corners. With proper care, they not only survive but also add a fresh, calming vibe to your environment."
    },
    {
        id: 4,
        question: "How often should I water my plants?",
        answer: "Most indoor plants need watering once or twice a week, but the exact frequency depends on the season, humidity, and type of plant. A good rule of thumb is to check the soil: if the top inch feels dry, it’s time to water. Overwatering is a common mistake, so always ensure proper drainage. During winter, plants usually need less water compared to summer."
    },
    {
        id: 5,
        question: "Can indoor plants improve air quality?",
        answer: "Yes, many indoor plants naturally filter toxins and release oxygen, which helps improve the air quality in your home or workspace. Popular options like Snake Plant, Areca Palm, and Peace Lily are known for their air‑purifying qualities. Having greenery indoors not only makes the environment healthier but also reduces stress and boosts productivity."
    },
    {
        id: 6,
        question: "What is the Healthy Plant Guarantee?",
        answer: "We ensure every plant is fresh, healthy, and ready to thrive in your space. If any plant arrives damaged or unhealthy, we replace it free of charge under our Healthy Plant Guarantee. This policy reflects our commitment to quality and customer satisfaction, so you can shop with confidence knowing that your greenery investment is protected."
    }
];

    return (
        <section className="bg-green-50 py-16 px-6 md:px-14">
            <div className="text-center mb-12">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-green-800">Frequently Asked Questions</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-3 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">Get detailed guidance on GreenNest, plant care, and our Healthy Plant Guarantee.</motion.p>
            </div>

            <div className="max-w-7xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                        <div className="collapse-title font-semibold text-[1.2rem]">{faq.question}</div>
                        <div className="collapse-content text-gray-600 text-lg leading-relaxed">{faq.answer}</div>
                    </div>
                </motion.div>
                ))}
            </div>
    </section>
);
};

export default Faq;
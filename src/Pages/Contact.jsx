import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaClock, FaFacebookF, FaInstagram, FaPinterestP, FaLeaf, FaBox, FaShieldAlt, FaComments } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => { e.preventDefault(); toast.success("Message sent successfully!"); e.target.reset(); };

  return (
    <section className="bg-green-50 py-16 px-6 md:px-14">
      <div className="text-center mb-12">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-green-800">Contact Us</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-3 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">We’d love to hear from you! Reach out for plant care tips, orders, or collaborations.</motion.p>
      </div>

      <div className=" mx-auto grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
          <h3 className="text-2xl font-bold text-green-700">Get in Touch</h3>
          <p className="text-gray-700">Have questions or need help? Reach out to us anytime.</p>
          <div className="flex items-center gap-3 text-gray-700"><FaPhoneAlt className="text-green-700" /><span>+880 1234-567890</span></div>
          <div className="flex items-center gap-3 text-gray-700"><FaEnvelope className="text-green-700" /><span>support@greennest.com</span></div>
          <div className="flex items-center gap-3 text-gray-700"><FaMapMarkerAlt className="text-green-700" /><span>Dhaka, Bangladesh</span></div>
          <div className="flex items-center gap-3 text-gray-700"><FaClock className="text-green-700" /><span>Available: Sat–Thu, 9am–6pm</span></div>
          <div className="flex items-center gap-3 "><FaComments className="text-green-700" /><span>We usually reply within 24 hours</span></div>
          <div className="flex items-center gap-3 text-gray-700"><FaLeaf className="text-green-700" /><span>Need plant care tips? Visit our <a href="/faq" className="text-green-700 hover:underline">FAQ page</a></span></div>
          <div className="flex items-center gap-3 text-gray-700"><FaShieldAlt className="text-green-700" /><span>100% Healthy Plant Guarantee</span></div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white shadow-md rounded-lg p-8 space-y-4">
          <div><label className="block text-sm font-medium text-gray-700">Name</label><input defaultValue={user?.displayName} type="text" required placeholder="Enter your name" className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
          <div><label className="block text-sm font-medium text-gray-700">Email</label><input defaultValue={user?.email || user?.providerData?.[0]?.email} type="email" placeholder="Enter your email" required className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" /></div>
          <div><label className="block text-sm font-medium text-gray-700">Message</label><textarea rows="4" required placeholder="Write your message here..." className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"></textarea></div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">Send Message</motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
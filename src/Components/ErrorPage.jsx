import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-green-50 px-6">
            <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
                <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-8xl md:text-9xl font-extrabold text-green-700">404</motion.h1>
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">Oops! Page Not Found</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-3 text-gray-600 max-w-md mx-auto">Looks like you’ve taken a wrong turn. Let’s bring you back to nature — head home to explore our plants.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6">
                    <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 hover:scale-105 transform transition duration-300 ease-in-out">Back to Home</Link>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default ErrorPage;
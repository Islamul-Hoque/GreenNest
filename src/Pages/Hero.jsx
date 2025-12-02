import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    slogan: "Refresh your space with the beauty of nature",
    subtitle:
      "Start your green journey with stunning, easy-care indoor plants that brighten any corner.",
    image: "https://i.ibb.co/WNcBHfts/image.jpg",
  },
  {
    slogan: "Grow with confidence, care with knowledge",
    subtitle:
      "Discover expert insights on light, watering, and humidity — for healthy, thriving plants every day.",
    image: "https://i.ibb.co.com/yczXvtZQ/indoor-plants-in-design.jpg",
  },
  {
    slogan: "Bring freshness and harmony into your home",
    subtitle:
      "Explore air-purifying plants that elevate your decor and create a healthier, happier living space.",
    image: "https://i.ibb.co.com/dJKtKjpG/IMG-9409-1500x.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden ">

      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="absolute inset-0 bg-black/45"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight"
            >
              {slides[index].slogan}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-3xl mt-4 md:text-xl text-white/90"
            >
              {slides[index].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/plants"
                className="mt-6 inline-block bg-green-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-700 transition"
              >
                Explore Our Plants
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
      >
        <ChevronRight />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative"
          >
            <motion.div
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              animate={{
                scale: i === index ? 1.3 : 1,
                opacity: i === index ? 1 : 0.5,
              }}
            ></motion.div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
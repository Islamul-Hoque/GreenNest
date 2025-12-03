import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router"; 
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    slogan: "Refresh your space with the beauty of nature",
    // image: "https://i.ibb.co/WNcBHfts/image.jpg",
    image: "https://arterahome.com/cdn/shop/articles/Natural_Decor_for_Your_Home_1.png?v=1743406343",
  },
  {
    slogan: "Grow with confidence, care with knowledge",
    image: "https://i.ibb.co.com/WN4vMJbt/pic-2.jpg",
    // image: "https://i.ibb.co.com/yczXvtZQ/indoor-plants-in-design.jpg",
  },
  {
    slogan: "Bring freshness and harmony into your home",
    // image: "https://i.ibb.co.com/dJKtKjpG/IMG-9409-1500x.jpg",
    image: "https://pharandespaces.com/wp-content/uploads/2024/09/Pharande-Spaces-Blog-Image-2.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const prevSlide = () => { setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); };
  const nextSlide = () => { setIndex((prev) => (prev + 1) % slides.length); };

  const slideVariants = {
    initial: { 
      opacity: 0, 
      scale: 1.1, 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
    },
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <AnimatePresence>
        <motion.div key={index} variants={slideVariants}  initial="initial"  animate="animate"  exit="exit"  transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.9] }}  className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slides[index].image})` }}  >
          <div className="absolute inset-0 bg-black/55"></div> 
          <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
            <motion.h2  initial={{ y: 20, opacity: 0 }}  animate={{ y: 0, opacity: 1 }}  transition={{ delay: 0.3, duration: 0.7 }}  className="text-4xl md:text-6xl font-extrabold max-w-5xl leading-tight"  >  {slides[index].slogan}  </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{ delay: 0.5 }} >
              <Link to="/plants" className="mt-8 inline-block bg-green-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 shadow-xl"  > Explore Our Plants  </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button  onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition z-10"  ><ChevronLeft className="w-6 h-6 hidden md:block"/> </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition z-10" > <ChevronRight className="w-6 h-6 hidden md:block"/> </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button  key={i} onClick={() => setIndex(i)}  className="relative" > <motion.div  className={`h-3 w-3 rounded-full ${ i === index ? "bg-white" : "bg-white/50"  }`} animate={{  scale: i === index ? 1.4 : 1,   opacity: i === index ? 1 : 0.6, }}   transition={{ type: "spring", stiffness: 300 }}   ></motion.div>   </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
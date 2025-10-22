// src/Pages/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; 

  const slides = [
  {
    slogan: "Refresh your space with the beauty of nature",
    subtitle: "Start your green journey with stunning, easy-care indoor plants that brighten any corner.",
    image: "https://i.ibb.co/WNcBHfts/image.jpg",
  },
  {
    slogan: "Grow with confidence, care with knowledge",
    subtitle: "Discover expert insights on light, watering, and humidity — for healthy, thriving plants every day.",
    // image: "https://i.ibb.co/Y74Dk6ZL/lot-of-houseplants-growing-on-window-sill-from-left-royalty-free-image-1747254223-pjpeg-crop-0-668xw.jpg",
    // image: "https://i.ibb.co.com/KpfPMJMn/green-guide-to-indoor-gardening-decorating-plants-with-home-decor.png",
    image: "https://i.ibb.co.com/yczXvtZQ/indoor-plants-in-design.jpg",
  },
  {
    slogan: "Bring freshness and harmony into your home",
    subtitle: "Explore air-purifying plants that elevate your decor and create a healthier, happier living space.",
    image: "https://i.ibb.co/j9BHgcMk/types-of-indoor-plant-types-cover-image.jpg",
  }
];

const Hero = () => {
  return (
    <div className="w-full h-[87vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade" 
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} >
              <div className="absolute inset-0 bg-black/28"></div>
              <div className="relative text-center text-white px-4 md:px-10 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl leading-tight"> {slide.slogan} </h2>
                <p className="text-lg md:text-2xl drop-shadow-lg mb-8 font-medium"> {slide.subtitle}</p>
                <button className="btn btn-lg bg-green-700 text-white border-0 rounded-[0.8rem] text-lg shadow-xl hover:bg-green-800 transition duration-300"> Bring Nature Home</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
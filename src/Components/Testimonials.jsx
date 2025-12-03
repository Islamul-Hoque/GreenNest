"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from 'react-icons/fa'; 

const testimonials = [
  { 
    id: 1, 
    name: "Ayesha Rahman", 
    photo: "https://randomuser.me/api/portraits/women/1.jpg", 
    review: "The indoor plants were fresh and instantly brightened my living room.", 
    position: "Home Decor Enthusiast" 
  },
  { 
    id: 2, 
    name: "Tanvir Hasan", 
    photo: "https://randomuser.me/api/portraits/men/2.jpg", 
    review: "Great quality plants with clear care tips. My balcony looks alive now.", 
    position: "Urban Gardener" 
  },
  { 
    id: 3, 
    name: "Sophia Lee", 
    photo: "https://randomuser.me/api/portraits/women/3.jpg",  
    review: "Stylish pots and healthy plants. Perfect for my studio workspace.", 
    position: "Green Living Advocate" 
  },
  { 
    id: 4, 
    name: "David Kim", 
    photo: "https://randomuser.me/api/portraits/men/4.jpg",  
    review: "Easy to order and quick delivery. My office corner feels refreshing.", 
    position: "Indoor Gardening Lover" 
  },
  { 
    id: 5, 
    name: "Emma Wilson", 
    photo: "https://randomuser.me/api/portraits/women/5.jpg",  
    review: "Lovely collection of air‑purifying plants. Breathing feels lighter at home.", 
    position: "Nature Enthusiast" 
  },
  { 
    id: 6, 
    name: "Liam Brown", 
    photo: "https://randomuser.me/api/portraits/men/6.jpg",  
    review: "Customer support guided me well. My plants are thriving beautifully.", 
    position: "Wellness Seeker" 
  },
];


const Testimonials = () => {
  return (
    <section className="pb-20 px-6 md:px-16  text-gray-800">
      <div className="container mx-auto max-w-6xl text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
  Hear From <span className="text-gradient">Plant Lovers</span>
</h2>
<p className="text-gray-600 text-lg max-w-2xl mx-auto">
  Honest feedback from our happy customers who brought greenery into their homes.
</p>
  </div>

      <Swiper loop={true} effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          scale: 0.9,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, coverflowEffect: { depth: 50, modifier: 1.5 } },
          640: { slidesPerView: 1, coverflowEffect: { depth: 70, modifier: 1.8 } },
          768: { slidesPerView: 2, coverflowEffect: { depth: 80, modifier: 1.5 } },
          1024: { slidesPerView: 3, coverflowEffect: { depth: 100, modifier: 2 } },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} >
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col h-full gap-4 border border-purple-100 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className=" text-purple-200 opacity-80 "> <FaQuoteLeft size={28} /> </div>

              <div><p className="text-gray-700 leading-relaxed text-lg grow">{t.review}</p></div>

              <div> 
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-purple-200 p-1 overflow-hidden shrink-0">  <img className="rounded-full object-cover w-full h-full" src={t.photo} alt={t.name} /> </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                    <p className="text-gray-500 text-sm">{t.position}</p>
                    {/* <p className="text-gray-400 text-sm">{t.date}</p> */}
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


export default Testimonials;
import React from 'react';
import { FaLightbulb, FaStar } from 'react-icons/fa';

const PlantOfTheWeekSection = () => {
  const featuredPlant = {
    plantName: "Anthurium",
    category: "Flowering Plant",
    price: 38,
    rating: 4.9,
    description: "Anthurium, also known as the Flamingo Flower, is loved for its vibrant red spathes and glossy green leaves. Perfect for bright indoor spaces, it brings a tropical and elegant touch to any home or office. It thrives in indirect light and high humidity, making it an ideal choice for plant enthusiasts who want a striking centerpiece.",
    specialTip: "Wipe leaves gently with a damp cloth to keep them shiny and healthy.",
    image: "https://i.ibb.co.com/tSv2PjQ/anthurium-indoor-flowering-plants.jpg"
  };

  return (
    <div className="bg-gray-100 pb-16 -mt-2">
      <div className="mx-auto px-4">
        <h2 className="text-[2.3rem] font-extrabold text-green-800 text-center mb-10"> Plant of the Week</h2>

        <div className="flex flex-col md:flex-row bg-white rounded-[0.95rem] shadow-xl overflow-hidden">
          <div className="md:w-2/5 h-auto overflow-hidden"> <img src={featuredPlant.image}  className="w-full h-full object-cover transition duration-500 hover:scale-105" alt={featuredPlant.plantName} /> </div>

          <div className="md:w-3/5 p-6 md:px-8 md:py-4 space-y-5">
            <div className="border-b pb-4">
                <h1 className="text-[2.3rem] font-bold text-gray-800 ">{featuredPlant.plantName}</h1>
                <p className="text-[0.85rem] text-gray-500 mt-1">Category: {featuredPlant.category}</p>

                <div className="flex justify-between items-center mt-3">
                  <div className="font-semibold text-gray-800 flex items-center gap-1">
                    <span>Price:</span>  <p className="  font-extrabold text-green-700">${featuredPlant.price}</p> 
                  </div>

                  <div className="flex items-center font-semibold text-gray-800 gap-1">
                    <span>Rating:</span> <span className="text-amber-500 flex items-center"> {featuredPlant.rating} <FaStar className="w-4 h-4 ml-1" /> </span>
                  </div>
                </div>
            </div>

            <div>
              <h2 className="text-[1.3rem] font-semibold text-gray-700">Description</h2>
              <p className="text-gray-600 leading-relaxed pt-1">{featuredPlant.description}</p>
            </div>

            <div className="flex items-start gap-2 text-base italic text-green-800 bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
              <FaLightbulb className=" mt-1 text-yellow-500" /> PRO TIP: {featuredPlant.specialTip} 
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeekSection;
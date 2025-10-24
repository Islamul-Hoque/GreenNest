import React from 'react';
import { FaStar, FaDollarSign, FaLeaf, FaSun, FaSeedling } from 'react-icons/fa';

const PlantOfTheWeekCard = () => {
  // Inline JSON data
  const plant = {
    plantId: 101,
    plantName: "Fiddle Leaf Fig",
    category: "Air Purifier",
    price: 45,
    rating: 4.8,
    availableStock: 12,
    careLevel: "Moderate",
    size: "Large",
    lightRequirement: "Bright Indirect Light",
    description: "A popular indoor plant with large, violin-shaped leaves. Great for purifying air and adding elegance to your home.",
    providerName: "GreenThumb Nursery",
    specialTip: "Rotate every week to grow evenly",
    discount: 10,
    newArrival: true,
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29422524/2024/5/8/a2f78dec-41d1-47a2-add5-4520835283dc1715184055430LivePlants1.jpg"
  };

  const formatNumber = (num) => (num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num);

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 max-w-4xl mx-auto my-6 overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Side: Image */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <img src={plant.image} alt={plant.plantName} className="w-full h-full object-cover" />
      </div>

      {/* Right Side: Body */}
      <div className="md:w-1/2 p-6 md:p-8 space-y-4 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-green-800">{plant.plantName}</h2>
          <p className="text-sm text-gray-600 flex items-center gap-2"><FaLeaf /> {plant.category}</p>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold text-green-700 flex items-center">
              <FaDollarSign className="mr-1" /> {plant.price} {plant.discount && <span className="text-red-500 ml-2">-{plant.discount}%</span>}
            </p>
            <p className="flex items-center text-yellow-500">
              {plant.rating} <FaStar className="ml-1" />
            </p>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
            <span>Stock: {formatNumber(plant.availableStock)}</span>
            <span>Care: {plant.careLevel}</span>
            <span>Size: {plant.size}</span>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2 mt-2"><FaSun /> {plant.lightRequirement}</p>
          <p className="text-sm text-gray-500 mt-1">Provider: {plant.providerName}</p>
          {plant.specialTip && <p className="text-sm italic text-green-700 mt-1">Tip: {plant.specialTip}</p>}

          <p className="text-gray-700 text-sm mt-3">{plant.description}</p>
          {plant.newArrival && <span className="inline-block px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full text-xs mt-2">New Arrival</span>}
        </div>

        <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Book Consultation Now
        </button>
      </div>
    </div>
  );
};

export default PlantOfTheWeekCard;
import React from 'react';
import { FaDollarSign, FaStar, FaBoxOpen } from 'react-icons/fa'; 
import usePlants from '../Hooks/usePlants';
import { useParams } from 'react-router';
import Loading from './Loading';

const PlantsDetailsCard = () => {
  const { plants, loading } = usePlants();
  const { id } = useParams();

  if (loading) return <Loading/>

  const singlePlant = plants.find(plant => plant.plantId === Number(id));
  const { plantName, category, price, rating, availableStock, careLevel, size, lightRequirement, description, providerName, image } = singlePlant;

  return (
    <div className="rounded-[0.7rem] overflow-hidden shadow-md border border-gray-500/10 bg-gray-100 p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">

        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md"> <img src={image} className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-md" alt={plantName}  /> </div>
            <div className="w-full  md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="border-b pb-4 -mt-1">
                <h1 className="text-[1.9rem] font-bold text-gray-800 ">{plantName}</h1>
                <p className="text-[0.85rem] text-gray-500 mt-1">Category: {category}</p>

                <div className="flex justify-between items-center mt-3">
                  <div className="text-[1.2rem] font-semibold text-gray-800 flex items-center gap-1">
                    <span>Price:</span>  <FaDollarSign className="w-4 h-4 text-green-700" /> 
                    <span className="font-bold text-green-700"> { price} </span>
                  </div>

                  <div className="flex items-center font-semibold text-gray-800 gap-1">
                    <span>Rating:</span> <span className="text-amber-500 flex items-center"> {rating} <FaStar className="w-4 h-4 ml-1" /> </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-[1.3rem] font-semibold text-gray-700">Details:</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium text-gray-600">Care Level:</span>
                    <span className="text-gray-800"> { careLevel}</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium text-gray-600">Size:</span>
                    <span className="text-gray-800"> {size }</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium text-gray-600">Light Needs:</span>
                    <span className="text-gray-800">{ lightRequirement }</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-medium text-gray-600">Provider:</span>
                    <span className="text-blue-700">{ providerName}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[1.3rem] font-semibold text-gray-700 mb-2">Description</h2>
                <p className="text-gray-600 italic leading-relaxed ">{description}</p>
              </div>

              <div className="pt-4 border-t border-gray-400">
                <div className="flex justify-between items-center text-[1.2rem] font-semibold">
                  <span className="text-gray-700">Current Stock:</span>
                  <div>
                    <span className={`${availableStock > 5 ? 'text-green-600' : 'text-red-500'} font-bold`}> {availableStock} </span> 
                    <span className="ml-1 text-gray-500">units</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

    </div>
  );
};

export default PlantsDetailsCard;
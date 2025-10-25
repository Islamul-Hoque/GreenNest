import React from 'react';
import {  FaStar } from 'react-icons/fa'; 
import { Link } from 'react-router'; 

const PlantsCard = ({plant}) => {
    const { plantId, plantName, price, rating, careLevel, image } = plant; 

    return (
        <div key={plantId} className="w-full bg-white border border-gray-200 rounded-[0.8rem] shadow-lg overflow-hidden transition duration-500 hover:scale-102">
            <div className="w-full h-[26rem] md:h-[20rem] overflow-hidden"> <img src={image} alt={plantName} className="w-full h-full object-cover" /></div>

            <div className="p-5 space-y-3">
                <div className='flex justify-between items-center border-b pb-2'>
                    <h2 className="text-[1.51rem] font-bold text-gray-900">{plantName}</h2>
                    <p className="text-[1.51rem] font-extrabold text-green-600">${price}</p>
                </div>

                <div className="space-y-2 pt-2">
                    <div className="text-[1.2rem] flex justify-between items-center">
                        <span className='font-semibold text-gray-600'>Rating:</span> 
                        <div className='font-bold text-amber-500 flex items-center'>{rating} <FaStar className='w-4 h-4 ml-1' /></div>
                    </div>

                    <div className="text-[1.2rem] flex justify-between items-center ">
                        <span className='font-semibold text-gray-600'>Care Level:</span> 
                        <span className='font-bold text-gray-800'>{careLevel}</span>
                    </div>
                </div>

                <div className="pt-4"> <Link to={`/plant/${plantId}`} className="btn w-full bg-green-600 text-white "> View Details </Link> </div>
            </div>
        </div>
    );
};

export default PlantsCard;  
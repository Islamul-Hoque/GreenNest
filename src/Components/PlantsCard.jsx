import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; 
import { Link } from 'react-router'; 
import { motion } from "framer-motion";

const PlantsCard = ({ plant }) => {
    const { plantId, plantName, price, rating, image, category } = plant; 

    const renderRating = (currentRating) => {
    const fullStars = Math.floor(currentRating);
    const emptyStars = 5 - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className='w-4 h-4 text-amber-500' />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className='w-4 h-4 text-gray-300' />);
        }

    return ( <div className='flex items-center'>  {stars}</div> )
}

    return (
        <motion.div  whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 120, damping: 12 } }}  className="w-full bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 cursor-pointer"   >
            <div className="w-full h-[22.1rem] md:h-[15.1rem] overflow-hidden"> <img src={image} alt={plantName} className="w-full h-full object-cover"/>  </div>

            <div className="p-4 space-y-3 flex flex-col justify-between grow">
                <div className='flex justify-start pb-2'>
                    <span className="px-3 py-1 text-xs font-medium text-gray-800 bg-green-100 rounded-full"> {category }</span>
                </div>

                
                <div className='flex justify-between items-start'>
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight flex-1 min-h-[2.5rem] ">{plantName}</h2>
                    <p className="text-xl font-bold text-green-700 ml-4">${price}</p>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                    <span className='font-semibold text-gray-600 text-sm'>Rating:</span> 
                    <div className='flex items-center space-x-2'> {renderRating(rating)} </div>
                </div>

                <div className="pt-3"> 
                    <Link to={`/plant/${plantId}`}  className="w-full inline-flex items-center justify-center py-2 border border-green-600   text-sm font-medium rounded-lg text-green-600 bg-white hover:bg-green-50  transition duration-150"  >  View Details </Link> 
                </div>
            </div>
        </motion.div>
    );
};

export default PlantsCard;
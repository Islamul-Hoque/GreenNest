import React from 'react';
import { useLoaderData } from 'react-router'; 
import { FaStar, FaTags, FaSun } from 'react-icons/fa';
import { Link } from 'react-router'; 

const PlantCard = () => {
    const data = useLoaderData(); 

    return (
        <div className="py-12 md:py-16 bg-white"> 
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-green-800"> Top Rated Indoor Plants </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                    {data && data.map(plant => (
                        
                        <div key={plant.plantId} className="card w-full bg-base-100 shadow-xl border border-green-200/50  transition duration-500 hover:shadow-2xl hover:scale-[1.02]" >
                            <figure className="relative h-64 overflow-hidden"> <img src={plant.image} alt={plant.plantName} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
                                
                                {/* Info Overlay at the bottom of the image */}
                                <div className="absolute inset-x-0 bottom-0 p-4 pt-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                                    {/* Name and Price */}
                                    <div className='flex justify-between items-end'>
                                        <h2 className="text-2xl font-bold drop-shadow-lg">{plant.plantName}</h2>
                                        <p className="text-3xl font-extrabold text-lime-400 drop-shadow-lg">${plant.price}</p>
                                    </div>
                                </div>
                                
                                {/* Top Right Badge (Rating) */}
                                <div className={`absolute top-4 right-4 badge badge-lg p-3 font-bold text-lg bg-lime-500/90 text-green-900 shadow-md`}> <FaStar className='w-4 h-4 mr-1' /> {plant.rating} </div>
                            </figure>

                            {/* Detailed Body Section */}
                            <div className="card-body p-5 space-y-3">
                                
                                {/* Category and Care Level */}
                                <div className="flex justify-between items-center text-sm">

                                    <div className={`badge badge-outline border-green-500 text-green-800 font-semibold`}>
                                        <FaTags className='w-3 h-3 mr-1' /> {plant.category}
                                    </div>
                                    <span className='text-gray-600 font-medium'>Care: {plant.careLevel}</span>
                                </div>

                                {/* Stock and Link Button */}
                                <div className="flex justify-between items-center pt-2 border-t border-dashed">
                                    
                                    {/* Stock Info */}
                                    <span className={`text-md font-bold ${plant.availableStock > 5 ? 'text-green-600' : 'text-red-500'}`}>
                                        Stock: {plant.availableStock}
                                    </span>

                                    {/* 'View Details' Button (Smaller, Cleaner) */}
                                    <Link 
                                        to={`/plant/${plant.plantId}`} 
                                        className="btn btn-sm bg-green-700 text-white border-0 rounded-full shadow-md hover:bg-green-800 transition duration-300"
                                    > View Details </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 'See All Plants' Button */}
                <div className="text-center mt-12">
                    <Link to="/plants" className="btn btn-lg bg-lime-500 text-green-900 border-0 shadow-lg hover:bg-lime-600 transition duration-300"> See All Plants </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;


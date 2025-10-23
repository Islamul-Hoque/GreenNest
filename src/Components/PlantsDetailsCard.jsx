// src/Components/PlantsDetailsCard.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import { FaStar, FaTags, FaBoxOpen, FaDollarSign, FaSeedling, FaRegLightbulb, FaArrowsAltH, FaMapMarkerAlt } from 'react-icons/fa'; 

const PlantsDetailsCard = ({ plants }) => {
    const {  plantName, category, price, rating,  availableStock, careLevel, size, lightRequirement, description, image, providerName } = plants
    const [error, setError] = useState('')

    const handleBookConsultation = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value

        if (name.trim().length < 5) {
            return setError('Name must be at least 5 characters long.');
        } else {
            setError('');
        }

        if (!email) {
            return setError('Please enter your email address.');
        }

        toast.success(`Thanks, ${name}! Your consultation for the ${plantName} has been booked successfully.`);
        e.target.reset()
    }

    return (
        <div className='py-12 md:py-20 bg-gray-100 min-h-screen'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-3 gap-10 md:gap-16'>

                    <div className='md:col-span-2 space-y-8'>
                        <div className='bg-white rounded-[0.95rem] shadow-xl overflow-hidden'>
                            <div className='px-6 md:px-8 pt-6'> <img  src={image} className='w-full object-cover object-center rounded-[0.7rem] border border-gray-100 shadow-lg ' alt={plantName} /> </div>

                            <div className='p-6 md:p-8 space-y-8'>
                                <div className='border-b pb-6 border-gray-200'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h2 className='text-[2.2rem] md:text-5xl font-extrabold text-green-800 mb-1'>{plantName}</h2>
                                            <span className=' text-[0.95rem]  font-semibold text-lime-600 flex items-center'> <FaTags className='w-4 h-4 mr-2' /> {category}</span>
                                        </div>

                                        <div className='flex items-center space-x-6'>
                                            <div className='text-right border-r pr-6 border-gray-200'>
                                                <span className='text-[0.8rem] font-medium text-gray-500'>Price</span>
                                                <span className='text-[2.26rem] font-extrabold text-green-700 flex items-center justify-end'> <FaDollarSign className='w-6 h-6 mr-1' /> {price} </span>
                                            </div>

                                            <div className='text-center bg-amber-50 p-3 rounded-[0.51rem] shadow-md'> 
                                                <p className='text-[0.8rem] font-medium  text-gray-600 mb-1'>Rating</p>
                                                <div className='flex items-center text-[1.3rem] font-bold text-gray-800'> {rating}.0 <FaStar className='w-5 h-5 text-amber-500 ml-2' /> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className='text-[1.6rem] font-bold text-green-700'>Key Plant Specifications</h3>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-dashed'>
                                    <div className='p-3 border rounded-[0.52rem] bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-green-300 text-center'>
                                        <FaSeedling className='w-6 h-6 mx-auto mb-1 text-green-600' />
                                        <p className='text-[0.75rem] font-medium text-gray-500 uppercase'>Care Level</p>
                                        <p className='text-[0.88rem] font-bold text-gray-700 mt-1'>{careLevel}</p>
                                    </div>

                                    <div className='p-3 border rounded-[0.52rem] bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-green-300 text-center'>
                                        <FaArrowsAltH className='w-6 h-6 mx-auto mb-1 text-blue-500' />
                                        <p className='text-[0.75rem] font-medium text-gray-500 uppercase'>Size</p>
                                        <p className='text-[0.88rem] font-bold text-gray-700 mt-1'>{size}</p>
                                    </div>

                                    <div className='p-3 border rounded-[0.52rem] bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-green-300 text-center'>
                                        <FaRegLightbulb className='w-6 h-6 mx-auto mb-1 text-amber-600' />
                                        <p className='text-[0.75rem] font-medium text-gray-500 uppercase'>Light Needs</p>
                                        <p className='text-[0.88rem] font-bold text-gray-700 mt-1'>{lightRequirement}</p>
                                    </div>

                                    <div className='p-3 border rounded-[0.52rem] bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-green-300 text-center'>
                                        <FaMapMarkerAlt className='w-6 h-6 mx-auto mb-1 text-pink-500' />
                                        <p className='text-[0.75rem] font-medium text-gray-500 uppercase'>Provider</p>
                                        <p className='text-[0.88rem] font-bold text-gray-700 mt-1'>{providerName}</p>
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <h3 className='text-[1.6rem] font-bold text-green-700'>Plant Description</h3>
                                    <p className='italic text-gray-600 border-l-4 border-lime-500 bg-gray-50 p-4 rounded-[0.4rem] leading-relaxed shadow-sm'>{description}</p>
                                    <div className='text-[1.2rem] font-bold text-gray-700 flex items-center pt-4 border-t border-dashed '>
                                        <FaBoxOpen className='w-5 h-5 mr-2 text-green-700' /> Stock: <span className={`ml-1 ${availableStock > 5 ? 'text-green-600' : 'text-red-500'}`}> {availableStock} units </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='md:col-span-1'>
                        <div className='w-full pb-3 rounded-[0.7rem] bg-white shadow-md border border-gray-500/10 sticky top-10'>
                            <h3 className='text-2xl font-bold text-green-800 text-center pt-6'>Book Consultation</h3> 
                            <div className='card-body p-6'> 
                                <form onSubmit={ handleBookConsultation }>
                                    <fieldset className='fieldset'>
                                        <label className='label'>Your Name</label>
                                        <input name='name' type='text' className='input w-full' placeholder='Enter your name' />

                                        <label className='label'>Email address</label>
                                        <input  name='email'  type='email' className='input w-full' placeholder='Enter your email address'  />

                                        { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }
                                        <button type='submit' className='btn text-white bg-green-700 hover:bg-green-800 rounded-md font-semibold mt-4' >Book Now </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlantsDetailsCard;
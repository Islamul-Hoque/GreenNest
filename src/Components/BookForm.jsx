import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookForm = () => {
    const [error, setError] = useState('');
    const handleBookConsultation = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value

        if (!name.trim()) {
                return setError('Please enter your name.');
        }
        if (!email) {
            return setError('Please enter your email address.');
        }

        toast.success(`Thank you, ${name}! We'll contact you shortly for confirmation.`);
        e.target.reset()
    }
    return (
        <div className='md:col-span-1'>
            <div className='md:w-[70%] mx-auto pb-3 rounded-[0.7rem] bg-white shadow-md border border-gray-500/10 '>
                <h3 className='text-[1.9rem] md:text-[2.5rem] font-bold text-green-800 text-center pt-6'>Book Consultation</h3> 
                <div className='card-body p-6'> 
                    <form onSubmit={ handleBookConsultation }>
                        <fieldset className='fieldset'>
                            <label className='label'>Your Name</label>
                            <input name='name' type='text' className='input w-full' placeholder='Enter your name' />

                            <label className='label'>Email address</label>
                            <input  name='email'  type='email' className='input w-full' placeholder='Enter your email address'  />

                            { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }
                            <button type='submit' className='btn text-white bg-green-700 hover:bg-green-800  mt-4' >Book Now </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookForm;
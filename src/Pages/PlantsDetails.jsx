import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantsDetailsCard from '../Components/PlantsDetailsCard';
import BookForm from '../Components/BookForm';


const PlantsDetails = () => {

    return (
        <div>
            <main className='bg-green-50'> 
                <section className='p-6 md:p-12'>
                    <section className='mb-12'>
                        <PlantsDetailsCard/>
                    </section>
                    <section>
                        <BookForm/>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default PlantsDetails;
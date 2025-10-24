import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantsDetailsCard from '../Components/PlantsDetailsCard';
import BookForm from '../Components/BookForm';


const PlantsDetails = () => {

    return (
        <div>
            <header> <Navbar/> </header>
            <main className='bg-gray-100'> 
                <section className='p-8 md:p-18 '>
                    <section className='mb-12'>
                        <PlantsDetailsCard/>
                    </section>
                    <section>
                        <BookForm/>
                    </section>
                </section>
            </main>
            <footer> <Footer/> </footer>
        </div>
    );
};

export default PlantsDetails;



//grid-cols-12 gap-8 container mx-auto
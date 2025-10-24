import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantsCard from '../Components/PlantsCard';
import usePlants from '../Hooks/usePlants';
import Loading from '../Components/Loading';

const Plants = () => {
    const { plants, loading } = usePlants();
    if (loading) return <Loading/>
    return (
        <div>
            <header> <Navbar/> </header>
            <main className='bg-gray-100 pb-4'> 
                <div className="py-10 md:py-12"> 
                    <div className="md:px-18 mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-green-800"> Our Plant Collection </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                            {   
                                plants.map(plant => ( <PlantsCard key={plant.plantId} plant={plant} />))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer> <Footer/> </footer>
        </div>
    );
};

export default Plants;
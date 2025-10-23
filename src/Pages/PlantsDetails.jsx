import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PlantsDetailsCard from '../Components/PlantsDetailsCard';

const PlantsDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [plants, setPlants] = useState({})
    console.log(plants);
    
    useEffect(()=> { 
        const plantsDetails = data.find(plant => plant.plantId == Number(id))
        setPlants(plantsDetails)
    }, [data, id])
    return (
        <div>
            <header> <Navbar/> </header>
            {/* <h1>Details</h1> */}
            <main> 
                <PlantsDetailsCard plants={plants} />
            </main>
            <footer> <Footer/> </footer>
        </div>
    );
};

export default PlantsDetails;
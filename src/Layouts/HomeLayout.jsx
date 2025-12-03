import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Pages/Hero";
import PlantCareTips from "../Components/PlantCareTips";
import ExpertCard from "../Components/ExpertCard";
import usePlants from "../Hooks/usePlants";
import PlantsCard from "../Components/PlantsCard";
import PlantOfTheWeek from "../Components/PlantOfTheWeek ";
import Loading from "../Components/Loading";
import Testimonials from "../Components/Testimonials";
import { motion } from "framer-motion";


const HomeLayout = () => {
  const { plants, loading } = usePlants();
const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 14 } },
    };

  if (loading) return <Loading/>
  return (
    <div className='flex flex-col min-h-screen bg-green-50'>
      <header className="md:px-14 px-6 ">  <Hero/>  </header>
      <main className='b mx-auto w-full flex-1 md:px-14 px-6'>
          <div className="py  -10 md:py  -12"> 
            <div className="mx- auto ">
              {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center my-14 text-green-800">Top Rated Indoor Plants</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >
                {   
                  plants.slice(0, 4).map(plant => ( <PlantsCard key={plant.plantId} plant={plant} />))
                }
              </div> */}

              <motion.h2  initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }}  transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-center my-14 text-green-800"> Top Rated Indoor Plants  </motion.h2>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" variants={containerVariants} initial="hidden"   whileInView="visible" viewport={{ once: false, amount: 0.3 }}  >
                {  
                  plants.slice(0, 4).map(plant => ( 
                    <motion.div
                      key={plant.plantId}
                      variants={cardVariants}
                    >
                      <PlantsCard plant={plant} />
                    </motion.div>
                  ))
                }
                </motion.div>
              </div>
          </div>
        <section> <PlantCareTips/> </section>
        <section> <ExpertCard/> </section>
        <section> <PlantOfTheWeek /> </section>
        <section> <Testimonials/> </section>
      </main>
    </div>
  );
};

export default HomeLayout;
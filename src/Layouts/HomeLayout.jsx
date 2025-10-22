import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Hero from "../Pages/Hero";
import PlantCareTips from "../Components/PlantCareTips";
import ExpertCard from "../Components/ExpertCard";


const HomeLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar />
        <Hero/>
      </header>
      <main className='bg-green-50 mx-auto w-full flex-1 '>
        <Outlet />
        <PlantCareTips/>
        <ExpertCard/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;

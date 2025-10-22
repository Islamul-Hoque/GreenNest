import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Login from "../Pages/Login";
import Signup from "../Pages/Register";

const HomeLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main className='bg-green-50 mx-auto w-full flex-1 '>
        {/* <Login /> */}
        {/* <Signup /> */}
        <p className="text-center">main content gola add hobe</p>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;

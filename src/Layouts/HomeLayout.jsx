import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Login from "../Pages/Login";
import Signup from "../Pages/Register";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Login />
        <Signup /> */}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;

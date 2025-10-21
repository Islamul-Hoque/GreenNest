import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <nav> <Navbar/> </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default AuthLayout;
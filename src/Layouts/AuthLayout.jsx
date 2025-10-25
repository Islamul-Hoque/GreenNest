import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header> <Navbar/> </header>
            <main className='bg-gray-100 grow'> <Outlet/> </main>
            <footer> <Footer/> </footer>
        </div>
    );
};

export default AuthLayout;
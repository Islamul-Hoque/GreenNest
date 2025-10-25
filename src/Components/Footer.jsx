import React from 'react';
import { Link } from 'react-router';
import { FaInstagram, FaFacebookF, FaPinterestP,  FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; 
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-green-50 text-gray-800 border-t border-gray-100">
            <div className="mx-auto px-6 md:px-8 py-12">

                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    <div className="col-span-2 space-y-2 -mt-2">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="rounded-full"> <img className="w-[1.95rem]" src={logo} alt="" /> </div>
                            <span className="text-[2.25rem] font-extrabold text-green-900 tracking-wider">GreenNest</span>
                        </Link>
                        <p className="text-[1.13rem] text-gray-600 border-lime-400 font-semibold"> Nurturing your home, naturally. We connect people with the perfect plants for a healthier, greener living space. </p>
                    </div>

                    <div>
                        <h4 className="text-[1.13rem] font-bold mb-2 text-green-800">Quick Links</h4>
                        <nav className="flex flex-col gap-1 text-gray-700">
                            <Link to="/"        className="link-hover hover:text-green-700 transition duration-200">Home</Link>
                            <Link to="/plants"  className="link-hover hover:text-green-700 transition duration-200">All Plants</Link>
                            <Link to="/profile" className="link-hover hover:text-green-700 transition duration-200">Profile</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-[1.13rem] font-bold mb-2 text-green-800 ">Resources</h4>
                        <nav className="flex flex-col gap-1 text-gray-700">
                            <Link to="/privacy" className=" link-hover hover:text-green-700 transition duration-200">Privacy Policy</Link>
                            <Link to="/terms"   className=" link-hover hover:text-green-700 transition duration-200">Terms of Service</Link>
                            <Link to="/faq"     className=" link-hover hover:text-green-700 transition duration-200">FAQ</Link>
                        </nav>
                    </div>

                    <div className='col-span-2 md:col-span-1'>
                        <h4 className="text-[1.13rem] font-bold mb-2 text-green-800 uppercase">CONNECT WITH US </h4>
                        <div className="space-y-3">
                            <div className="flex items-center -ml-[0.18rem]  gap-1 text-gray-700">  <FaMapMarkerAlt className=" w-5 h-5 mt-1 shrink-0" />  <span>71 Green Lane, Dhaka</span>  </div>
                            <div className="flex items-center gap-2 text-gray-700"> <FaEnvelope className=" w-5 h-5" /> <span>greennest@gmail.com</span> </div>
                        </div>

                        <div className="flex space-x-4 pt-4 items-center justify-start">
                            <Link to="https://www.instagram.com" target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaInstagram  className="w-8 h-8 text-pink-600 hover:text-pink-400" /> </Link>
                            <Link to="https://www.facebook.com"  target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaFacebookF  className="w-7 h-7 text-blue-600 hover:text-blue-400" /></Link>
                            <Link to="https://www.pinterest.com" target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaPinterestP className="w-7 h-7 text-red-600 hover:text-red-400" /></Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-green-800 p-4">
                <p className="text-center text-white text-[0.85rem] mt-3 mb-4 md:mt-0 md:mb-0 "> &copy; 2025 GreenNest. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router';
import { FaInstagram, FaFacebookF, FaPinterestP, FaLeaf, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="bg-green-50 text-gray-800 pt-16 border-t-8 border-green-500/10  ">
            <div className="mx-auto px-6 md:px-8 pb-12 ">
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {/* 1. Logo */}
                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <FaLeaf className="w-10 h-10 text-lime-600" />
                            <span className="text-[2.25rem] font-extrabold text-green-900 tracking-wider">GreenNest</span>
                        </Link>
                        <p className="text-[1.125rem] text-gray-600 leading-relaxed max-w-md border-l-4 border-lime-400 pl-4 italic font-semibold">  "Nurturing your home, naturally. We connect people with the perfect plants for a healthier, greener living space." </p>
                    </div>

                    {/* 2. Shop  */}
                    <div>
                        <h4 className="text-[1.125rem] font-bold mb-6 text-green-800">SHOP</h4>
                        <ul className="space-y-3">
                            <li><Link to="/plants" className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Indoor Plants</Link></li>
                            <li><Link to="/pots"   className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Pots & Planters</Link></li>
                            <li><Link to="/tools"  className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Gardening Tools</Link></li>
                            <li><Link to="/offers" className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Today's Deals</Link></li>
                        </ul>
                    </div>

                    {/* 3. Support */}
                    <div>
                        <h4 className="text-[1.125rem] font-bold mb-6 text-green-800 ">SUPPORT</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about"   className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Our Story</Link></li>
                            <li><Link to="/contact" className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Help Center</Link></li>
                            <li><Link to="/faq"     className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">FAQ</Link></li>
                            <li><Link to="/returns" className="text-gray-700 hover:link hover:text-green-700 transition duration-200 text-base font-normal">Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    {/* 4. Contact */}
                    <div>
                        <h4 className="text-[1.125rem] font-bold mb-6 text-green-800 uppercase">CONNECT WITH US </h4>
                        <div className="space-y-3">
                            <div className="flex items-center -ml-[0.18rem]  gap-1 text-gray-700">  <FaMapMarkerAlt className="text-lime-600 w-5 h-5 mt-1 flex-shrink-0" />  <span>71 Green Lane, Dhaka</span>  </div>
                            <div className="flex items-center gap-2 text-gray-700"> <FaEnvelope className="text-lime-600 w-5 h-5" />  <span>greennest@gmail.com</span>  </div>
                        </div>

                        <div className="flex space-x-4 pt-4 items-center justify-start">
                            <Link href="https://www.instagram.com" target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaInstagram  className="w-8 h-8 text-pink-600 hover:text-pink-400" /> </Link>
                            <Link href="https://www.facebook.com"  target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaFacebookF  className="w-7 h-7 text-blue-600 hover:text-blue-400" /></Link>
                            <Link href="https://www.pinterest.com" target="_blank"  className="transition duration-300 transform hover:scale-110"> <FaPinterestP className="w-7 h-7 text-red-600 hover:text-red-400" /></Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="bg-green-800 py-4">
                <div className=" mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-[0.85rem]">
                    <p className="order-2 md:order-1 mt-3 mb-4 md:mt-0 md:mb-0 font-light text-white">  &copy; 2025 GreenNest. All rights reserved.  </p>
                    <div className='order-1 md:order-2 space-x-6 text-white font-medium'>
                        <Link to="/privacy" className="hover:text-green-200 transition"> Privacy Policy</Link> <span className='text-green-500'>|</span>
                        <Link to="/terms"   className="hover:text-green-200 transition"> Terms of Service</Link> <span className='text-green-500'>|</span>
                        <Link to="/sitemap" className="hover:text-green-200 transition"> Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// import React from 'react';
// import { Link } from 'react-router';
// import { NavLink } from 'react-router';
// import Logo from '../assets/logo.png'
// import { FaLeaf, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

// import gitImg from '../../assets/git.png'
// import './Navbar.css'

// const Navbar = () => {

//     const link = <>
//         <li><NavLink end to='/'>Home</NavLink></li>
//         <li><NavLink end to='/apps'> Plants</NavLink></li>
//         <li><NavLink end to='/installation'>My Profile</NavLink></li>
//     </>

//     return (
//         <div className="navbar px-6 md:px-8 shadow-sm bg-gradient-to-r from-green-50 via-green-25 to-white  sticky top-0 z-40">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
//                         {link}
//                     </ul>
//                 </div>


//                 <Link to="/" className="flex items-center gap-2">
//                 <div className="bg-green-100 p-2 rounded-full shadow-inner"> <FaLeaf size={26} className="text-green-700" /> </div>
//                 <div className='flex flex-col'>
//                     <span className="text-3xl font-bold text-green-800">Green Nest</span>
//                     <span className="text-xs text-green-600">Indoor Plant Care & Store</span>
//                 </div>
//                 </Link>
//             </div>


//             <div className="navbar-center">
//                 <ul className="font-semibold menu menu-horizontal px-1 hidden md:flex">
//                     {link}
//                 </ul>
//             </div>
//             <div className="navbar-end">
                
//                 <Link  className="btn text-center px-3 py-2 rounded-md border">Log out</Link> 
//                 <Link   className="btn text-center px-3 py-2 rounded-md border">Log-in</Link>

//             </div>
//         </div>
//     );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaLeaf, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

// GreenNest Navbar (Static version without user conditions)
// - Tailwind CSS based
// - Soft green palette and calm background
// - Responsive: mobile hamburger, desktop links

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-green-900 font-semibold border-b-2 border-green-300"
      : "text-gray-700 hover:text-green-800";

  return (
    <header className="bg-gradient-to-r from-green-50 via-green-25 to-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full shadow-inner">
                <FaLeaf className="text-green-700 w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-green-900">GreenNest</span>
                <div className="text-xs text-green-600">Indoor Plant Care & Store</div>
              </div>
            </Link>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={activeClass} end>
              Home
            </NavLink>
            <NavLink to="/plants" className={activeClass}>
              Plants
            </NavLink>
            <NavLink to="/profile" className={activeClass}>
              My Profile
            </NavLink>
          </nav>

          {/* Right side buttons (static for now) */}
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes className="w-5 h-5 text-green-800" /> : <FaBars className="w-5 h-5 text-green-800" />}
            </button>

            {/* Placeholder user icon (no condition yet) */}
            <button
              onClick={() => setDropdown((s) => !s)}
              className="flex items-center gap-2 rounded-full p-1 hover:bg-green-50 focus:outline-none"
              aria-haspopup="true"
            >
              <FaUserCircle className="w-9 h-9 text-green-800" />
            </button>

            {/* Static Login / Register */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="px-3 py-1.5 rounded-md text-sm border border-green-200 hover:bg-green-50">
                Login
              </Link>
              <Link to="/signup" className="px-3 py-1.5 rounded-md text-sm bg-green-700 text-white hover:bg-green-800">
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu content */}
        {open && (
          <div className="md:hidden mt-2 pb-4">
            <nav className="flex flex-col gap-2">
              <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-3 py-2 rounded bg-green-100" : "px-3 py-2 rounded hover:bg-green-50")}>Home</NavLink>
              <NavLink to="/plants" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-3 py-2 rounded bg-green-100" : "px-3 py-2 rounded hover:bg-green-50")}>Plants</NavLink>
              <NavLink to="/profile" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "px-3 py-2 rounded bg-green-100" : "px-3 py-2 rounded hover:bg-green-50")}>My Profile</NavLink>

              {/* Static Mobile Auth Buttons */}
              <div className="mt-2 flex gap-2">
                <Link  onClick={() => setOpen(false)} className="flex-1 text-center px-3 py-2 rounded-md border">Login</Link>
                <Link  onClick={() => setOpen(false)} className="flex-1 text-center px-3 py-2 rounded-md bg-green-700 text-white">Register</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


// to="/login"
// to="/signup"
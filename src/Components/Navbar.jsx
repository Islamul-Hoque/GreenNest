import React, { useContext } from "react"
import { Link, NavLink } from "react-router"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { toast } from "react-toastify"
import logo from "../assets/logo.png"
export default function Navbar() {
    const { user, signOutUser } = useContext(AuthContext)
    const activeClass = ({ isActive }) => isActive ? "text-green-700 font-bold border-b-2 border-green-600 pb-1 transition-colors duration-200" : "text-gray-700 hover:text-green-600 transition-colors duration-200";

    const handleLogOut = () => {
        signOutUser()
            .then(() => toast.success("You've been successfully logged out!"))
            .catch((error) => toast.error(error.code));
    };

    const navLinks = (
        <>
            <li><NavLink end to="/" className={activeClass}>Home</NavLink></li>
            <li><NavLink end to="/plants" className={activeClass}>Plants</NavLink></li>
            <li><NavLink end to="/about" className={activeClass}>About Us</NavLink></li>
            <li><NavLink end to="/faq" className={activeClass}>FAQ</NavLink></li>
            <li><NavLink end to="/contact" className={activeClass}>Contact</NavLink></li>
            {
                user && (<li><NavLink end to="/profile" className={activeClass}>My Profile</NavLink></li>)
            }
        </>
    );

    return (
        <div className="navbar bg-green-100 px-6 md:px-14 shadow-md sticky top-0 z-40">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> {navLinks} </ul>
                </div>

                <Link to="/" className="flex items-center gap-2">
                    <div className="rounded-full"> <img className="w-[2.2rem]" src={logo} alt="" /> </div>
                    <h1 className="text-[1.3rem] -ml-2 font-bold text-green-800 ">GreenNest</h1>
                </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="font-semibold menu menu-horizontal px-1 gap-2"> {navLinks} </ul>
            </div>

            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full"> <img src={user?.photoURL || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png"} alt="" /> </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>{user?.displayName || "User"}</a></li>
                            <li><Link onClick={handleLogOut} className="text-red-600 hover:bg-red-50">Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/auth/login" className="btn btn-sm bg-transparent border border-green-600 text-green-700 hover:bg-green-700 hover:text-white">Login</Link>
                        <Link to="/auth/register" className="btn btn-sm bg-green-700 text-white hover:bg-green-800">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
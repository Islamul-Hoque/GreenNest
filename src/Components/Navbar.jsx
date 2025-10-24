import React, { useContext, useState } from "react"
import { Link, NavLink } from "react-router"
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { toast } from "react-toastify"

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext)
  const [open, setOpen] = useState(false)

  const activeClass = ({ isActive }) => 
    // isActive ? "text-green-900 font-semibold border-b-2 border-green-300" : "text-gray-700 hover:text-green-800";
  // isActive
  //     ? "btn btn-sm bg-green-200 text-green-900 border-none hover:bg-green-300 font-semibold"
  //     : "btn btn-sm bg-transparent text-gray-700 hover:bg-green-100 hover:text-green-800 border-none";

  //  isActive
  //   ? "btn btn-sm bg-gradient-to-r from-green-200 to-green-100 text-green-900 font-semibold shadow-sm hover:from-green-300 hover:to-green-200 transition-all duration-300 border-none"
  //   : "btn btn-sm bg-transparent text-gray-700 hover:bg-green-100 hover:text-green-800 border border-transparent hover:border-green-200 transition-all duration-300";


  isActive
      ? "text-green-800 font-bold border-b-2 border-lime-600 pb-1 transition-colors duration-200"
      : "text-gray-700 hover:text-green-700 font-medium transition-colors duration-200";

  const handleLogOut = () => {
    signOutUser()
      .then(() => toast.success("Log-out successful"))
      .catch((error) => toast.error(error.code));
  };

  const links = (
    <>
      <NavLink end className={activeClass} to="/">Home</NavLink>
      <NavLink end className={activeClass} to="/plants">Plants</NavLink>
      <NavLink end className={activeClass} to="/profile">My Profile</NavLink>
    </>
  );

  return (
    <nav 
    className="bg-gradient-to-br from-[#ffffff] via-[#f6fff5] to-[#eaffea] shadow-md sticky top-0 z-40"
    
    >
      <div className=" mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-full shadow-inner"><FaLeaf className="text-green-700 w-5 h-5" /></div>
            <div><span className="text-[1.3rem] font-bold text-green-900">GreenNest</span><div className="text-[0.75rem] text-green-600"> Indoor Plant Care & Store</div></div>
          </Link>

          <nav className="hidden md:flex items-center gap-6"> {links} </nav>

          <div className="flex items-center gap-4">
            <button  className="md:hidden p-2 " onClick={() => setOpen(!open)}>
              {open ? <FaTimes className="w-5 h-5 text-green-800" /> : <FaBars className="w-5 h-5 text-green-800" />}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full"><img src={user?.photoURL || "https://static.thenounproject.com/png/1559144-200.png"} alt="User Avatar" /></div></div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                  <li><a>{user?.displayName || "User"}</a></li>
                  <li><Link onClick={handleLogOut} className="text-red-600 hover:bg-red-50">Logout</Link></li>
                </ul>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link to="/auth/login" className="btn btn-sm bg-transparent border border-green-600 text-green-700 hover:bg-green-700 hover:text-white">Login</Link>
                <Link to="/auth/register" className="btn btn-sm bg-green-700 text-white hover:bg-green-800">Register</Link>
              </div>
            )}
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 pb-4">
            <nav className="flex flex-col gap-2"> {links} </nav>
            {!user ? (
              <div className="mt-3 flex gap-2">
                <Link to="/auth/login" className="btn flex-1 bg-transparent border border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Login</Link>
                <Link to="/auth/register" className="btn flex-1 bg-green-700 text-white hover:bg-green-800">Register</Link>
              </div>
            ) : (
              <button onClick={handleLogOut} className="w-full mt-3 text-center px-3 py-2 rounded-md border text-red-600 hover:bg-red-50">Logout</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}




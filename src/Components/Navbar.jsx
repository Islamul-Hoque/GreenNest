import React, { useContext, useState } from "react"
import { Link, NavLink } from "react-router"
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { toast } from "react-toastify"

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext)
  const [open, setOpen] = useState(false)

  const activeClass = ({ isActive }) => isActive ? "text-green-900 font-semibold border-b-2 border-green-300" : "text-gray-700 hover:text-green-800";

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
    <nav className=" bg-gradient-to-r from-green-50 via-green-25 to-green-100 shadow-sm sticky top-0 z-40">
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
                  <div className="w-10 rounded-full"><img src={user?.photoURL || "https://i.ibb.co/1Q0ZsRz/default.png"} alt="User Avatar" /></div></div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                  <li><a>{user?.displayName || "User"}</a></li>
                  <li><Link onClick={handleLogOut} className="text-red-600 hover:bg-red-50">Logout</Link></li>
                </ul>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link to="/auth/login"    className="btn bg-[#3d7252] border-1 px-3 py-1.5 rounded-md  text-white  border-[#008435] hover:bg-green-600">Login</Link>
                <Link to="/auth/register" className=" px-3 py-1.5 rounded-md  bg-green-700 text-white hover:bg-green-800">Register</Link>
              </div>
            )}
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 pb-4">
            <nav className="flex flex-col gap-2"> {links} </nav>
            {!user ? (
              <div className="mt-3 flex gap-2">
                <Link to="/auth/login" className="flex-1 text-center px-3 py-2 rounded-md border">Login</Link>
                <Link to="/auth/register" className="flex-1 text-center px-3 py-2 rounded-md bg-green-700 text-white">Register</Link>
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


// bg-gradient-to-r from-green-50 via-green-25 to-green-100    bg-[#cff0dc]
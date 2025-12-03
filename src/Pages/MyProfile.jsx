import React, { useContext, useState } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setLoading(true);

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("Profile updated successfully!");
            })
            .catch(err => {
                toast.error(err.message)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col -mb-10">
            <main className="mt-16 pb-25">
                <div className=" w-[88%] md:w-[40%] mx-auto bg-white p-6 rounded-[0.6rem] shadow">
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-[1.5rem] font-bold text-green-800 mb-6">My Profile</h2>
                        <img src={photo || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png"} className="w-24 h-24  rounded-full object-cover mb-3" />
                        <h3 className="text-[1.3rem] font-semibold">{name || "Your Name"}</h3>
                        <p className="text-gray-500 text-[0.8rem]">{user?.email || user?.providerData?.[0]?.email}</p>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <fieldset className="fieldset">
                        <label className="label">Your Name  </label>
                        <input value={name} onChange={e => setName(e.target.value)} name="name" type="text" className="input w-full" placeholder="Enter your name" />

                        <label className="label">Photo URL</label>
                        <input value={photo} onChange={e => setPhoto(e.target.value)} name="photo" type="url" className="input w-full" placeholder="Enter your photo URL" />

                        <button type="submit" disabled={loading} className="btn w-full bg-green-700 text-white hover:bg-green-800 rounded-md font-semibold py-2" >
                            {loading ? "Updating..." : "Update Profile"} 
                        </button>
                        </fieldset>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default MyProfile;
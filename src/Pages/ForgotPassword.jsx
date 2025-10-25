import React, {  useContext, useRef, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

import { AuthContext } from "../AuthProvider/AuthProvider";

const ForgotPassword = () => {
    const { forgotPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    const emailRef = useRef()

    const handleForgotPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            return setError('Please enter your email to reset password.')
        }
        forgotPassword(email)
            .then(()=> {
                toast.success("We've sent you a password reset email. Check your inbox!");
                setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
            }, 1000);
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    setError('Please enter a valid email address.')
                } else if (error.code === 'auth/user-not-found') {
                    setError('No account found with this email.')
                } else {
                    setError('Something went wrong. Please try again later.')
                }
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen  bg-gray-100">
            <div className="w-[88%] md:w-[40%] pb-3 rounded-[0.7rem] bg-white overflow-hidden shadow">
                <h2 className="text-3xl font-bold text-green-800 text-center pt-6"> Reset your <span className="text-green-600">password</span></h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email address</label>
                        <input ref={emailRef} name="email"  type="email" className="input w-full" placeholder="Enter your email address"  />

                        { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }

                        <button onClick={handleForgotPassword} type="submit" className="btn text-white bg-green-700 hover:bg-green-800 rounded-md font-semibold mt-4">Send Reset Link</button>
                    </fieldset>
                    <p className="text-gray-500 text-center mt-3"> Remember your password?{" "} <Link to="/auth/login" className="text-green-700 font-medium hover:link"> Back to Login </Link> </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
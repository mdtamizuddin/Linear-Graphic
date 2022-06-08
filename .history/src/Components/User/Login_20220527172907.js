import React, { useState } from 'react'
import Social from './Social'
import logo from '../Navbar/logo.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import auth from '../firebase/firebase.init'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                fetch(`https://linear-graphic-server.vercel.app/users/${user.email}`, {
                    method: "put",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: displayName, email,
                        photoURL
                    })
                })
                    .then(res => res.json())
                    .then(json => {
                        
                    })
            
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }
    return (
        <div className='flex items-center content-center h-screen'>
            <div className='w-full'>
                <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                    <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")' }} />
                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <h2 className="flex justify-center mb-4">
                            <img src={logo} alt="" />
                        </h2>
                        <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>
                        <Social />
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
                            <a href="/" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>
                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                                <input {...register("email", { required: true })} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                                {errors.email && <span className='text-red-500 mt-2'>Please Insert Your Email ??</span>}
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                                <input {...register("password", { required: true })} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                                {errors.password && <span className='text-red-500 mt-2'>Password ??</span>}
                            </div>
                            <div className="mt-8 ">
                                <button className={` btn btn-primary w-full ${loading && 'loading'}`}>
                                    Sign Up
                                </button>
                            </div>
                            <p className='text-red-500 my-3'>{error}</p>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                            <Link to='/login' className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Sign In</Link>
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
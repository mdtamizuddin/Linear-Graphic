import React, { useState } from 'react'
import Social from './Social'
import logo from '../Navbar/logo.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.init'


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const onSubmit = data => {
        setLoading(true)
        const formData = new FormData();
        formData.append('image', data.avater[0]);
        const displayName = data.name
        const email = data.email
        const password = data.password
        fetch(`https://api.imgbb.com/1/upload?key=1483e8863ef155b9c5094f8292f7500a`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const photoURL = result.data.url
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        fetch(`http://localhost:5000/users/${user.email}`, {
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
                                localStorage.setItem('Token' , json.token)
                                reset()
                                setLoading(false)
                                updateProfile(auth.currentUser, {
                                    displayName, photoURL
                                })
                            })
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        setError(errorCode)
                        setLoading(false)
                    });


            })
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
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                                <input {...register("name", { required: true })} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                                {errors.name && <span className='text-red-500 mt-2'>Please Insert Your Name</span>}
                            </div>
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
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Your Image</label>
                                <input {...register("avater", { required: true })} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="file" />
                                {errors.avater && <span className='text-red-500 mt-2'>Your Image ??</span>}
                            </div>
                            <div className="mt-8 ">
                                <button className={` btn btn-primary w-full ${loading && 'loading'}`}>
                                    Sign Up
                                </button>
                            </div>
                            <p  className='text-red-500 my-3'>{error}</p>
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

export default Signup
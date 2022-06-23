import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
import logo from './logo.png'
import { signOut } from 'firebase/auth'
import Loading from '../Loading/Loading'
const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const [currentUser, setUser] = useState({ role: 'am-public' })
    useEffect(() => {
        if (user) {
            fetch(`https://linear-graphic.herokuapp.com/users/${user.email}`)
                .then(res => res.json())
                .then(json => setUser(json))
        }
    }, [user])
    if (loading) {
        return <Loading />
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="navbar container mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-3  shadow bg-base-100 rounded-box  w-52">
                            <Navigations />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Navigations />
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ?
                            <>
                                <Link to='/login' className="btn btn-outline ">Sign in</Link>

                                <Link to='/bookCall' className="btn btn-md btn-secondary  ml-3 md:flex hidden ">Book A Call</Link>

                            </>
                            :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={user.photoURL} alt='avater' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        currentUser?.role === "admin" &&
                                        <li>
                                            <Link to={'/dashboard'} className="justify-between">
                                                Dashboard
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>}
                                    <li><Link to='/'>Settings</Link></li>
                                    <li><button onClick={() => {
                                        signOut(auth)
                                    }}>Logout</button></li>
                                </ul>
                            </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar

const Navigations = () => {
    return (
        <>
            <li className='mx-0  lg:ml-0'><NavLink to='/'>Home</NavLink></li>
            <li className='mx-0 '><NavLink to='/service'>Service</NavLink></li>
            <li className='mx-0 '><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li className='mx-0 '><NavLink to='/pricing'>Pricing</NavLink></li>
            <li className='mx-0 '><NavLink to='/review'>Tastimonial</NavLink></li>
            <li className='mx-0 '><NavLink to='/contact'>Contact</NavLink></li>
            <Link to='/bookCall' className="btn mt-4 btn-secondary btn-outline  mr-3 md:hidden flex ">Book A Call</Link>
        </>
    )
}
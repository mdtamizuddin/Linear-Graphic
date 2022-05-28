import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'

const Dashboard = () => {
    const [user , loading] = useAuthState(auth)
    if (loading) {
        return <h1>loading ...</h1>
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative flex flex-col">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side shadow">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                        <div className="avatar mx-auto mt-10">
                            <div className="w-24 rounded-full">
                                <img src={user.photoURL} alt='user profile' />
                            </div>
                        </div>
                        <h1 className="text-center mt-3 mb-5 font-bold">{user.displayName}</h1>
                        <Navigations />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Dashboard

const Navigations = () => {
    return (
        <>
            <li><Link to='profile'>Profile</Link></li>
            <li><Link to='portfolio'>Manage Portfolio</Link></li>
            <li><Link to='add-portfolio'>Add a Portfolio</Link></li>
            <li><Link to='add-review'>Add a Review</Link></li>
            <li><Link to='services'>Manage Services</Link></li>
            <li><Link to='headers'>Headers</Link></li>
            <li><Link to='pricing'>Pricing</Link></li>
            <li><Link to='/' className='btn btn-primary text-white mt-5'>Go Home</Link></li>
            <li><button className='btn btn-primary text-white mt-5'>Log Out</button></li>
        </>
    )
}
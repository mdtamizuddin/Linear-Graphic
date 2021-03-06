import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
import { signOut } from 'firebase/auth'
import Loading from '../Loading/Loading'

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [data, setData] = useState({ role: 'am-public' })
    const [fatching, setLoading] = useState(false)

    useEffect(() => {
        if (user) {
            setLoading(true)
            const url = `https://linear-graphic.herokuapp.com/users/${user?.email}`
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setLoading(false)
                    setData(json)
                })
        }
    }, [user])
    if (loading || fatching) {
        return <Loading />
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative flex flex-col">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-neutral z-50 fixed top-10 left-0 drawer-button lg:hidden">
                        <i className="fa-solid fa-bars"></i>
                    </label>
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
                        <Navigations data={data} />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Dashboard

const Navigations = ({ data }) => {
    const navigate = useNavigate()
    return (
        <>
            <li><Link to='add-review'>Add a Review</Link></li>
            {
                data.role === "admin" &&
                <>
                    <li><Link to='users'>Users</Link></li>
                    <li><Link to='add-portfolio'>Add a Portfolio</Link></li>
                    <li><Link to='add-faq'>Add a FAQ</Link></li>
                    <li><Link to='portfolios'>Manage Portfolio</Link></li>
                    <li><Link to='manage-faq'>Manage FAQ</Link></li>
                    <li><Link to='services'>Manage Services</Link></li>
                    <li><Link to='messages'>Messages</Link></li>
                    <li><Link to='pricing/monthly'>Manage Pricing</Link></li>
                </>
            }

            <li><Link to='/' className='btn btn-primary text-white mt-5'>Go Home</Link></li>
            <li><button onClick={() => {
                signOut(auth)
                navigate('/login')
            }} className='btn btn-primary text-white mt-5'>Log Out</button></li>
        </>
    )
}
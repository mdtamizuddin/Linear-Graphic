import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from './Hero.png'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroimg} className="max-w-lgm rounded-lg shadow-2xl" />
                    <div className='mt-5 lg:mt-0'>
                        <h1 className="text-5xl font-bold">Get your everyday design done</h1>
                        <p className="py-6">Scale up your creative content production with a reliable and hassle-free design service.</p>
                        <Link to='/pricing' className="btn btn-primary">pick your plan</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
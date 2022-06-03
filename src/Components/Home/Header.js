import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from './Hero.png'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 animate__animated animate__fadeInDown">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroimg} alt='hero img' className="max-w-lgm rounded-lg " />
                    <div className='mt-5 lg:mt-0'>
                        <h1 className="text-5xl  leading-normal header-font">Get your everyday<br /> design done</h1>
                        <p className="py-6">Scale up your creative content production <br /> with a reliable and hassle-free design service.</p>
                        <Link to='/pricing' className="btn btn-primary">pick your plan</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
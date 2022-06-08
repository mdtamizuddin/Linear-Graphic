import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from './Hero.png'
const Header = () => {
    return (
        <header>
            <div className="container mx-auto  bg-base-100 animate__animated animate__fadeInDown">
                <div className="flex h-screen w-full flex-col lg:flex-row-reverse items-center lg:justify-between">
                    <img  src={heroimg} alt='hero img' className=" " />
                    <div className='mt-5 lg:mt-0'>
                        <h1 className="text-5xl  leading-snug header-font">Get your everyday<br /> design done</h1>
                        <p className="py-6">Scale up your creative content production <br /> with a reliable and hassle-free design service.</p>
                        <Link to='/pricing' className="btn btn-primary">pick your plan</Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
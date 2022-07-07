import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from './Hero.png'
const Header = () => {
    return (
        <header>
            <div className="container mx-auto   animate__animated ">
                <div className="flex lg:h-screen w-full  lg:flex-row-reverse flex-col-reverse items-center lg:justify-between">
                    <img  src={heroimg} alt='hero img ' className=" mt-10 lg:mt-0" />
                    <div className='mt-10  lg:mt-0 flex-col flex items-center lg:items-start'>
                        <h1 className="text-3xl md:text-5xl  lg:text-5xl text-center lg:text-left md:text-left  leading-snug header-font">Get your everyday<br /> design done</h1>
                        <p className="py-6  text- ">Scale up your creative content production <br /> with a reliable and hassle-free design service.</p>
                        <Link to='/pricing' className="btn btn-secondary ">pick your plan</Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
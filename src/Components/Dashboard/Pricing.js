import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import PricingService from './Pricing/PricingService'

const Pricing = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 pt-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Unlimited Design</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div className="flex navigation-pricing mx-auto border-2 border-secondary rounded overflow-hidden mt-6">
                            <NavLink to='monthly' className="py-1 px-4  focus:outline-none">Monthly</NavLink>
                            <NavLink to='yearly' className="py-1 px-4 focus:outline-none">Annually</NavLink>
                        </div>
                    </div>

                </div>
            </section>
            <div className='container mx-auto'>
                <Outlet />

                <PricingService />
            </div>
        </div>
    )
}

export default Pricing
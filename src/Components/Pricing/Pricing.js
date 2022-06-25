import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Faq from '../FAQ/Faq'
import RegularPricing from './RegularPricing'
import LeadManageMent from './ServicePrice/LeadManageMent'

const Pricing = () => {
    const [active, setActive] = useState(false)
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Unlimited Design</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div className="flex navigation-pricing mx-auto border-2 border-secondary  rounded overflow-hidden mt-6">
                            <NavLink to='monthly' className={`py-1 rounded-none  px-4 h-full ${!active && "active"}`}>Monthly</NavLink>
                            <NavLink onClick={() => setActive(true)} to='yearly' className="py-1 px-4 h-full rounded-none">Annually</NavLink>
                        </div>
                        <div className='mt-20'>
                            <Outlet />

                            <LeadManageMent />

                            <RegularPricing />
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>

                </div>
            </section>
            <Faq />
        </div>
    )
}

export default Pricing
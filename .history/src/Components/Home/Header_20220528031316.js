import React from 'react'
import heroimg from './Hero.png'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroimg} className="max-w-lgm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get your everyday design done</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
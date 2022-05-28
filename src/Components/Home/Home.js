import React from 'react'
import Service from '../Service/Service'
import Header from './Header'
import submit from './image/submit.svg'
import design from './image/designer.svg'
import receive from './image/receive.svg'
import Portfolio from '../Portfolio/Portfolio'
const Home = () => {
    return (
        <div>
            <Header />
            <Service />

            <section className='container mx-auto py-20'>
                <h1 className='text-center text-2xl font-bold'>HOW IT WORKS</h1>
                <h3 className='text-center text-4xl mt-4 font-bold'>Get your designs done in 1-2 days, not weeks</h3>

                <ul className="steps steps-vertical lg:steps-horizontal w-full mt-10 ">
                    <li className="step step-primary">
                        <div className="card items-center py-10 card-compact w-96 bg-base-100">
                            <img className='w-20 mt-5' src={submit} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Submit Design Request
                            </h1>
                            <p className='w-96'>
                                Let us know what you need. Share references and upload your brand assets.
                            </p>
                        </div>
                    </li>
                    <li className="step step-primary">
                        <div className="card items-center py-10 card-compact w-96 bg-base-100">
                            <img className='mt-5' src={design} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Your designers gets to work
                            </h1>
                            <p className='w-96'>
                                Get instantly matched with the best designers for the job.
                            </p>
                        </div>
                    </li>
                    <li className="step">
                        <div className="card items-center py-10 card-compact w-96 bg-base-100">
                            <img className='mt-5' src={receive} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Receive your design
                            </h1>
                            <p className='w-96'>
                                Give us your feedback. We will revise your designs as many times as needed.s
                            </p>
                        </div>
                    </li>
                </ul>

            </section>

            {/* Portfolio section  */}
            {/* Portfolio section  */}
            
            <Portfolio />
        </div>
    )
}

export default Home
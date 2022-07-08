import React from 'react'
import Service from '../Service/Service'
import Header from './Header'
import submit from './image/submit.svg'
import design from './image/designer.svg'
import receive from './image/receive.svg'
import { useQuery } from 'react-query'
import ReviewCard from '../Review/ReviewCard'

import Loading from '../Loading/Loading'
import Portfolio from './Portfolio'
const Home = () => {
    const url = 'https://linear-graphic.herokuapp.com/review'
    const { isLoading, data } = useQuery(['reviews'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )


    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <Header />

            <Service />



            <section className='container mx-auto py-20'>
                <h1 className='text-center text-2xl font-bold'>HOW IT WORKS</h1>
                <h3 className='text-center text-4xl mt-4 font-bold'>Get your designs done in 1-2 days, not weeks</h3>

                <ul className="steps steps-vertical lg:steps-horizontal w-full mt-10 ">
                    <li className="step step-primary">
                        <div className="card items-center py-10 card-compact w-full ">
                            <img className='w-20 mt-5' src={submit} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Submit Design Request
                            </h1>
                            <p className='lg:w-96 w-full'>
                                Let us know what you need. Share references and upload your brand assets.
                            </p>
                        </div>
                    </li>
                    <li className="step step-primary">
                        <div className="card items-center py-10 card-compact w-full ">
                            <img className='mt-5' src={design} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Your designers gets to work
                            </h1>
                            <p className='lg:w-96 w-full'>
                                Get instantly matched with the best designers for the job.
                            </p>
                        </div>
                    </li>
                    <li className="step">
                        <div className="card items-center py-10 card-compact w-full ">
                            <img className='mt-5' src={receive} alt="" />
                            <h1 className='text-2xl font-bold my-3'>Receive your design
                            </h1>
                            <p className='lg:w-96 w-full'>
                                Give us your feedback. We will revise your designs as many times as needed.s
                            </p>
                        </div>
                    </li>
                </ul>

            </section>

            {/* Portfolio section  */}
            {/* Portfolio section  */}

            <Portfolio />


            {/* review section  */}
            {/* review section  */}

            <div className='container mx-auto'>
                <h1 className='text-4xl text-center mt-10 font-bold'>We Care About Our Client. They love us</h1>

                <div className='grid px-7 lg:px-0 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10'>
                    {
                        data?.slice(0, 6).map(review => <ReviewCard key={review._id}
                            review={review}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
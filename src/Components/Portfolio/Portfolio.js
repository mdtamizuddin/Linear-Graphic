import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const [current, setCurrent] = useState('all')
    const url = 'https://linear-graphic.herokuapp.com/portfolio'
    const { isLoading, data } = useQuery(['Portfolio-all'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    const category = ['all', 'brochure', 'illustration', 'infographics', 'social media', 'presentation']

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto py-16 px-5 lg:px-0 md:px-0'>
            <h1 className="text-center text-5xl  font-bold">Our Letest Works</h1>
            <p className="text-center mb-16 mt-3 text-xl">Check out some of the latest creations we did for our customers</p>
            <section>
                <div className="group grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-5 container mx-auto mb-8">
                    {
                        category.map(btn => <>
                            <button onClick={() => setCurrent(btn)}
                                key={btn} className={`btn  btn-primary ${btn === current ? "" : "btn-outline"}`}>
                                {btn} <div class={`${btn === current ? 'badge badge-secondary ml-3 badge-outline' : 'hidden'}`}>{data.length}</div>
                            </button>
                        </>)
                    }
                </div>
            </section>
            <div className='grid grid-cols-1 w-full lg:grid-cols-3 md:grid-cols-2 gap-7'>
                {
                    data.map(portfolio => <PortfolioCard key={portfolio._id} portfolio={portfolio} />)
                }

            </div>
        </div>
    )
}

export default Portfolio
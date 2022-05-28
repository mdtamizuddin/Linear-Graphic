import React from 'react'
import { useQuery } from 'react-query'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const url = 'https://linear-graphic.herokuapp.com/portfolio'
    const { isLoading, data, refetch } = useQuery(['Portfolio'], () =>
        fetch(url,{
            method:'get',
            headers :{
                auth : localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )

    if (isLoading) {
        return <h1>loading ..</h1>
    }
    return (
        <div className='container mx-auto py-16 px-5 lg:px-0 md:px-0'>
            <h1 className="text-center text-5xl mb-16 font-bold">Our Letest Works</h1>
            <div className='grid grid-cols-1 w-full lg:grid-cols-3 md:grid-cols-2 gap-7'>
            {
                data.map(portfolio =>  <PortfolioCard key={portfolio._id} portfolio={portfolio}/>)
            }
               
            </div>
        </div>
    )
}

export default Portfolio
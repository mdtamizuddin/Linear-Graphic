import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import PricingCard from './PricingCard'
import './style.css'
const Monthly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingMonthly/`
    const { isLoading, data } = useQuery(['pricing monthly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='pricing-container'>
            <div className="grid grid-con grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full  gap-y-10  justify-items-center">

                {
                    data.map(price => <PricingCard key={price._id} price={price} type={'/monthly'} />)
                }
            </div>
        </div>
    )
}

export default Monthly
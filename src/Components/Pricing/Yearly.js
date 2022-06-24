import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import PricingCard from './PricingCard'

const Yearly = () => {
    const url = `http://localhost:5000/pricingYearly/`
    const { isLoading, data } = useQuery(['pricing yearly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='pricing-container '>
            <div className="grid grid-con grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full  gap-y-10  justify-items-center">
                {
                    data.map(price => <PricingCard key={price._id} price={price} type={'/yearly'} />)
                }
            </div>
        </div>
    )
}

export default Yearly
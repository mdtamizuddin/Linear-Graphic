import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'
import PricingCard from './PricingCard'

const Yearly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingYearly/`
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
            <div className="grid grid-con grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full  gap-y-10 ">
                {
                    data.map(price => <PricingCard price={price} type={'yearly'} />)
                }
            </div>
        </div>
    )
}

export default Yearly
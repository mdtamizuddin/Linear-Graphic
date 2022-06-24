import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'
import CardNormal from '../CardNormal'

const LeadManagement = () => {
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
        <div className='pricing-container  mt-20'>
            <h1 className='text-center  text-5xl text-gray-900'>Lead Magnet / E-book / PDF</h1>
            <div className="grid grid-con grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full  gap-y-10  mt-14">
                {
                    data.map(price => <CardNormal key={price._id} price={price} type={'yearly'} />)
                }
            </div>
        </div>
    )
}

export default LeadManagement
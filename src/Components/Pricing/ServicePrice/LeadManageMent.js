import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'
import CardNormal from '../CardNormal'

const LeadManagement = () => {
    const url = `https://linear-graphic.herokuapp.com/leadmanagement/`
    const { isLoading, data } = useQuery(['pricing-leadmanagement'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='pricing-container  mt-20'>
            <h1 className='text-center  text-5xl text-gray-900 font-bold'>Lead Magnet / E-book / PDF</h1>
            <p className='text-center mt-5'>Give us your feedback. We will revise your designs as <br />many times as needed.s</p>
            <div className="grid grid-con grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full  gap-y-10  mt-14  justify-items-center">
                {
                    data.map(price => <CardNormal key={price._id} price={price} type={' /Monthly'} />)
                }
            </div>
        </div>
    )
}

export default LeadManagement
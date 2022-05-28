import React from 'react'
import { useQuery } from 'react-query'
import ServiceCard from './ServiceCard'

const Service = () => {
    const url = 'https://linear-graphic-server.vercel.app/service'
    const { isLoading, data } = useQuery(['React-codes-sneppet'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }
    return (
        <div className='container mx-auto mt-10'>
            <h1 className="text-5xl text-center  mb-10">Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 justify-items-center'>
                {
                    data.map(service => <ServiceCard key={service._id} service={service} />)
                }


            </div>
        </div>
    )
}

export default Service
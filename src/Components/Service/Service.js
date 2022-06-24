import React from 'react'
import { useQuery } from 'react-query'
import ServiceCard from './ServiceCard'
import Loading from '../Loading/Loading'
const Service = () => {
    const url = 'http://localhost:5000/service'
    const { isLoading, data } = useQuery(['services'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto mt-10  service-section'>
            <h1 className="text-5xl text-center  mb-10">Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-7 justify-items-center px-5 lg:px-0'>
                {
                    data?.map(service => <ServiceCard key={service._id} service={service} />)
                }


            </div>
        </div>
    )
}

export default Service
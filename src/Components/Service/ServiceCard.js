import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const { description, name, image } = service
    return (
        <div>
            <div className="card card-service  overflow-visible  roudede-none   bg-base-100 shadow-md">
                <figure><img className='w-44 h-44' src={image} alt="Shoes" /></figure>
                <div className="card-body  roudede-none">
                    <h1 className='text-2xl text-secondary mb-3 text-center'>{name}</h1>
                    <p className='text-center'>{description.slice(0, 90)}</p>

                    <div className='flex justify-center mt-5'>
                        <Link to='/' className="btn btn-secondary 
                     rounded-full ">
                                read more
                            <i className="fa-solid ml-3 fa-arrow-right-long"></i></Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ServiceCard
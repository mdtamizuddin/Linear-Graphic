import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const { description, name, image } = service
    return (
        <div>
            <div className="card overflow-visible card-compact  roudede-none relative w-96 bg-base-100 shadow-md">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body  roudede-none">

                    <p>{description}</p>

                    <Link to='/' className="btn btn-secondary 
                     rounded-none lg:absolute top-40 lg:-right-20 z-50">{name}
                        <i className="fa-solid ml-3 fa-arrow-right-long"></i></Link>

                </div>
            </div>

        </div>
    )
}

export default ServiceCard
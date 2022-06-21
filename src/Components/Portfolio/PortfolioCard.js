import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ portfolio }) => {
    return (
        <div>
            <div className="relative   port-card card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className='portfolio-image ' src={portfolio.images[0].image} alt="Shoes" /></figure>

                <div className="bg-primary  port-overlay">
                    <h2 className="text-2xl w-full text-white  text-center">{portfolio.name}</h2>
                    <Link to={`/portfolio/${portfolio._id}`} className="btn btn-secondary">View Project</Link>
                </div>
            </div>

        </div>
    )
}

export default PortfolioCard


{/* <div className="   py-3  card-actions justify-center w-full px-4">

</div> */}
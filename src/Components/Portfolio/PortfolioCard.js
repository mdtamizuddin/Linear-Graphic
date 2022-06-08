import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ portfolio }) => {
    return (
        <div>
             {/* <figure><img src={} alt="Shoes" /></figure> */}
            <div style={{backgroundImage : `url(${portfolio.images[0] ? portfolio.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'})`, height: "420px" , width: '100%'}} className="relative port-card card card-compact w-full  bg-base-100 shadow-xl">
               
                <div className="card-body">

                    <div className="absolute hidden port-overlay py-3 bg-primary bottom-0 right-0 card-actions justify-center w-full px-4">
                        <h2 className="text-2xl w-full text-white  text-center">{portfolio.name}</h2>
                        <Link to={`/portfolio/${portfolio._id}`} className="btn btn-secondary">View Project</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioCard
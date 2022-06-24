import React from 'react'

import imageSvg from '../Pricing/most-popular.svg'
const PricingCard = ({ price, type }) => {
    const services = price?.service?.split('&&')

    return (
        <div className='priceing-card relative  py-5 px-8 flex flex-col items-center rounded  border-2 hover:border-secondary ease-in duration-300'>
            <div className='rounded  flex flex-col justify-left w-full'>
                <h1 className='text-xl text-neutral text-left font-bold flex'>{price.type} <img  className={`${price.popular === "true" ?  "block" : "hidden"}`} src={imageSvg} alt="" /></h1>
                <h1  className='text-3xl font-black text-[#373738]  text-left mt-2'>${price.price}<span className='text-xl font-normal'>{type}</span></h1>
            </div>
            {/* heading End Here  */}
            <button className='btn  bottom-5 w-full btn-secondary btn-md rounded mt-8'>{price.button}</button>
            <span className='divider'></span>
            <div className='w-full'>
                {
                    services.map((text, index) => <h3 key={index} className='text-left py-2'>
                        <i className="fa-solid fa-circle-check mr-3 text-xl text-secondary"></i>
                        {text}
                    </h3>)
                }
            </div>
            <div className='h-10 flex items-end  w-full'>
            </div>
            <p className='text-xs absolute bottom-5 w-full text-center'>All price in USD</p>



        </div>
    )
}

export default PricingCard
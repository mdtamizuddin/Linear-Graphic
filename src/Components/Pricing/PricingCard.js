import React from 'react'

const PricingCard = ({ price, type }) => {
    return (
        <div className='priceing-card relative border-2 shadow-xl py-5 px-8 flex flex-col items-center rounded '>
            <div className='rounded  flex flex-col justify-left w-full'>
                <h1 className='text-xl text-neutral text-left'>{price.type}</h1>
                <h1 className='text-4xl font-black text-neutral text-left mt-2'>$ {price.price}/<span className='text-xl'>{type}</span></h1>
            </div>
            {/* heading End Here  */}
            <button className='btn  bottom-5 w-full btn-secondary btn-md rounded my-8'>Order Now</button>
            <div className='w-full'>
                {
                    price?.services.map(text => <h3 className='text-left py-2'>
                        <i className="fa-solid fa-check mr-3 text-secondary font-bold text-xl"></i>
                        {text}
                    </h3>)
                }
            </div>
            <div className='h-10'></div>
            



        </div>
    )
}

export default PricingCard
import React from 'react'

const CardNormal = ({ price, type }) => {
    const services = price?.service?.split('&&')
    return (
        <div style={{ backgroundColor: "rgb(242, 244, 246)" }} className='priceing-card relative  py-5 px-8 flex flex-col items-center rounded  '>
            <div className='rounded  flex flex-col justify-left w-full'>
                <h1 className='text-xl text-neutral text-left font-bold flex'>{price.type}</h1>
                <h1 className='text-4xl font-black text-neutral  text-left mt-2'>${price.price}<span className='text-xl font-normal'>{type}</span></h1>
            </div>
            {/* heading End Here  */}
            <button className='btn  bottom-5 w-full btn-secondary btn-md rounded mt-8'>Order Now</button>
            <span className='divider'></span>
            <div className='w-full'>
                {
                    services.map((text, index) => <h3 key={index} className='text-left py-2'>
                        <i className="fa-solid fa-circle-check mr-3 text-xl text-secondary"></i>
                        {text}
                    </h3>)
                }
            </div>
            <div className='h-10 flex items-end'>
                <p className='text-xs'>All price in USD</p>
            </div>




        </div>
    )
}

export default CardNormal
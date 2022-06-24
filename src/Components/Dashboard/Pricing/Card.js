import React from 'react'
import imageSvg from '../../Pricing/most-popular.svg'
const Card = ({ price, type, setPrice, setShow }) => {
    const services = price?.service?.split('&&')
    return (
        <div className='priceing-card relative border-2 shadow-md py-5 px-8 flex flex-col items-center rounded '>
            <div className='rounded  flex flex-col justify-left w-full'>
                <h1 className='text-xl text-neutral text-left font-bold flex'>{price.type} <img className={`${price.popular ? "block" : "hidden"}`} src={imageSvg} alt="" /></h1>
                <h1 className='text-4xl font-black text-neutral text-left mt-2'>$ {price.price}/<span className='text-xl'>{type}</span></h1>
            </div>
            {/* heading End Here  */}
            <button onClick={() => {
                setShow(true)
                setPrice(price)
            }} className='btn   bottom-5 w-full btn-secondary btn-md rounded mt-8'>Update</button>
            <span className='divider'></span>
            <div className='w-full'>
                {
                    services.map((text, index) => <h3 key={index} className='text-left py-2'>
                        <i className="fa-solid fa-check mr-3 text-secondary font-bold text-xl"></i>
                        {text}
                    </h3>)
                }
            </div>
            <div className='h-10'></div>




        </div>
    )
}

export default Card
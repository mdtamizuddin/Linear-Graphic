import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

const RegularPricing = () => {
    const url = `https://linear-graphic.herokuapp.com/regularPricing`
    const { isLoading, data } = useQuery(['pricing-Regula'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    const [pricings, setPricing] = useState([])

    useEffect(() => {
        if (data) {
            const pricings = data[0]?.desc?.split('&&')
            setPricing(pricings)
        }
    }, [data])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-16 mb-5'>
            <h1 className="text-5xl font-bold">General Pricing Sheet</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    pricings.map((text, index) => <p className={`${text.length < 5 && "hidden"} text-left mt-2`} key={index}>
                        <i className="fa-solid text-xl text-primary mr-3 fa-circle-plus"></i>
                        {text}</p>)
                }

            </div>
        </div>
    )
}

export default RegularPricing
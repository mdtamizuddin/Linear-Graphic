import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'

const Monthly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingMonthly/`
    const { isLoading, data } = useQuery(['pricing monthly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            {
                data.map((price, index) => <form key={price._id}>
                    <h1>{price.type}</h1>
                    <h1>{price.price}</h1>
                    {
                        price.services.map(service => <input className='w-full' value={service} type="text" />
                        )

                    }
                </form>)
            }
        </div>
    )
}

export default Monthly
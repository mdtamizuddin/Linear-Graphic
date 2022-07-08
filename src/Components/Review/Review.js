import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

import ReviewCard from './ReviewCard'

const Review = () => {
    const url = 'https://linear-graphic.herokuapp.com/review'
    const { isLoading, data } = useQuery(['reviews-all'], () =>
        fetch(url, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-4xl text-center mt-10 font-bold'>We Care About Our Client. They love us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10'>
                {
                    data.map(review => <ReviewCard key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    )
}

export default Review
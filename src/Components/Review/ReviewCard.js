import { Rating } from '@mui/material';
import React, { useState } from 'react'

const ReviewCard = ({ review }) => {
    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <div className="card-body">
                    <Rating
                        name="simple-controlled"
                        value={review.ratings}
                    />
                    <div className="profile flex mt-3">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={review.photoURL} />
                            </div>
                        </div>
                        <div className="info ml-3">
                            <h2 className="card-title">{review.name}</h2>
                            <p className='mt-2'>{review.date}</p>
                        </div>
                    </div>
                    <p className='mt-3'>"{review.description}"</p>
                </div>
            </div>

        </div>
    )
}

export default ReviewCard
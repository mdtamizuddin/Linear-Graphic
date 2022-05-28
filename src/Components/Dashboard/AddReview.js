import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../firebase/firebase.init'
const AddReview = () => {
    const [value, setValue] = useState(0)
    const [user, loading] = useAuthState(auth)

    const addReview = (e) => {
        e.preventDefault()
        const name = user.displayName
        const email = user.email
        const photoURL = user.photoURL

        const description = e.target.description.value
        fetch('https://linear-graphic.herokuapp.com/review', {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ name , email , photoURL , description , ratings : value })
        }).then(res => {
            if (res.status === 200) {
                toast.success('Review Added')
                e.target.reset()
            }

        })
    }


    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={addReview} className='card py-14 px-5 w-96 max-w-lg shadow'>
                <div className="profile flex my-3 items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <div className="info ml-3">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>

                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <textarea name='description' type="text" placeholder="Type here" class="input input-bordered w-full h-64 mt-5 max-w-full" />
                <button className='btn btn-primary mt-5'>Submit Review</button>
            </form>
        </div>
    )
}

export default AddReview
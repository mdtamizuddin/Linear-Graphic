import React from 'react'
import loading from './loading.gif'
const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading
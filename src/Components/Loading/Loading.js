import React from 'react'
import {  Grid} from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <Grid
                height="100"
                width="100"
                color='#660FE0'
                ariaLabel='loading'
            />
        </div>
    )
}

export default Loading
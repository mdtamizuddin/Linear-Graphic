import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const PortfolioFull = () => {
    const {id} = useParams()
    const url = `https://linear-graphic.herokuapp.com/portfolio/${id}`
    const { isLoading, data } = useQuery(['React-codes-sneppet'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }

    return (
        <div>
            {
                data?.images?.map((img , index) =>  <img key={img.index} src={img.image} alt="" />)
            }
           
        </div>
    )
}

export default PortfolioFull
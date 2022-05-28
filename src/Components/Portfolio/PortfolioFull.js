import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const PortfolioFull = () => {
    const {id} = useParams()
    const url = `https://linear-graphic.herokuapp.com/portfolio/${id}`
    const { isLoading, data } = useQuery(['portpolio Single one'], () =>
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
                data?.images?.map((img , index) =>  <img key={img.image} src={img.image} alt="" />)
            }
           
        </div>
    )
}

export default PortfolioFull
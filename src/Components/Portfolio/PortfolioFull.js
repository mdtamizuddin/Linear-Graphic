import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PortfolioFull = () => {
    const {id} = useParams()
    const url = `https://linear-graphic.herokuapp.com/portfolio/${id}`
    const { isLoading, data } = useQuery(['portpolio Single one'], () =>
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
                data?.images?.map((img , index) =>  <img key={img.image} src={img.image} alt="" />)
            }
           
        </div>
    )
}

export default PortfolioFull
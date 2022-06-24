import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'

const Yearly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingYearly/`
    const { isLoading, data } = useQuery(['pricing yearly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className=''>
            {
                data.map((price, index) => <form onSubmit={handleSubmit(onSubmit)} className='card p-5 w-full' key={price._id}>
                    <input
                        {...register("type", { required: true, defaultValue: price.type })}
                        className='mt-3 text-2xl class="input border w-full p-2 ' defaultValue={price.type} type="text" />
                    <input 
                      {...register("price", { required: true, defaultValue: price.price })}
                    className='mt-3 text-2xl class="input border w-full p-2 ' defaultValue={price.price} type="text" />
                    <textarea 
                        {...register("services", { required: true, defaultValue: price.services })}
                    className='mt-3  h-40 class="input border  p-2' defaultValue={price.services} type="text" />
                    <button type='submit' className='btn mt-5 btn-primary btn-sm'>Update</button>
                </form>)
            }
        </div>
    )
}

export default Yearly
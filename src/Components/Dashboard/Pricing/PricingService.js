import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading'
import { toast } from 'react-toastify'
import Card from './Card'
const PricingService = () => {
    const [show, setShow] = useState(false)
    const [price, setPrice] = useState({})
    const url = `https://linear-graphic.herokuapp.com/leadmanagement/`
    const { isLoading, data, refetch } = useQuery(['pricing yearly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div >
            <h1 className='text-center py-14 text-5xl text-gray-900'>Lead Magnet / E-book / PDF</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-y-5'>
                {
                    data.map((price, index) => <Card key={price._id} price={price} setShow={setShow} setPrice={setPrice} type={'yearly'} />)
                }

            </div>
            <ModalUpdate show={show} setPrice={setPrice} setShow={setShow} price={price} refetch={refetch} />
        </div>
    )
}

export default PricingService


const ModalUpdate = ({ show, setShow, price, refetch, setPrice }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setLoading(true)
        const url = `https://linear-graphic.herokuapp.com/leadmanagement/${price._id}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify(data)
        }).then(res => {
            setLoading(false)
            if (res.status === 200) {
                toast('Updated Success')
                setShow(false)
                refetch()
                setPrice({})
                setLoading(false)
            }
        })
    }
    return (
        <div className={`modal-full ${show ? 'flex' : 'hidden'}`}>

            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative">
                <button onClick={() => {
                    setPrice({})
                    setShow(false)
                }
                } className='btn btn-error btn-sm absolute right-0 top-0'>close</button>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            defaultValue={price.type}
                            {...register("type", { required: true, value: price.type })}
                            className="input input-bordered" type='text' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.type?.type === 'required' && "Name is required"} </p>
                        <input
                            defaultValue={price.price}
                            {...register("price", { required: true, value: price.price })}
                            className="input input-bordered" type='number' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.price?.type === 'required' && "Name is required"} </p>
                        <textarea
                            defaultValue={price.service}
                            {...register("services", { required: true, value: price.service })}
                            name='services' type="text" placeholder="Description" className="input input-bordered w-full h-64 mt-5 max-w-full" required />
                        <p className='text-red-500 mt-2 ml-2'>{errors.services?.type === 'required' && "Services Is Requied"} </p>
                    </div>
                    <button type='submit' className={`btn btn-secondary ${loading && 'loading'}`}>Update</button>
                </form>
            </div>
        </div>
    )
}

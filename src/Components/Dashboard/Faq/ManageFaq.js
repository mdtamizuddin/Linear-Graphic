import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../../Loading/Loading'

const ManageFaq = () => {
    const [upShow, setUpShow] = useState(false)
    const [faq, setFaq] = useState({})
    const url = `https://linear-graphic.herokuapp.com/faq`
    const { isLoading, data, refetch } = useQuery(['FAQ'], () =>
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
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th />
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((faq, index) => <tr key={faq._id}>
                                <th>{index + 1}</th>
                                <td>{faq.title}</td>
                                <td>{faq.desc.slice(0, 50)}....</td>
                                <td>
                                    <button onClick={() => {
                                        setUpShow(true)
                                        setFaq(faq)
                                    }} className='btn btn-primary mr-3 '>Update</button>
                                    <button className='btn btn-error'>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <ModalUpdate upShow={upShow} setUpShow={setUpShow} faq={faq} refetch={refetch} />
        </div>
    )
}

export default ManageFaq


const ModalUpdate = ({ upShow, setUpShow, faq, refetch }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setLoading(true)

        fetch(`https://linear-graphic.herokuapp.com/faq/${faq._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ title: data.title, desc: data.desc })
        }).then(res => {
            setLoading(false)
            if (res.status === 200) {
                toast('Updated Success')
                setUpShow(false)
                refetch()
                setLoading(false)
            }
        })
    }
    return (
        <div className={`modal-full ${upShow ? 'flex' : 'hidden'}`}>

            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative">
                <button onClick={() => setUpShow(false)} className='btn btn-error btn-sm absolute right-0 top-0'>close</button>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            defaultValue={faq.title}
                            {...register("title", { required: true, value: faq.title })}
                            className="input input-bordered" type='text' />
                        <p className='text-red-500 mt-2 ml-2'>{errors.title?.type === 'required' && "Name is required"} </p>
                        <textarea
                            defaultValue={faq.desc}
                            {...register("desc", { required: true, value: faq.desc })}
                            name='desc' type="text" placeholder="Description" className="input input-bordered w-full h-64 mt-5 max-w-full" required />
                        <p className='text-red-500 mt-2 ml-2'>{errors.desc?.type === 'required' && "Description Is Requied"} </p>
                    </div>
                    <button type='submit' className={`btn btn-secondary ${loading && 'loading'}`}>Update</button>
                </form>
            </div>
        </div>
    )
}


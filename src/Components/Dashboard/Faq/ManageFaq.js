import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../../Loading/Loading'

const ManageFaq = () => {
    const [upShow, setUpShow] = useState(false)
    const [show, setShow] = useState(false)
    const [faq, setFaq] = useState({})
    const url = `http://localhost:5000/faq`
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
                                    <button onClick={() => {
                                        setShow(true)
                                        setFaq(faq)
                                    }} className='btn btn-error'>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <ModalUpdate upShow={upShow} setUpShow={setUpShow} faq={faq} refetch={refetch} />
            <DeleteModal show={show} setShow={setShow} faq={faq} refetch={refetch} />
        </div>
    )
}

export default ManageFaq


const ModalUpdate = ({ upShow, setUpShow, faq, refetch }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setLoading(true)

        fetch(`http://localhost:5000/faq/${faq._id}`, {
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


const DeleteModal = ({ show, setShow, faq, refetch }) => {

    const detetPort = () => {
        const id = faq._id
        fetch(`http://localhost:5000/faq/${id}`, {
            method: "delete",
            headers: {
                auth: localStorage.getItem('Token')
            }
        }).then(res => {
            if (res.status === 200) {
                setShow(false)
                toast.success('Deleted Success')
                refetch()
            }
        })
    }
    return (
        <div className={`modal-full ${show ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <h2 className="flex items-center text-red-500 gap-2 text-xl font-semibold leading-tight tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
                        <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z" />
                        <rect width={32} height={136} x={240} y={112} />
                        <rect width={32} height={32} x={240} y={280} />
                    </svg>
                    Delete Warning
                </h2>
                <p className="flex-1 text-red-400">Are You Sure You Want to Delete This Portfolio</p>
                <p className="text-primary">
                    Name : {faq.name}
                </p>
                <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                    <button onClick={() => setShow(false)} className="px-6 py-2 rounded-lg shadow-sm  btn-success btn btn-sm">No</button>
                    <button onClick={detetPort} className="px-6 py-2 rounded-lg shadow-sm  btn-error btn btn-sm">Yes</button>
                </div>
            </div>
        </div>
    )
}
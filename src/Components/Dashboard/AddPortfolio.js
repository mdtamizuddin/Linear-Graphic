import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddPortfolio = () => {
    const [image, setImage] = useState([])
    const [error, setError] = useState('')
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const name = data.name
        const images = image
        fetch('https://linear-graphic.herokuapp.com/portfolio', {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
                auth: localStorage.getItem('Token')
            },
            body: JSON.stringify({ name, images })
        }).then(res => {
            if (res.status === 200) {
                reset()
                toast.success('Portfolio Added')
                setImage([])
            }

        })
    }

    return (
        <div>
            <div className="hero min-h-screen w-full bg-base-100">
                <div style={{ width: '100%' }} className="hero-content">
                    <div className="card w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Portfolio Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}

                                        className="input input-bordered" />
                                    <p className='text-red-500 mt-2 ml-2'>{errors.name?.type === 'required' && "Name is required"} </p>
                                </div>

                                {
                                    image.map((img, index) => <div className="form-control">
                                        <span className="label-text">Image : {index + 1}</span>
                                        <input
                                            {...register(`image${index}`, { required: true, value: img.image })}

                                            className="input input-bordered" />
                                    </div>

                                    )
                                }
                                <p className='text-red-500 mt-3'>{error?.code}</p>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Add Portfolio</button>
                                </div>

                            </form>
                            <ImageUpload image={image} setImage={setImage} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPortfolio





const ImageUpload = ({ image, setImage }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        setLoading(true)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(`https://api.imgbb.com/1/upload?key=1483e8863ef155b9c5094f8292f7500a`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const photoURL = result.data.url
                setImage([...image, { image: photoURL }])
                setLoading(false)
            }
            )
    }
    console.log(image);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Images</span>
                </label>
                <input type='file'
                    {...register("image", { required: true, maxLength: 20 })}
                    className="input p-2 input-bordered" multiple />
                <button type='submit' className={`btn btn-sm mt-4 ${loading && 'loading'}`}>Upload</button>
                <p className='text-red-500 mt-2 ml-2'>{errors.image?.type === 'required' && "Your Image"} </p>
            </div>
        </form>
    )
}

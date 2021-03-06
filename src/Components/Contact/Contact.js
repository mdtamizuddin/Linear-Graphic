
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import storage from '../firebase/firebaseStorage';
import dateNow from '../Hooks/useDate'

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false)
    const onSubmit = (data) => {
        setLoading(true)
        if (data.file[0]) {
            const file = data.file[0]
            const storageRef = ref(storage, `/file/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                console.log(prog)
            },
                (err) => {
                    console.log(err)
                    setLoading(false)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => {

                            fetch('https://linear-graphic.herokuapp.com/sendMail/contact', {
                                method: "post",
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify({ image : url, name: data.name, email: data.email, message: data.message, subject: data.subject })
                            }).then(res => {
                                if (res.status === 200) {
                                    fetch('https://linear-graphic.herokuapp.com/message', {
                                        method: 'post',
                                        headers: {
                                            'content-type': 'application/json',
                                            auth: localStorage.getItem('Token')
                                        },
                                        body: JSON.stringify({ image : url,name: data.name, email: data.email, message: data.message, subject: data.subject, date: dateNow() })
                                    })
                                    setLoading(false)
                                    toast.success('Your Message Send Success')
                                    reset()
                                }
                                else {
                                    setLoading(false)
                                    toast.error('Message Not Sent')
                                }
                            }

                            )
                        })
                }
            )
        }
        else {
            fetch('https://linear-graphic.herokuapp.com/sendMail/contact', {
                method: "post",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name: data.name, email: data.email, message: data.message, subject: data.subject })
            }).then(res => {
                if (res.status === 200) {
                    fetch('https://linear-graphic.herokuapp.com/message', {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json',
                            auth: localStorage.getItem('Token')
                        },
                        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, subject: data.subject, date: dateNow() })
                    })
                    setLoading(false)
                    toast.success('Your Message Send Success')
                    reset()
                }
                else {
                    setLoading(false)
                    toast.error('Message Not Sent')
                }
            }

            )
        }
    }
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex  sm:flex-nowrap  flex-wrap">
                    <div className="lg:w-[55%]  md:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe title='my adress' width="100%" height="100%" className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37144.03679128258!2d91.0921473!3d22.87236290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a4f60180b351%3A0xaf35df91820c2a37!2sMaijdee!5e1!3m2!1sen!2sbd!4v1653831893740!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Maijdi, Court - 3800, Noakhali, Bangladesh</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a href='/contact' className="text-indigo-500 leading-relaxed">tasrif@lineargraphic.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WhatsApp</h2>
                                <p className="leading-relaxed">+8801609814396</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[45%] md:w-full bg-white flex flex-col md:ml-auto w-full md:p-7 mt-8 md:mt-0">
                        <h2 className="text-gray-900 mb-1 title-font text-4xl font-bold">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Let's create something together ????</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name"  {...register("name", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email"  {...register("email", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Subject</label>
                            <input type="text" id="email" name="subject"  {...register("subject", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea name="message"  {...register("message", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">File</label>
                            <input type="file" name="file" {...register("file")}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className={`${loading && 'loading'}  text-white btn btn-primary`}>Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact
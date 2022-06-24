import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase/firebase.init'
import Loading from '../../Loading/Loading'

const AddFAQ = () => {
    const [user, loading] = useAuthState(auth)
    const addFaq = (e) => {
        e.preventDefault()
        const newFaq = {
            email: user.email,
            title: e.target.title.value,
            desc: e.target.desc.value
        }
        fetch('https://linear-graphic.herokuapp.com/faq', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFaq)
        }).then(res => {
            if (res.status === 200) {
                toast.success('New FAQ Added')
                e.target.reset()
            }
        })
    }
    if (loading) {
        return <Loading />
    }
    return (
        <main>
            <h1 className='text-4xl text-center mt-10 '>Add A FAQ</h1>
            <div className='flex h-screen justify-center items-center'>
                <form onSubmit={addFaq} className='card py-14 px-5 w-96 max-w-lg shadow'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full" required />
                    <textarea name='desc' type="text" placeholder="Description" className="input input-bordered w-full h-64 mt-5 max-w-full" required />
                    <button className='btn btn-secondary mt-5'>Add FAQ</button>
                </form>
            </div>
        </main>
    )
}

export default AddFAQ
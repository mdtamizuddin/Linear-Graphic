import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import CardFaq from './CardFaq'

const Faq = () => {
    const url = `http://localhost:5000/faq`
    const { isLoading, data } = useQuery(['FAQ'], () =>
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
        <section className='container mx-auto'>
            {/* <h1 className='text-center text-4xl'>Frequently Asked Questions</h1> */}
            <div className='md:flex lg:flex'>
                <div className='mt-5  flex-col items-center lg:w-2/5 md:w-2/5'>
                    <h1 className='text-5xl font-black leading-tight text-left hidden lg:block md:block'   >
                        Frequently   Asked <br /> Questions
                    </h1>
                    <p className='text-xl mt-5 hidden md:block lg:block'>You have questions? We have answers, <br /> but you can also you can send <Link className=' btn-link' to={'/contact'}> email us.</Link></p>
                    {/* hidden large screen  */}
                    <h1 className='text-4xl font-black leading-tight text-center block md:hidden lg:hidden '   >
                        Frequently  Asked  Questions
                    </h1>
                    <p className='text-xl mt-5 block md:hidden lg:hidden text-center'>You have questions? We have answers, <br /> but you can also you can send <Link className=' btn-link' to={'/contact'}> email us.</Link></p>
                </div>
                <div className='lg:w-3/5 md:w-3/5'>
                   {
                     data.map(faq =>  <CardFaq  key={faq._id} faq={faq}/>)
                   }

                </div>
            </div>
        </section>
    )
}

export default Faq
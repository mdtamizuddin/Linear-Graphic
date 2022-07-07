import React from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import PortfolioCard from '../Portfolio/PortfolioCard'

const Portfolio = () => {
    const urlPort = 'https://linear-graphic.herokuapp.com/portfolio'
    const { isLoading, data: portfolio } = useQuery(['Portfolio'], () =>
        fetch(urlPort, {
            method: 'get',
            headers: {
                auth: localStorage.getItem('Token')
            }
        })
            .then(res => res.json()
            )
    )
    const navigate = useNavigate()
    if (isLoading) {
        return <Loading />
    }
    return (
        <main className='container mx-auto pb-10 px-5 lg:px-0 md:px-0'>

            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <section className='p-5'>
                    <div onClick={() => navigate('/portfolio')} className='w-full cardI'>
                        <img
                            className='w-full'
                            src="https://images.anytask.com/resources/user/18fa23d8f35e12ec/task/1616945401563_design-social-media-posts-graphics-for-facebook-instagram.jpg" alt="" />
                        <h2 className='font-bold title mt-5'>SOCIAL MEDIA GRAPHICS</h2>
                    </div>
                    <div className=' lg:flex mt-7'>
                        <div onClick={() => navigate('/portfolio')} className='lg:w-[50%] mr-4 cardI'>
                            <img
                                className='w-full h-72 border'
                                src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/61f723b06f70e0880ae3c656_DrawKit%20Webflow%20Grid-min.png" alt="" />
                            <h2 className='font-bold title mt-5'>ILLUSTRATION</h2>
                        </div>
                        <div onClick={() => navigate('/portfolio')} className='lg:w-[50%] mt-5 lg:mt-0 cardI'>
                            <img
                                className='w-full h-72 border'
                                src="https://cdn.dribbble.com/users/5871720/screenshots/16904415/media/d1ae2db1177fdf8f9d0c5b54fa9f7c89.jpg?compress=1&resize=400x300&vertical=top" alt="" />
                            <h2 className='font-bold title mt-5'>LOGOS</h2>
                        </div>
                    </div>
                    <div onClick={() => navigate('/portfolio')} className='w-full mt-7 cardI'>
                        <img
                            className='w-full'
                            src="https://firebasestorage.googleapis.com/v0/b/linear-graphic.appspot.com/o/file%2Fxutuqyncbi-01.jpg?alt=media&token=20cc102a-e08c-46b1-b31e-f3ba973f66ff" alt="" />
                        <h2 className='font-bold title mt-5'>BROCHURE DESIGN</h2>
                    </div>
                </section>

                <section className=' p-5 cardI'>
                    <img onClick={() => navigate('/portfolio')} className='w-full cardI h-screen' src="https://i.ibb.co/g3XwKHV/Business-Company-Strategy-Presentation-Template-Original-and-High-Quality-Power-Point-Templates.jpg" alt="" />
                    <h2 onClick={() => navigate('/portfolio')} className='font-bold title  mt-5 uppercase'>Presentation</h2>

                    <h1 className='text-4xl  font-bold mt-10'>Want to see more?</h1>

                    <button onClick={() => navigate('/portfolio')} className='btn btn-outline mt-9 px-10 btn-secondary'>All Our Work</button>
                </section>
            </section>


        </main>
    )
}

export default Portfolio
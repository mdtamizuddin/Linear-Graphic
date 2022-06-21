import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

const Monthly = () => {
    const url = `https://linear-graphic.herokuapp.com/pricingMonthly/`
    const { isLoading, data } = useQuery(['pricing monthly'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full lg:gap-10">

                <div className="p-4  w-full  "  style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/linear-graphic.appspot.com/o/Red.svg?alt=media&token=38c750bf-7723-49be-8ea8-ded4b07b1478)`}}>
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{data[0].type}</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>${data[0].price}</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/Month</span>
                        </h1>
                        {
                            data[0].services.map((service , index) =>
                                <p key={index} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-secondary text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>{service}
                                </p>)
                        }
                        <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none  rounded">Choose Pro
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-4  w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden">
                        <span className="bg-secondary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{data[1].type}</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>${data[1].price}</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/monthly</span>
                        </h1>
                        {
                            data[1].services.map((service , index) =>
                                <p key={index} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-secondary text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>{service}
                                </p>)
                        }
                        <button className="flex items-center mt-auto text-white bg-secondary border-0 py-2 px-4 w-full focus:outline-none  rounded">Choose Team
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>

                <div className="p-4  w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{data[2].type}</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>${data[2].price}</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">/Month</span>
                        </h1>
                        {
                            data[2].services.map((service, index) =>
                                <p key={index} className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-secondary text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>{service}
                                </p>)
                        }
                        <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none  rounded">Choose Daytime
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Monthly
import React from 'react'

const CardFaq = ({ faq }) => {
    const description = faq.desc.split('&&')
    return (
        <div className='mt-5 blur:bg-inherit w-11/12 mx-auto'>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  focus:bg-bg-cyan-100 focus:border  focus:border-primary">
                <div className="collapse-title text-xl font-bold">
                    {faq.title}
                </div>
                <div className="collapse-content relative">
                    {
                        description.map(text => <p className='mt-3'>{text}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CardFaq
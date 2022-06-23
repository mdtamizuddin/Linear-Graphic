import React from 'react'

const CardFaq = ({faq}) => {
    return (
        <div className='mt-5 blur:bg-inherit'>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  focus:bg-bg-cyan-100 focus:border  focus:border-primary">
                <div className="collapse-title text-xl font-medium">
                    {faq.title}
                </div>
                <div className="collapse-content relative">
                    <p>{faq.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFaq
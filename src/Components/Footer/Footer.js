import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 cursor-pointer items-center">
                        <a href='https://twitter.com/lineargraphic' target={'_blank'} rel="noreferrer" >
                        <i className="fa-brands text-2xl fa-twitter"></i>
                        </a>
                        <a href='https://www.linkedin.com/company/lineargraphic/' target={'_blank'} rel="noreferrer">
                            <i className="fa-brands text-2xl fa-linkedin"></i>
                        </a>
                        <a href='https://www.facebook.com/fbtasrif' target={'_blank'} rel="noreferrer">
                        <i className="fa-brands text-2xl fa-facebook-square"></i>
                            </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Linear Graphic</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
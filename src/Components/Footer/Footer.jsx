import React from 'react'
import "./Footer.css"

import {
    faGlobe
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
    return (
        <>
            <div className='footer-upper'>
                <div className='container py-5 '>
                    <div className='row gy-3'>
                        <div className='col-lg-4 py-5'>
                            <h2>LOCATION</h2>
                            <p >2215 John Daniel Drive</p>
                            <p >Clark, MO 65243</p>
                        </div>
                        <div className='col-lg-4 py-5'>
                            <h2>AROUND THE WEB</h2>
                            <p>
                                <ul>
                                    <li>
                                        <div className='footer-icon fs-4'> <FontAwesomeIcon icon={faFacebook} /></div>
                                    </li>
                                    <li>
                                        <div className='footer-icon fs-4'> <FontAwesomeIcon icon={faTwitter} /></div>
                                    </li>
                                    <li>
                                        <div className='footer-icon fs-4'> <FontAwesomeIcon icon={faLinkedin} /></div>
                                    </li>
                                    <li>
                                        <div className='footer-icon fs-4'> <FontAwesomeIcon icon={faGlobe} /></div>
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className='col-lg-4 py-5'>
                            <h2>ABOUT FREELANCER</h2>
                            <p className='fs-6'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>


                <div className='py-3 footer-footer'>
                    <p className='mt-2 text-white fs-5'>Copyright © Your Website 2021</p>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./About.css"
export default function Abot() {
  return (
    <div className='main py-5'>
      <div className='container py-5'>
        <h1 className='text-white fw-bold pt-5'>ABOUT COMPONENT</h1>
        <div className='dis pb-4'>
          <div className='oner linee'></div>
          <div className='icon text-white'>  <FontAwesomeIcon icon={faStar} />  </div>
          <div className='onel linee'></div>
        </div>


        <div className='row gy-3 mx-5 pb-5'>
          <div className='col-lg-6 pb-5'>
            <p className='text-white pp ps-5  text-start '>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className='col-lg-6 pb-5'>
            <p className='text-white pp ps-5 text-start '>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}

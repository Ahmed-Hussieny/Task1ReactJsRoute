import React from 'react'
import './Home.css'
import mainPhoto from '../../assets/avataaars.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div div className='main'>
      <div className='center container py-4'>
        <div className='w-25'>

        </div>
        <div>
          <img src={mainPhoto} className='w-75' alt="" />
          <h1 className='pt-5 text-white fw-bold'>START FRAMEWORK</h1>

          <div className='dis'>
            <div className='oner lineee'></div>
            <div className='icon text-white'>  <FontAwesomeIcon icon={faStar} />  </div>
            <div className='onel lineee'></div>
          </div>


          <p className='pt-3 text-white fs-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>



      </div>
    </div>
  )
}

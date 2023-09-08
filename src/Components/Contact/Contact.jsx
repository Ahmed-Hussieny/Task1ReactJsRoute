import React, { useState } from 'react'
import './Contact.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Contact() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const [inputValue3, setInputValue3] = useState('');

  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const [inputValue4, setInputValue4] = useState('');

  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
  };






  return (


    <div className=' pt-2 pb-5'>
      <div className='container'>
        <h1 className='color fw-bold pt-5'>CONATCT SECTION</h1>

        <div className='dis pb-4'>
          <div className='oner line'></div>
          <div className='icon coll'>  <FontAwesomeIcon icon={faStar} />  </div>
          <div className='onel line'></div>
        </div>
      </div>
      <form>
        <div className="container py-5">
          <form className='py-5 w-50 m-auto'>
            <div className=" position-relative">
              <p htmlFor="firstName" style={{ top: inputValue ? '-40px' : '5px' }} className='up text-start position-absolute bggg'>userName :</p>
              <input type="text" className="form-control input-shadow border-0 border-bottom py-3 position-relative " value={inputValue}
                onChange={handleInputChange} id="firstName" placeholder='userName' />
            </div>




            <div className=" my-5 position-relative">
              <p htmlFor="firstName" style={{ top: inputValue2 ? '-40px' : '5px' }} className='up text-start position-absolute bggg'>userAge :</p>
              <input type="text" className="form-control border-0 border-bottom py-3 position-relative " value={inputValue2}
                onChange={handleInputChange2} id="lastName" placeholder='userAge' />
            </div>
            <div className="position-relative">
              <p htmlFor="firstName" style={{ top: inputValue3 ? '-40px' : '5px' }} className='up text-start position-absolute bggg'>userEmail :</p>
              <input type="email" className="form-control border-0 border-bottom py-3 position-relative " value={inputValue3}
                onChange={handleInputChange3} id="email" placeholder='userEmail' />
            </div>

            <div className=" position-relative my-5">
              <p htmlFor="firstName" style={{ top: inputValue4 ? '-40px' : '5px' }} className='up text-start position-absolute bggg'>userPassword :</p>
              <input type="password" className="form-control border-0 border-bottom py-3 position-relative " value={inputValue4}
                onChange={handleInputChange4} id="email" placeholder='userPassword' />
            </div>

            <div className='btnnn'><button type="submit" className="btn px-4 py-2 btn-successs">Send Message</button></div>
            {/* <button type="submit" className="btn px-4 py-2 btn-successs">Send Message</button> */}
          </form>
        </div>
      </form>
    </div>
  )
}

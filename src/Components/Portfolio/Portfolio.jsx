import React, { useState } from 'react'
import './Portfolio.css'
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import { Modal } from 'react-bootstrap';

export default function Portfolio() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


    return (
        <div className=' pt-2 pb-5'>
            <div className='container'>
                <h1 className='color fw-bold pt-5'>PORTFOLIO COMPONENT</h1>

                <div className='dis pb-4'>
                    <div className='oner line'></div>
                    <div className='icon coll'>  <FontAwesomeIcon icon={faStar} />  </div>
                    <div className='onel line'></div>
                </div>


                <div className='row gy-3'>
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow}>
                            <img src={img1} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show} onHide={handleClose}>
                        <img src={img1} alt="Photo1" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}


                    {/* //////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow2}>
                            <img src={img2} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show2} onHide={handleClose2}>
                        <img src={img2} alt="Photo2" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}



                    {/* //////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow3}>
                            <img src={img3} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show3} onHide={handleClose3}>
                        <img src={img3} alt="Photo3" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow}>
                            <img src={img1} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show} onHide={handleClose}>
                        <img src={img1} alt="Photo4" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}


                    {/* //////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow2}>
                            <img src={img2} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show2} onHide={handleClose2}>
                        <img src={img2} alt="Photo5" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}



                    {/* //////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-lg-4 '>
                        <div className='porItem ' onClick={handleShow3}>
                            <img src={img3} className='w-100' alt="" />

                            <div className='cover' id=''>
                                <FontAwesomeIcon className='text-white fs' icon={faPlus} />
                            </div>
                        </div>

                    </div>

                    {/* ******************************************** */}
                    <Modal className='ooo' centered show={show3} onHide={handleClose3}>
                        <img src={img3} alt="Photo6" className='modlePhoto' />
                    </Modal>
                    {/* ********************************************** */}





                </div>
            </div>
        </div>
    )
}




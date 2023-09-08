import React from 'react'
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <>

<div className='px-4 sticky-top bgg'>


<nav className="container px-4 py-4 mt-3 navbar bgg navbar-expand-lg sticky-top ">
  <Link className="navbar-brand fs-2 fw-bold text-white" to="/">START FRAMEWORK</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink className="nav-link  fs-5 fw-bold text-white me-3" to="/about">ABOUT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  fs-5 fw-bold text-white me-3" to="/portfolio">PORTIFOLIO</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link  fs-5 fw-bold text-white me-3" to="/contact">CONTACT</NavLink>
      </li>
    </ul>
  </div>
</nav>

</div>
    
    </>
  )
}

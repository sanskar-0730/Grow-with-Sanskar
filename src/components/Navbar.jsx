import React from 'react'
import "./Navbar.css"
import logo from "/my_image.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <header className="navbar">

          <NavLink to="/" className="No-Underline">
            <div className='logoAndName'>
              <img className='logo' src={logo} alt='logo'></img>
              <span className='title'>Grow with Sanskar</span>
            </div>
          </NavLink>

          <div className='lists'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/register"><li>Register</li></NavLink>
          </div>

      </header>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link className='navbar-link' to='/'>LAB - WikiCountries</Link>
    </nav>
  )
}

export default Navbar
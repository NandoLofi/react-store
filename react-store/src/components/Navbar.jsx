import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        {/* logo */}
        <div className='navbar__log'>
            <h2>MERN Shopping Cart</h2>
        </div>

        {/* links */}
        <ul className='navbar__links'>
            <li>
                <Link to="/cart">
                
                </Link>
            </li>
        </ul>

        {/* hamburger menu */}
        

    </nav>
  )
}

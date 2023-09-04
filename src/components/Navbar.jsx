import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import Logo from '../assets/images/logo.png'
import './navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setIsNavOpen(false)}>
          <img src={Logo} alt="nav_logo" />
        </Link>
        <ul className={`nav_links ${!isNavOpen && 'hide_nav'} `}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

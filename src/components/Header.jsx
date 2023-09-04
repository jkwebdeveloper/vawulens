import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/images/main_header.png'

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysofWorkOut </h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad
            obcaecati perferendis, tenetur recusandae culpa consectetur nemo!
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle">
            <div className="main_header-image">
              <img src={Image} alt="main_header" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

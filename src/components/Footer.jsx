import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae, amet quasi temporibus obcaecati maxime. Fugit, odit?
          </p>
          <div className="footer_socials">
            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://in.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://in.twitter.com/" target="_blank" rel="noreferrer">
              <AiOutlineTwitter />
            </a>
            <a
              href="https://in.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communuties</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 JIGNESH PROJECT &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import AboutHeader from '../../components/AboutHeader'
import HeaderImage from '../../assets/images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <AboutHeader title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime
        modi voluptatum ipsum facere at, vero quidem aliquam? Tempore nihil
        corrupti quis laboriosam!
      </AboutHeader>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto" target="blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="" target="blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="" target="blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

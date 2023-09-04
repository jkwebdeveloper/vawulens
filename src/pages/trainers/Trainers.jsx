import React from 'react'
import AboutHeader from '../../components/AboutHeader'
import HeaderImage from '../../assets/images/header_bg_5.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './trainers.css'
import Trainer from '../../components/Trainer'

const Trainers = () => {
  return (
    <>
      <AboutHeader title="Our  Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime
        modi voluptatum ipsum facere at, vero quidem aliquam? Tempore nihil
        corrupti quis laboriosam!
      </AboutHeader>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              ></Trainer>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Trainers

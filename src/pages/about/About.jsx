import React from 'react'
import './about.css'
import HeaderImage from '../../assets/images/header_bg_1.jpg'
import AboutHeader from '../../components/AboutHeader'
import StoryImage from '../../assets/images/about1.jpg'
import VisionImage from '../../assets/images/about2.jpg'
import MissionImage from '../../assets/images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <AboutHeader title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime
        modi voluptatum ipsum facere at, vero quidem aliquam? Tempore nihil
        corrupti quis laboriosam!
      </AboutHeader>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="our-story-image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident.ex suscipit in, minus, quaerat dignissimos voluptas
              provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur,
            </p>
          </div>
        </div>
      </section>
      <section className="about_Vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident.ex suscipit in, minus, quaerat dignissimos voluptas
              provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="our-Vision-image" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="our-mission-image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident.ex suscipit in, minus, quaerat dignissimos voluptas
              provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur, voluptatibus eligendi
              laboriosam ex suscipit in, minus, quaerat dignissimos voluptas
              provident
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolores sed consequuntur,
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

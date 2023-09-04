import React from 'react'
import AboutHeader from '../../components/AboutHeader'
import HeaderImage from '../../assets/images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../assets/images/gallery${i}.jpg`))
  }
  return (
    <>
      <AboutHeader title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maxime
        modi voluptatum ipsum facere at, vero quidem aliquam? Tempore nihil
        corrupti quis laboriosam!
      </AboutHeader>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery

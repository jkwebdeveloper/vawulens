import React from 'react'
import './home.css'
import Header from '../../components/Header'
import Programs from '../../components/Programs'
import Value from '../../components/Value'
// import FAQ from '../../components/FAQ'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
// import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Value />
      {/* <FAQ /> */}
      <FAQs />
      <Testimonials />
      {/* <Footer /> */}
    </>
  )
}

export default Home

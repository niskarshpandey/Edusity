import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge technology and innovative solutions are designed to emIpower students and educators alike, providing them with the tools they need to succeed in today's fast-paced world. We are committed to creating a brighter future for all through education.
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

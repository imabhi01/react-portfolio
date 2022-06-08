import React from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {images} from '../../constants'

const About = () => {
  
  const abouts = [
    {title: 'Web Development', description: 'Good developer', imgUrl: images.about01},
    {title: 'Frontend Development', description: 'Good designer', imgUrl: images.about02},
    {title: 'Backend Development', description: 'Good designer', imgUrl: images.about03},
    {title: 'MERN Stack', description: 'Good animator', imgUrl: images.about04},
  ];

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Development</span><br/><span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}></img>
            <h2 className='bold-text' style={{ marginTop: '20px'}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: '20px'}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
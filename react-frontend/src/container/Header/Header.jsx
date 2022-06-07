import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='app__header app_flex' id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Micael</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'> Developer</p>
            <p className='p-text'>Designer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 1, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img alt="profile_bg" src={images.profile} />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'></img>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header
import React from 'react'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const BlogHeader = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div class="app__navbar">
        <div class="app__navbar-logo">
            <img src={images.myLogo} alt="logo"></img>
        </div>
        <ul className="app__navbar-links">
            {['Posts', 'about', 'Category'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
                <div/>
                {(item == 'about') ? <a href='/'>{item}</a> : <a href={item}>{item}</a>}
            </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} ></HiMenuAlt4>
            { toggle && (
            <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut'}}
            >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                {['home', 'about', 'work', 'skills', 'certifications', 'contact'].map((item) => (
                    <li key={item}>
                    <a href={`$#{item}`} onClick={() => setToggle(false)}>
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </motion.div>
            )}
        </div>
    </div>
  )
}

export default BlogHeader
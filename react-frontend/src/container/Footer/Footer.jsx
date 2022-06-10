import React from 'react'
import './Footer.scss'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {urlFor, client} from '../../client'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;


  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name] : value});
  }

  const handleSubmit = () => {
    setLoading(true);
  }


  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email"></img>
          <a href="mailto:hello@micael.com" className='p-text'>hello@micael.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"></img>
          <a href="tel: + 1 (123) 123-123" className='p-text'>tel: + 1 (123) 123-123</a>
        </div>
      </div>


      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          <input type="text" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name={message}
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <button type='submit' className='p-text' onClick={() => handleSubmit()}>{loading ? 'Sending Message' : 'Send Message'}</button>

      </div>
    </>  
  )
}

export default AppWrap(Footer, 'footer');

// export default AppWrap(
//   MotionWrap(Footer, 'footer'),
//   'contact',
//   'app__whitebg'
// );
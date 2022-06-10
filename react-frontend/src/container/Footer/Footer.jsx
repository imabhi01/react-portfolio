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
    // console.log(e);
    const {name, value} = e.target;
    
    setFormData({...formData, [name] : value});
  }

  const handleSubmit = () => {

    setLoading(true);
    console.log(name, email, message);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then((data) => {
        console.log(data);
        setLoading(false);
        setIsFormSubmitted(true);
      })
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

      { !isFormSubmitted ?
        (
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className='app__flex'>
              <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea 
                className='p-text' 
                placeholder='Your Message' 
                name="message" 
                value={message} 
                onChange={handleChangeInput}
              />
            </div>
            <button type='submit' className='p-text' onClick={() => handleSubmit()}>{loading ? 'Sending Message' : 'Send Message'}</button>
          </div>
        )
      : 
        (
          <div>
            <h3 className='head-text'>Thank you for getting in touch!</h3> 
          </div>
        )
      }
      
    </>  
  )
}

// export default AppWrap(Footer, 'footer');

export default AppWrap(
  MotionWrap(Footer, 'footer'),
  'contact',
  'app__whitebg'
);
import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a 
            href='https://github.com/imabhi01'
            target="_blank"
          >   
            <BsGithub></BsGithub>
          </a>
        </div>
        <div>
          <a 
            href='https://www.linkedin.com/in/abhishek-chaudhary-504124105/'
            target="_blank"
          >   
            <BsLinkedin></BsLinkedin>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/abhishek.chaudhary.750" target="_blank">
            <FaFacebookF></FaFacebookF>
          </a>
        </div>
        {/* <div>
          <a href="#" target="_blank"></a>
          <BsInstagram></BsInstagram>
        </div> */}
    </div>
  )
}

export default SocialMedia
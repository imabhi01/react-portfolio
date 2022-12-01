import React from 'react'
import './Certifications.scss'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    client.fetch(query)
      .then((data) => setCertifications(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>Certifications</h2>
      <div className="app__profiles">
        {certifications.map((certificate, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__certification-item"
            key={certificate.title + index}
          >
            <a href={urlFor(certificate.imgUrl)} rel="noreferrer" target="_blank"><img src={urlFor(certificate.imgUrl)} alt={certificate.title} /></a>
            <h2 className='bold-text' style={{ marginTop: '20px'}}>{certificate.title}</h2>
            <p className='p-text' style={{ marginTop: '20px'}}>{certificate.issuingOrganization}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'), 
  'certifications',
  'app__primarybg'
);
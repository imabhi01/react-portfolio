// import React from 'react'
// import './Certifications.scss' 
// import {motion} from 'framer-motion'
// import { useState, useEffect } from 'react'
// import { urlFor, client} from '../../client'
// import { AppWrap, MotionWrap } from '../../wrapper'

// export const Certifications = () => {
//   const [certifications, setCertifications] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "certifications"]';
//     client.fetch(query)
//       .then((data) => setCertifications(data));

//   }, []);

//   return (
//     <>
//       <h2 className='head-text'>I know that <span>Good Development Is</span><br/><span>Good Business</span></h2>

//       <h2 className='head-text'>Certifications</h2>  
//       <div className="app__certifications-container">  
        
//         <motion.div
//           className='app__certifications-list'
//         >
//           {/* <div className=""> */}
//             {certifications?.map((certificate, index) => (
//               <div className='app__certifications-content'>
//                 <img src={urlFor(certificate.imgUrl)} alt={certificate.title} />
//                 <h4 className='bold-text'>{certificate.issuingOrganization}</h4>
//                 <p className='p-text'>{certificate.title}</p>
//               </div>
//             ))}
//           {/* </div> */}
//         </motion.div>
//       </div>
//     </>
//   )
// }

// export default AppWrap(
//   MotionWrap(Certifications, 'app__certifications'), 
//   'certifications',
//   'app__primarybg'
// );



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

  console.log(certifications);

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
            <a href={urlFor(certificate.imgUrl)} target="_blank"><img src={urlFor(certificate.imgUrl)} alt={certificate.title} /></a>
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
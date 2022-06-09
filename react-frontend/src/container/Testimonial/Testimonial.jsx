import React from 'react'
import './Testimonial.scss'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
      .then((data) => setTestimonials(data));

    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery)
      .then((data) => setBrands(data));

  }, []);

  return (
    <>
      {
        testimonials.length && (
          <>

            <div className='app__testimonial-item'>

            </div>

          </>
        )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonial',
  'app__primarybg'
);
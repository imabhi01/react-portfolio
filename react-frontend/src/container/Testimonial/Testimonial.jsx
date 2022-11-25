import React from 'react'
import './Testimonial.scss'
import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
      .then((data) => setTestimonials(data));

    const brandsQuery = '*[_type == "brand"]';

    client.fetch(brandsQuery)
      .then((data) => setBrands(data));

  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {
        testimonials.length && (
          <>
            <div className='app__testimonial-item app__flex'>
              <img src={urlFor(testimonials[currentIndex].imgUrl)} alt={testimonials[currentIndex].name} />

              <div className='app__testimonial-content'>
                <p className='p-text'>{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className='bold-text'>{test.name}</h4>
                  <p className='p-text'>{test.company}</p>
                </div>
              </div>
            </div>

            <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={() => handleClick((currentIndex === 0) ? testimonials.length-1 : currentIndex-1)}>
                <HiChevronLeft />
              </div>
              <div className='app__flex' onClick={() => handleClick((currentIndex === testimonials.length-1) ? 0 : currentIndex+1)}>
                <HiChevronRight/>
              </div>
            </div>

            <div className='app__testimonial-brands app__flex'>
              {brands.map((brand) => (
                <motion.div
                  whileInView={{opacity: [0,1]}}
                  transition={{duration: 0.5, type: 'tween'}}
                  key={brands._id}
                >
                  <img src={urlFor(brand.imgUrl)} alt={brand.name}></img>
                </motion.div>
              ))}
            </div>
          </>
        )
      }
    </>
  )
}

// export default AppWrap(Testimonial, 'testimonial')

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonials',
  'app__whitebg'
);
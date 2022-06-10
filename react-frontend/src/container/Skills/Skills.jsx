import React from 'react'
import './Skills.scss'
import {motion} from 'framer-motion'
import {client, urlFor, useFor} from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'
import ReactTooltip from 'react-tooltip';
import {useState, useEffect} from 'react'

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query)
      .then((data) => setExperiences(data));
    
    client.fetch(skillsQuery)
      .then((data) => setSkills(data));

  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>

        <motion.div
          className='app__skills-list'
        >
         {skills?.map((skill, index) => (

          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div className='app__flex' style={{ backgroundColor: skill.bgColor }} >
              <img src={urlFor(skill.icon)} alt={skill.name}/>
            </div>

            <p className='p-text'>{skill.name}</p>
          </motion.div>
           
         ))} 
        </motion.div>

        <motion.div
          className='app__skills-exp'
        >

          {experiences?.map((experience, index) => (

            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div 
                className='app__skills-exp-works'
              >
                {experience?.works?.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0,1]}}
                      transition={{duration: 0.5}}
                      className="app__skills-exp-work app__flex"
                      key={work.index}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor='#fff'
                      className='skills-tooltip'
                      key={work.name}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>

            </motion.div>
          ))}  
        </motion.div>
      </div>
    </>
  )
}

// export default AppWrap(Skills, 'skills');

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);
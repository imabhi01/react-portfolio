// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import testimonials from './testimonials'
import experiences from './experiences'
import workExperience from './workExperience'
import brands from './brands'
import skills from './skills'
import about from './about'
import works from './works'
import contact from './contact'
import certifications from './certifications'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    testimonials,
    workExperience,
    experiences,
    brands,
    about,
    skills,
    works,
    certifications,
    contact
  ]),
})

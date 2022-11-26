export default{
    name: 'certifications',
    title: 'Certifications',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'issuingOrganization',
            title: 'Issuing Organization',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}
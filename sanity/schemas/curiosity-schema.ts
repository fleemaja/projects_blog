const curiosity = {
    name: 'curiosity',
    title: 'Curiosities',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                  type: 'block'
                },
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Image caption',
                      description: 'Caption displayed below the image.'
                    },
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessiblity.',
                    },
                  ],
                },
                {
                  type: 'youtube'
                },
            ]
        },
    ]
}

export default curiosity;
const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
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
                {
                  name: 'code',
                  title: 'Code Block',
                  type: 'code'
                }
            ]
        },
        {
          name: 'excerpt',
          title: 'Excerpt',
          type: 'string',
        },
        {
          name: 'category',
          title: 'Category',
          type: 'reference', 
          to: {type: 'category'},
        }
    ]
}

export default project;
const curiosity = {
    name: 'curiosity',
    title: 'Curiosities',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
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
            ]
        },
        {
          name: 'color',
          title: 'Color',
          type: 'string',
          options: {
            list: [
              { title: "Red", value: "red" },
              { title: "Orange", value: "orange" },
              { title: "Yellow", value: "yellow" },
              { title: "Green", value: "green" },
              { title: "Teal", value: "teal" },
              { title: "Blue", value: "blue" },
              { title: "Indigo", value: "indigo" },
              { title: "Violet", value: "violet" },
            ],
          },
        },
        {
          name: 'emoji',
          title: 'Emoji',
          type: 'string',
        },
    ]
}

export default curiosity;
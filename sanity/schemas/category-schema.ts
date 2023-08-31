const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: { source: 'title' }
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
  ],
}

export default category;
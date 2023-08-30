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
          { title: "Red", value: "red-500" },
          { title: "Orange", value: "orange-500" },
          { title: "Yellow", value: "yellow-500" },
          { title: "Green", value: "green-500" },
          { title: "Teal", value: "teal-500" },
          { title: "Blue", value: "blue-500" },
          { title: "Indigo", value: "indigo-500" },
          { title: "Violet", value: "violet-500" },
        ],
      },
    },
  ],
}

export default category;
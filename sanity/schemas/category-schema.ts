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
  ],
}

export default category;
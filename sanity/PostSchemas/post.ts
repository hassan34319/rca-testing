export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'favorited',
        title: 'Favorited',
        type: 'boolean',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'author',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'coverUrl',
        title: 'Cover URL',
        type: 'string',
      },
      {
        name: 'heroUrl',
        title: 'Hero URL',
        type: 'string',
      },
    ],
  };
  
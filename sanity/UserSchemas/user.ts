export const user =  {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'object',
        fields: [
          {
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
          },
          {
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
          },
          {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'string',
          },
          {
            name: 'twitter',
            title: 'Twitter',
            type: 'string',
          },
        ],
      },
    ],
  };
  
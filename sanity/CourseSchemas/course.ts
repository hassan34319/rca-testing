// courseSchema.js
export const course = {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'learnList',
      title: 'Learn List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'number',
    },
    {
      name: 'totalHours',
      title: 'Total Hours',
      type: 'number',
    },
    {
      name: 'teachers',
      title: 'Teachers',
      type: 'array',
      of: [
        {
          type: 'teacher',
        },
      ],
    },
    {
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [
        {
          type: 'lesson',
        },
      ],
    },
    {
      name: 'totalQuizzes',
      title: 'Total Quizzes',
      type: 'number',
    },
    {
      name: 'totalReviews',
      title: 'Total Reviews',
      type: 'number',
    },
    {
      name: 'totalStudents',
      title: 'Total Students',
      type: 'number',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'bestSeller',
      title: 'Best Seller',
      type: 'boolean',
    },
    {
      name: 'coverUrl',
      title: 'Cover URL',
      type: 'string',
    },
    {
      name: 'ratingNumber',
      title: 'Rating Number',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'priceSale',
      title: 'Sale Price',
      type: 'number',
    },
    {
      name: 'shareLinks',
      title: 'Share Links',
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

  
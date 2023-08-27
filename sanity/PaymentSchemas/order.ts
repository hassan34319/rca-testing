export const miscursos =  {
    name: "miscursos",
    title: "Mis Cursos",
    type: "document",
    fields: [
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "course_slugs",
        title: "Course Slugs",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
      },
    ],
  };
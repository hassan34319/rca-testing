import { client } from 'src/app/utils/client';
import { CourseSanity } from 'src/types/SanityCourse';
import ElearningCourseView from 'src/sections/_elearning/view/elearning-course-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Cursos ofrecidos por RCA Capital',
};

export const revalidate = 60

export default async function ElearningCoursePage({ params }: { params: { id: string } }) {
  const getAllCourses = async () => {
    try {
      const courses: CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      console.log('fetched Courses from sanity');
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses();

  const courseId = params.id;
  console.log(courseId)

  const course: CourseSanity = await client.fetch(
    `*[_type == "course" && id == $courseId][0]`,
    {
      courseId, // Pass the courseId as a parameter in the options object
    }
  );


  console.log(course)

  return <ElearningCourseView course={course} courses={courses} />;
}

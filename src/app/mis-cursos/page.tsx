import { CourseSanity } from 'src/types/SanityCourse';
import ElearningMisView from 'src/sections/_elearning/view/elearning-miscursos-view';

import { client } from '../utils/client';
import { getSessionServer } from '../utils/getCurrentUser';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Courses',
};

export const revalidate = 60;

export default async function ElearningCoursesPage() {
  const session = await getSessionServer();
  console.log(session);
  const email = session?.user?.email;

  const getAllCourses = async () => {
    if (!session) {
      return []
    }
    const query = `*[_type == "miscursos" && email == $email][0]`;
    const miscursosDoc = await client.fetch(query, { email });

    if (miscursosDoc) {
      const courseSlugs = miscursosDoc.course_slugs || [];

      // Step 2: Loop over the "course_slugs" array and query the database for each course
      const coursesPromises = courseSlugs.map(async (courseSlug: string) => {
        const courseQuery = `*[_type == "course" && id == $courseSlug][0]`;
        const course = await client.fetch(courseQuery, { courseSlug });
        return course;
      });

      // Step 3: Create an array containing all the course details
      const courses = await Promise.all(coursesPromises);
      return courses;
      // Now the 'allCourses' array contains details of all courses related to the user's email
      console.log(courses);
    }
    console.log("No 'miscursos' document found for the provided email.");
    return [];
  };

  const courses = await getAllCourses();

  return <ElearningMisView courses={courses} />;
}

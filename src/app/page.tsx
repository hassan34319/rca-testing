


import MainLayout from 'src/layouts/main';
import { CourseSanity } from 'src/types/SanityCourse';
import HomeView from 'src/sections/_elearning/view/elearning-landing-view';

import { client } from './utils/client';
import { getSessionServer } from "./utils/getCurrentUser";


// ----------------------------------------------------------------------

export const metadata = {
  title: 'RCA Capital',
};

export const revalidate = 60

export default async function HomePage() {
  const getAllCourses = async () => {
    try {
      const courses : CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      console.log('fetched Courses from sanity')
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses()
  const session = await getSessionServer()
  console.log(session)
  return (
    <MainLayout>
      <HomeView courses={courses} />
    </MainLayout>
  );
}

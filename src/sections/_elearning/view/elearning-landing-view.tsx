'use client';

import { useSession } from 'next-auth/react';

import { client } from 'src/app/utils/client';
import { CourseSanity } from 'src/types/SanityCourse';
import { _members, _courses, _brandsColor, _coursePosts } from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';

// ----------------------------------------------------------------------

export default function ElearningLandingView({courses} : {courses : CourseSanity[]}) {
  
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    console.log('Sesión  iniciada');
  }
  console.log('From elearning', session, status);
  return (
    <>
      <ElearningLandingHero />

      <ElearningOurClients brands={_brandsColor} />

      <ElearningLandingFeaturedCourses courses={courses} />

      <ElearningTeam members={_members.slice(0, 4)} />

      {/* <ElearningTestimonial testimonials={_testimonials} /> */}

      <ElearningLatestPosts posts={_coursePosts.slice(0, 4)} />

      <ElearningNewsletter />
    </>
  );
}

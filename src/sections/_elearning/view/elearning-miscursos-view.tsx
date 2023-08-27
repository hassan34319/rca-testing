'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { CourseSanity } from 'src/types/SanityCourse';

import ElearningCourseList from '../list/elearning-course-list';

export default function ElearningMisView({ courses }: { courses: CourseSanity[] }) {
  const { data: session } = useSession();
  const loading = useBoolean(true);

  useEffect(() => {
    if (session) {
      const fakeLoading = () => {
        setTimeout(() => {
          loading.onFalse();
        }, 500);
      };
      fakeLoading();
    } else {
      loading.onFalse();
    }
  }, [loading, session]);

  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h2">Mis Cursos</Typography>
      </Box>
      {session ? (
        <ElearningCourseList courses={courses} loading={loading.value} />
      ) : (
        <h2>Por favor inicia sesión para acceder a esta página</h2>
      )}
    </Container>
  );
}
import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { CourseSanity } from 'src/types/SanityCourse';

import ElearningMisCourseItem from './elearning-miscourse-item';
import ElearningCourseItemSkeleton from './elearning-course-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  courses: CourseSanity[];
  loading?: boolean;
};

export default function ElearningMisCourseList({ courses, loading }: Props) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : courses).map((course, index) =>
          course ? (
            <ElearningMisCourseItem key={course.id} course={course} />
          ) : (
            <ElearningCourseItemSkeleton key={index} />
          )
        )}
      </Stack>

      <Pagination
        count={1}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { ICourseProps } from 'src/types/course';

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function CursoPlayerHero({ course }: Props) {


  const {
    slug,
    level,
    lessons,
    category,
    coverUrl,
    languages,
    bestSeller,
    totalHours,
    description,
    ratingNumber,
    totalQuizzes,
    totalReviews,
    totalStudents,
    teachers = [],
  } = course;


  const theme = useTheme();

  return (
    <Stack
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        py: 2,
        px: 2,
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', color: 'common.white', mb: 1 }}>
      {slug}
      </Typography>

    </Stack>
  );
}

'use client';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

import { _courses } from 'src/_mock';
import Player from 'src/components/player/player';
import { RouterLink } from 'src/routes/components';
import { CourseSanity } from 'src/types/SanityCourse';

import CursoPlayerHero from './curso-player-hero';
import CursoPlayerLessonList from './curso-player-lesson-list';
// ----------------------------------------------------------------------


type Props = {
  course: CourseSanity;
};

const _mockCourse = _courses[0];

export default function CursoPlayer({ course }: Props) {


  return (
    <>
    
      <CursoPlayerHero course={course}/>
      {/* <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh' }}>
<Box>
      <Player
  controls
  url="https://www.dropbox.com/s/7cx04n8rr4w5rbg/video_02.mp4?dl=0"
  style={{
    display: "block",
    margin: "0 auto",
    maxWidth: "80%",
    borderRadius: "10px",
  }}
      />
</Box>
  </Stack> */}
  
  <Box sx={{ mt: 7 , mr: 15, ml: 15, mb: 10 }}>
 <CursoPlayerLessonList lessons={course.lessons}/>

 <Button
      component={RouterLink}
      href="/mis-cursos"
      size="large"
      color="primary"
      variant="outlined"
      style={{
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        textTransform: 'none',
      }}
    >
      Volver a mis cursos
    </Button>
 </Box>
    </>
  );
}

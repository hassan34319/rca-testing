'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { _courses } from 'src/_mock';
import { ICourseProps } from 'src/types/course';
import Player from 'src/components/player/player';

import CursoPlayerHero from './curso-player-hero';
import CursoPlayerLessonList from './curso-player-lesson-list';
// ----------------------------------------------------------------------


type Props = {
  course: ICourseProps;
};

const _mockCourse = _courses[0];

export default function CursoPlayer({ course }: Props) {


  return (
    <>
    
      <CursoPlayerHero course={_mockCourse}/>
      <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh' }}>
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
  </Stack>
  
  <Box style={{ margin: '100px' }}>
 <CursoPlayerLessonList lessons={course.lessons}/>
 </Box>
    </>
  );
}

import { useState, useCallback } from 'react';

import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { ICourseLessonProp } from 'src/types/course';

import CursoPlayerLessonItem from './curso-player-lesson-item';
import CursoPlayerLessonsDialog from './curso-player-lesson-dialog';

// ----------------------------------------------------------------------

type Props = {
  lessons: ICourseLessonProp[];
};

export default function CursoPlayerLessonList({ lessons }: Props) {
  const videoPlay = useBoolean();

  const [expanded, setExpanded] = useState<string | false>(false);

  const [selectedLesson, setSelectedLesson] = useState<ICourseLessonProp | null>(null);

  const handleReady = useCallback(() => {
    setTimeout(() => videoPlay.onTrue(), 500);
  }, [videoPlay]);

  const handleSelectedLesson = useCallback((lesson: ICourseLessonProp) => {
    if (lesson.unLocked) {
      setSelectedLesson(lesson);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSelectedLesson(null);
    videoPlay.onFalse();
  }, [videoPlay]);

  const handleExpandedLesson = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lecciones del curso
      </Typography>

      {lessons.map((lesson) => (
        <CursoPlayerLessonItem
          key={lesson.id}
          lesson={lesson}
          expanded={expanded === lesson.id}
          onExpanded={handleExpandedLesson(lesson.id)}
          selected={selectedLesson?.id === lesson.id}
          onSelected={() => {
            handleSelectedLesson(lesson);
          }}
        />
      ))}

      <CursoPlayerLessonsDialog
        lessons={lessons}
        selectedLesson={selectedLesson}
        onSelectedLesson={(lesson) => setSelectedLesson(lesson)}
        open={!!selectedLesson?.unLocked}
        onClose={handleClose}
        playing={videoPlay.value}
        onReady={handleReady}
        onEnded={videoPlay.onFalse}
        onPlay={videoPlay.onTrue}
        onPause={videoPlay.onFalse}
      />
    </div>
  );
}

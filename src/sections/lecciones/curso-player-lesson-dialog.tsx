import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import Player from 'src/components/player';
import Iconify from 'src/components/iconify';
import { ICourseLessonProp } from 'src/types/course';

// ----------------------------------------------------------------------

type Props = {
  lessons: ICourseLessonProp[];
  selectedLesson: ICourseLessonProp | null;
  onSelectedLesson: (lesson: ICourseLessonProp) => void;
  open: boolean;
  onClose: VoidFunction;
  playing: boolean;
  onReady: VoidFunction;
  onEnded: VoidFunction;
  onPlay: VoidFunction;
  onPause: VoidFunction;
};

export default function CursoPlayerLessonsDialog({
  lessons,
  selectedLesson,
  onSelectedLesson,
  open,
  onClose,
  playing,
  onReady,
  onEnded,
  onPlay,
  onPause,
}: Props) {
  const renderVideo = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: { xs: 1, md: 1 },
        height: { xs: 320, md: 640 },
      }}
    >
      {selectedLesson?.videoPath ? (
        <Player
          controls
          url={selectedLesson?.videoPath}
          playing={playing}
          onReady={onReady}
          onEnded={onEnded}
          onPlay={onPlay}
          onPause={onPause}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            typography: 'h6',
            color: 'text.disabled',
            bgcolor: 'background.neutral',
          }}
        >
          No Data
        </Stack>
      )}
    </Stack>
  );

  const renderList = (
    <Stack
      spacing={0.5}
      sx={{
        p: 1,
        overflowY: 'hidden',
        width: { xs: 1, md: 1 },
        height: { xs: 320, md: 640 },
      }}
    >
      {lessons?.map((lesson) => {
        const selected = selectedLesson?.id === lesson.id;

        const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

        return (
          <ListItemButton
            key={lesson.id}
            selected={selected}
            disabled={false}
            onClick={() => onSelectedLesson(lesson)}
            sx={{ borderRadius: 1 }}
          >
            <Iconify
              width={24}
              icon={playIcon}
              sx={{
                mr: 2,
                ...(selected && {
                  color: 'primary.main',
                }),
              }}
            />

            <ListItemText
              primary={lesson.title}
              secondary={lesson.description}
              primaryTypographyProps={{
                typography: 'subtitle1',
                sx: {
                  ...(selected && {
                    color: 'primary.main',
                  }),
                },
              }}
              secondaryTypographyProps={{
                noWrap: true,
                component: 'span',
              }}
            />
          </ListItemButton>
        );
      })}
    </Stack>
  );

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      // eslint-disable-next-line react/jsx-boolean-value
      open={true}
      onClose={onClose}
      PaperProps={{
        sx: {
          // overflow: 'hidden',
          overflowY: 'scroll',
        },
      }}
    >
      <IconButton onClick={onClose} sx={{ top: 8, left: 8, zIndex: 9, position: 'absolute' }}>
        <Iconify icon="carbon:close" />
      </IconButton>

      <Stack direction={{ xs: 'column', md: 'column' }} sx={{ height: 1 }}>
        {renderVideo}
        <Divider sx={{ mt: 3, mb: 2, mr: 3, ml: 3 , borderColor: 'rgba(0, 0, 0, 0.3)' }} />
        {renderList}
      </Stack>
    </Dialog>
  );
}

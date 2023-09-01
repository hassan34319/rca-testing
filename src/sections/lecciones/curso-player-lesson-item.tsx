import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import Iconify from 'src/components/iconify';
import { ICourseLessonProp } from 'src/types/course';

// ----------------------------------------------------------------------

type LessonItemProps = {
  lesson: ICourseLessonProp;
  expanded: boolean;
  selected: boolean;
  onSelected: VoidFunction;
  onExpanded: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export default function CursoPlayerLessonItem({
  lesson,
  expanded,
  selected,
  onSelected,
  onExpanded,
}: LessonItemProps) {
  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    <Accordion
    expanded={expanded}
    onChange={onExpanded}
    onClick={onSelected}
    onMouseEnter={(event) => onExpanded(event, true)} // Expand on mouse enter
    onMouseLeave={(event) => onExpanded(event, false)} // Collapse on mouse leave
    disabled={false}
    
      sx={{
        [`&.${accordionClasses.expanded}`]: {
          borderRadius: 0,
        },
      }}
    >
      <AccordionSummary
        sx={{
          px: 1,
          minHeight: 64,
          [`& .${accordionSummaryClasses.content}`]: {
            p: 0,
            m: 0,
          },
          [`&.${accordionSummaryClasses.expanded}`]: {
            bgcolor: 'action.selected',
          },
        }}
      >
        <Iconify
          width={24}
          icon={playIcon}
          onClick={onSelected}
        />

        <Typography
          variant="subtitle1"
          sx={{
            pl: 2,
            flexGrow: 1,
          }}
        >
          {lesson.title}
        </Typography>

        <Typography variant="body2">{lesson.duration} m</Typography>

        <Iconify icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'} sx={{ ml: 2 }} />
      </AccordionSummary>

      <AccordionDetails
        sx={{
          p: 2,
          typography: 'body',
          color: 'text.secondary',
        }}
      >
        {lesson.description}
      </AccordionDetails>
    </Accordion>
  );
}

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ITeamMemberProps } from 'src/types/team';

import ElearningTeamItem from './elearning-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function ElearningTeam({ members }: Props) {
  // Take only the first three members
  const firstThreeMembers = members.slice(0, 3);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h2">Quienes Somos</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, quae! Sit est ratione fugit explicabo,
          distinctio deserunt. Enim, adipisci quae tenetur omnis vitae, nemo sequi reprehenderit quas mollitia, accusamus
          atque?
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          py: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {/* Render the first three members */}
        {firstThreeMembers.map((member) => (
          <ElearningTeamItem key={member.id} member={member} />
        ))}
      </Box>

      <Stack alignItems="center">
        <Button variant="outlined" size="large" color="inherit">
          Más sobre nosotros
        </Button>
      </Stack>
    </Container>
  );
}

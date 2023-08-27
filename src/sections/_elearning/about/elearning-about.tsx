import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Aquí puede ir un dato',
    number: 14000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'También',
    number: 1050,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Finalizaron',
    number: 52000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            Aquí puede ir una imagen.
          </Typography>
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Resultados efectivos en el trabajo correspondiente
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus explicabo optio quas, earum impedit perferendis nisi dignissimos dolor, similique ipsum nulla quia soluta accusamus? Quas magnam voluptas iste aliquid atque.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        direction={{ md: 'row-reverse' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          pt: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="about"
            src="/assets/images/course/course_about.jpg"
            ratio="3/4"
            sx={{ borderRadius: 2 }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Stack spacing={{ xs: 5, md: 10 }}>
            {SUMMARY.map((value) => (
              <Box key={value.name}>
                <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                  {value.name}
                </Typography>

                <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                  <CountUp
                    start={value.number / 2}
                    end={value.number}
                    formattingFn={(newValue: number) => fShortenNumber(newValue)}
                  />
                  +
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

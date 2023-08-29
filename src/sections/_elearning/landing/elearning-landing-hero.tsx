
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import Player from 'src/components/player';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Algún dato', color: 'warning' },
  { value: 1050, label: 'Algún dato ', color: 'error' },
  { value: 59000, label: 'Algún dato', color: 'success' },
] as const;

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>

      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            py: 5,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `120vh` },
          }}
        >

            <Stack
  sx={{
    textAlign: 'center', // Centrar el texto en dispositivos pequeños y medianos
    // [theme.breakpoints.up('md')]: {
    //   textAlign: 'center', // Restaurar la alineación normal en dispositivos grandes
    // },
    paddingTop: 5,
  }}
>
                <Typography variant="h1">
                  
                   <Box component="span" sx={{ textDecoration: ' underline dotted grey' }}>
                    {` Tecnología `}
                  </Box>
                  que
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` genera `}
                  </Box>
                  riqueza
                </Typography>
                {/* <ElearningHeroIllustration /> */}

                <Typography
      paddingX={15}
      sx={{
        color: 'text.secondary',
        mt: 2,
        mb: 5,
        width: '100%', // Establece el ancho al 100%
        maxWidth: '100%', // Establece el ancho máximo al 100%
        '@media (max-width:600px)': {
          // Aplica estos estilos solo cuando la pantalla sea pequeña
          paddingX: 0, // Elimina el padding horizontal
          textAlign: 'center', // Centra el texto
        },
      }}
    >
      Somos una empresa de Fintech que diseña, valida y aplica soluciones financieras para construir portafolios ganadores y estrategias rentables en los mercados financieros.
    </Typography>
 
{/* <Box>
<Player
  controls
  url="https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0"
  style={{
    display: "block",
    margin: "0 auto",
    maxWidth: "70%",
    borderRadius: "10px",
  }}
/>

</Box> */}


<Grid item xs={12} md={6}>
        <Player
          controls
          url="https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0"
          style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: mdUp ? '70%' : '100%', // Set maxWidth based on screen size
            width: '100%',
            borderRadius: '10px',
          }}
        />
      </Grid>


                <Stack
  direction="row"
  justifyContent="center" // Centrar horizontalmente en todos los dispositivos
  alignItems="center"
  sx={{ typography: 'h5', mt: 2 }} // Añadir margen superior para separar del subtítulo
>
<Fab size="medium" color="info" href='/cursos' onClick={videoOpen.onTrue} sx={{ mr: 1 }}>
    <Iconify width={25} icon="fluent-mdl2:learning-tools" />
  </Fab>
Explorar cursos

  {/* <Fab size="medium" color="info" onClick={videoOpen.onTrue} sx={{ mr: 1 }}>
    <Iconify width={25} icon="fluent-mdl2:learning-tools" />
  </Fab>
  Explorar cursos */}
</Stack>


                <Divider sx={{ borderStyle: 'dashed', mt: 5, mb: 6 }} />

                <Stack
      direction="row"
      spacing={{ xs: 3, sm: 10 }}
      justifyContent="center" // Centrado horizontal
      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>

        </Container>
      </Box>

      {/* <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} /> */}
</>
  );
}

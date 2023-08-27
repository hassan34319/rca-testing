import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function SupportHero() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        py: 10,
        px: 2.5,
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" sx={{ textAlign: 'center', color: 'primary.main', mb: 5 }}>
        Bienvenido a  
        <Box component="span" sx={{ color: 'common.white' }}>
          {` RCA Capital `}
        </Box>
        soporte
      </Typography>
{/* 
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Buscar..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
          sx: { color: 'common.white' },
        }}
        sx={{ maxWidth: 366 }}
      /> */}
    </Stack>
  );
}

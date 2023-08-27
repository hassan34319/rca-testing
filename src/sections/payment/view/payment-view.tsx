'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import PaymentSummary from '../payment-summary';
import PaymentMethods from '../payment-methods';

// ----------------------------------------------------------------------

export default function PaymentView() {
  const mdUp = useResponsive('up', 'md');

  const renderBillingAddress = (
    <div>
      <Typography variant="h5">Datos personales</Typography>

      <Stack spacing={2.5} mt={5}>
        <TextField fullWidth label="Nombre" />
        <TextField fullWidth label="Número de telefono" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Dirección" />
      </Stack>
    </div>
  );

  return (
    <Container
      sx={{
        overflow: 'hidden',
        minHeight: 1,
        pt: { xs: 12, md: 9 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h3" align="center" paragraph>
      A sólo un paso del éxito!
      </Typography>

      <Typography align="center" sx={{ color: 'text.secondary', mb: { xs: 5, md: 8 } }}>
       Es adecuado para usted.
      </Typography>

      <Grid container spacing={mdUp ? 3 : 5}>
        <Grid xs={12} md={8}>
          <Box
            gap={5}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            sx={{
              p: { md: 5 },
              borderRadius: 2,
              border: (theme) => ({
                md: `dashed 1px ${theme.palette.divider}`,
              }),
            }}
          >
            {renderBillingAddress}

            <PaymentMethods />
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
}

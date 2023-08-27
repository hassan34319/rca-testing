import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PaymentSummary({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h5" sx={{ mb: 5 }}>
        Resumen
      </Typography>

      <Stack spacing={2.5}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ***Subscripción
          </Typography>

          <Label color="error">PREMIUM</Label>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Facturado mensual
          </Typography>
          <Switch defaultChecked color="success" />
        </Stack>

        <Stack spacing={1} direction="row" justifyContent="flex-end">
          <Typography variant="h5">$</Typography>

          <Typography variant="h2">249.99</Typography>

          <Typography component="span" sx={{ mb: 1, alignSelf: 'center', color: 'text.secondary' }}>
            /mo
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Total facturado</Typography>

          <Typography variant="h6">$249.99*</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />
      </Stack>

      <Typography
        component="div"
        variant="caption"
        sx={{ color: 'text.secondary', mt: 1, textAlign: 'right' }}
      >
        * Más impuestos aplicables
      </Typography>

      <LoadingButton
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        sx={{ mt: 5, mb: 3 }}
      >
        Actualizar plan
      </LoadingButton>

      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Iconify icon="carbon:security" sx={{ color: 'success.main' }} />
          <Typography variant="subtitle2">Pago seguro con tarjeta de crédito</Typography>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
        Este es un pago seguro, encriptado SSL de 128 bits
        </Typography>
      </Stack>
    </Box>
  );
}

import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ElearningContactForm() {
  const mdUp = useResponsive('up', 'md');
  const [showAlert, setShowAlert] = useState(false);

  const ElearningContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Se requiere nombre completo'),
    email: Yup.string().required('Se requiere un email').email('Ese no es un email'),
    subject: Yup.string().required('Se requiere asunto'),
    message: Yup.string().required('Se requiere mensaje'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(ElearningContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("SUBMIT")
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email : data.email, fullName : data.fullName, subject : data.subject, message : data.message  }), // Send email in the request body
      });

      if (response.ok) {
        console.log('Form sent successfully!');
        setShowAlert(true); 
      } else {
        console.error('Form reques failedt:', response.statusText);
      }

      console.log('Form created successfully!');
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image
                alt="contact"
                src="/assets/illustrations/illustration_marketing_contact.svg"
                sx={{ maxWidth: 700 }}
              />
            </Grid>
          )}

          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h3">Escríbanos</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
              Normalmente respondemos dentro de 2 días hábiles
              </Typography>
            </Stack>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <RHFTextField name="fullName" label="Nombre completo" />

                <RHFTextField name="email" label="Email" />

                <RHFTextField name="subject" label="Asunto" />

                <RHFTextField name="message" multiline rows={4} label="Mensaje" sx={{ pb: 2.5 }} />

                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  sx={{
                    mx: { xs: 'auto !important', md: 'unset !important' },
                  }}
                >
                  Enviar
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Grid>
        </Grid>
        {showAlert && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Suscripción enviada correctamente!
          </Alert>
        )}
      </Container>
    </Box>
  );
}

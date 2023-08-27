'use client';

/* eslint-disable import/no-extraneous-dependencies */

import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { signUp } from 'next-auth-sanity/client';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterBackgroundView() {
  const passwordShow = useBoolean();

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Nombre completo requerido')
      .min(6, 'Minimo 6 carateres')
      .max(15, 'Maximo 15 caracteres'),
    email: Yup.string().required('Email es requerido').email('Este no es un email'),
    password: Yup.string()
      .required('Contraseña requerida')
      .min(6, 'La contraseña debe tener 6 caracteres de largo'),
    confirmPassword: Yup.string()
      .required('Se requiere confirmar contraseña')
      .oneOf([Yup.ref('password')], 'Contraseñas no coinciden'),
  });

  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!data.email) {
        // Display an error message or handle the case where email is not filled
        return;
      }
      console.log('DATA', data.email);
      await signUp({
        email : data.email,
        password : data.password,
        name : data.fullName
      });
  
      await signIn('sanity-login', {
        redirect: false,
        email : "email",
        password : "password"
      });
      toast.success('Successfully registered');
      router.push('/auth/iniciar-sesion');
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <div>
      <Typography variant="h3" paragraph>
        Empezar
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {`Ya tiene una cuenta? `}
        <Link
          component={RouterLink}
          href={paths.loginBackground}
          variant="subtitle2"
          color="primary"
        >
          Acceder
        </Link>
      </Typography>
    </div>
  );

  const renderSocials = (
    <Stack direction="row" spacing={2}>
      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        <RHFTextField name="fullName" label="Nombre completo" />

        <RHFTextField name="email" label="Dirección email" />

        <RHFTextField
          name="password"
          label="Contraseña"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirmar Contraseña"
          type={passwordShow.value ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Registrarse
        </LoadingButton>

        <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          {`Estoy de acuerdo con `}
          <Link color="text.primary" href="#" underline="always">
            Termos del servicio
          </Link>
          {` y `}
          <Link color="text.primary" href="#" underline="always">
            Politica de privacidad.
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      <Toaster />
      {renderHead}

      {renderForm}

      <Divider>
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          o continuar con
        </Typography>
      </Divider>

      {renderSocials}
    </>
  );
}

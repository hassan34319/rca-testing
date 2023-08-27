import { useSession } from 'next-auth/react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import LongMenu from '../common/longmenu';
import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';
import LongMenuUser from '../common/longmenu-user';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';


// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {

  const { data: session } = useSession()

  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >

    <Logo />
          {mdUp && <NavDesktop data={navConfig} />}

          <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <Stack spacing={1} direction="row" alignItems="center">
              {session ? <LongMenuUser /> : <LongMenu />}
            </Stack>
            {session && session.user ? (
  <h4 style={{ color: '#0455BF' }}>
    {session.user.name ? `Hola, ${session.user.name}` : 'Buenos días'}
  </h4>
) : (
  <Button
    variant="contained"
    color="primary"
    style={{ fontSize: '15px' }}
    href="/auth/registrar"
    target="_blank"
    rel="noopener"
  >
    Registrarse
  </Button>
)}
          </Stack>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

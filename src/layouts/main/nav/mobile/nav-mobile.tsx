import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, Divider, Typography } from '@mui/material';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { usePathname } from 'src/routes/hooks';
import Scrollbar from 'src/components/scrollbar';
import { useBoolean } from 'src/hooks/use-boolean';

import { NavProps } from '../types';
import { NAV } from '../../../config-layout';

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavMobile({ data }: NavProps) {
  const pathname = usePathname();

  const mobileOpen = useBoolean();

  const { data: session } = useSession()

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>

          <Stack spacing={1.5} sx={{ p: 3, textAlign: 'center' }}>
  {session ? (
    <>
      <Divider />
      <Link
        href="https://www.instagram.com/rcacapital/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', color: 'info' }}
      >
        <Iconify icon="mdi:instagram" width={32} />
        <Typography>@rcacapital</Typography>
      </Link>
    </>
  ) : (
    <Button
      variant="contained"
      color="primary"
      style={{ fontSize: '15px' }}
      href="/auth/registrar"
      target="_blank"
      rel="noopener noreferrer"
    >
      Registrarse
    </Button>
  )}
</Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

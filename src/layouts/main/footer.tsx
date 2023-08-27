import Image from 'next/image';

import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Button, { buttonClasses } from '@mui/material/Button';

import Iconify from 'src/components/iconify';
import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';

import { NavListProps } from './nav/types';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 2,
      textAlign: 'center',
    }}
  >
    <div>
      <Image
        src="/favicon/Logo1.png"
        width={55}
        height={55}
        alt="logo blanco de RCA"
      />
    </div>
    <div>
        
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          © 2023. Todos los derechos reservados
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center">
          <Link variant="caption" sx={{ color: 'text.secondary' }}>
            Centro de ayuda
          </Link>

          <Link variant="caption" sx={{ color: 'text.secondary' }}>
            Terminos del servicio
          </Link>
        </Stack>
    </div>

    <div>
      <Link href='https://www.instagram.com/rcacapital/'>
      <IconButton color="primary">
        <Iconify icon="akar-icons:instagram-fill" />
      </IconButton>
      </Link>
      <IconButton color="primary">
        <Iconify icon="akar-icons:facebook-fill" />
      </IconButton>
      <IconButton color="primary">
        <Iconify icon="akar-icons:linkedin-fill" />
      </IconButton>
    </div>
  </Container>
  );

  const mainFooter = (

   <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        textAlign: 'center',
      }}
    >
      <div>
        <Image
          src="/favicon/Logo1.png"
          width={55}
          height={55}
          alt="logo blanco de RCA"
        />
      </div>
      <div>
          
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023. Todos los derechos reservados
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Centro de ayuda
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Terminos del servicio
            </Link>
          </Stack>
      </div>

      <div>
        <Link href='https://www.instagram.com/rcacapital/'>
        <IconButton color="primary">
          <Iconify icon="akar-icons:instagram-fill" />
        </IconButton>
        </Link>
        <IconButton color="primary">
          <Iconify icon="akar-icons:facebook-fill" />
        </IconButton>
        <IconButton color="primary">
          <Iconify icon="akar-icons:linkedin-fill" />
        </IconButton>
      </div>
    </Container>

  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }: { list: NavListProps }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavListProps }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}

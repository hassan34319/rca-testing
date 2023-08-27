import { memo } from 'react';
import Image from 'next/image'

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();



  const singleLogo = (
    <Image
      src="/favicon/Logo1.png"
      width={500}
      height={500}
      alt="logo blacno de RCA"
    />
  );

  const fullLogo = (
    <Image
      src="/favicon/Logo1.png"
      width={55}
      height={55}
      alt="logo blacno de RCA"
    />
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="Inicio"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

export default memo(Logo);

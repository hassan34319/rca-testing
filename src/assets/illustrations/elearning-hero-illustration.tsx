import { memo } from 'react';

import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import Image from 'src/components/image';

import Shape from './pattern/shape';
import Pattern01 from './pattern/pattern-01';
import Pattern02 from './pattern/pattern-02';

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const BLUE = '#355EC9';

  const PURPLE = '#9B3AB1';

  const styleIconContent = {
    fontSize: 22,
    color: 'common.black',
    fontWeight: 'fontWeightBold',
  };

  return (
    <Box
      sx={{
        top: 50,
        right: 250,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
     <Box sx={{ position: 'absolute', right: 30, bottom: 150, zIndex: 8, borderRadius: 10 }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="teacher"
          src="/assets/images/course/course_teacher_hero.jpg"
          sx={{ width: 420, height: 250 }}
        />
      </Box> 

      {/* <Box
        {...varDown}
        component={m.div}
        sx={{ position: 'absolute', left: 115, bottom: 115, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="book icon"
          src="/assets/icons/ic_book.png"
          sx={{ width: 52, height: 62 }}
        />
      </Box> */}

      {/* <Box
        {...varRight}
        component={m.div}
        sx={{ position: 'absolute', left: 18, top: 220, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="pencil icon"
          src="/assets/icons/ic_pencil.png"
          sx={{ width: 60, height: 77 }}
        />
      </Box> */}

      {/* <Box
        {...varRight}
        component={m.div}
        sx={{ position: 'absolute', left: 400, top: 320, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="pencil icon"
          src="/assets/icons/ic_money_flow.png"
          sx={{ width: 56, height: 56 }}
        />
      </Box> */}


      {/* Icon */}

    

      {/* <Box {...varUp} component={m.div} sx={{ zIndex: 8, right: 20, position: 'absolute' }}>
        <Icon
          color={PURPLE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}></Typography>}
          sx={{ transform: 'scale(1.2) translateY(20px) rotate(15deg)' }}
        />
      </Box>

      <Box {...varDown} component={m.div} sx={{ zIndex: 8, position: 'absolute' }}>
        <Icon
          color={BLUE}
          content={<Typography sx={{ ...styleIconContent, color: 'common.white' }}></Typography>}
          sx={{
            transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)',
          }}
        />
      </Box> */}

      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
    </Box>
  );
}

export default memo(ElearningHeroIllustration);

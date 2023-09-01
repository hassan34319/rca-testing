import { useRef, useEffect, useCallback } from 'react';

import { Popover, ListItemButton } from '@mui/material';

import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavListProps, NavItemBaseProps } from '../types';

import { NavItem } from './nav-item';
// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const navRef = useRef(null);

  const pathname = usePathname();

  const menuOpen = useBoolean();

  const active = useActiveLink(item.path, false);

  const externalLink = item.path.includes('http');

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (item.children) {
      menuOpen.onTrue();
    }
  }, [item.children, menuOpen]);

  const list = item.children?.map((i: NavListProps) => i.items)[0];

  return (
    <>
    <NavItem
      ref={navRef}
      item={item}
      active={active}
      open={menuOpen.value}
      externalLink={externalLink}
      onMouseEnter={handleOpenMenu}
      onMouseLeave={menuOpen.onFalse}
    />

    {!!item.children && menuOpen.value && (
      <Popover
        open={menuOpen.value}
        anchorEl={navRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            onMouseEnter: menuOpen.onTrue,
            onMouseLeave: menuOpen.onFalse,
            sx: {
              mt: -2,
              ...(menuOpen.value && {
                pointerEvents: 'auto',
              }),
            },
          },
        }}
        sx={{
          pointerEvents: 'none',
        }}
      >
        {list?.map((i) => (
          <ListItemButton
            key={i.title}
            component={RouterLink}
            href={i.path}
            sx={{ typography: 'body2', borderRadius: 1 }}
          >
            {i.title}
          </ListItemButton>
        ))}
      </Popover>
    )}
  </>
  );
}
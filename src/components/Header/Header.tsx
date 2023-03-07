import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { SearchModal } from '@/components/SearchModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box sx={BoxStyle}>
        <AppBar sx={AppBarStyle}>
          <Toolbar>
            <Typography
              variant='h1'
              component='h1'
              sx={TextStyle}
              onClick={() => router.push('/')}>
              🛫travel.zip
            </Typography>
            <IconButton
              size='large'
              aria-label='search'
              color='inherit'
              onClick={() => setIsOpen(!isOpen)}>
              <SearchIcon color='white' sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <SearchModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;

const AppBarStyle = {
  position: 'static',
  bgcolor: 'blue070.main',
  justifyContent: 'center',
  height: 70,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
} as const;

const BoxStyle = {
  flexGrow: 1,
  position: 'sticky',
  top: 0,
  zIndex: '2000',
  // mb: '2rem',
} as const;

const TextStyle = {
  flexGrow: 1,
  fontSize: '1.5rem',
  fontFamily: 'KOHIBaeum',
  color: 'white.main',
  textAlign: 'center',
  cursor: 'pointer',
} as const;

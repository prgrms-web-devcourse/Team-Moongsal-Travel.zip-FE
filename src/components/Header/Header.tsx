import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import { SearchModal } from '../SearchModal';

const Header = () => {
  return (
    <>
      <Box sx={BoxStyle}>
        <AppBar sx={AppBarStyle}>
          <Toolbar>
            <Typography variant='h1' component='h1' sx={TextStyle}>
              🛫Travel.zip
            </Typography>
            <IconButton size='large' aria-label='search' color='inherit'>
              <SearchIcon color='blue050' />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <SearchModal />
    </>
  );
};

export default Header;

const AppBarStyle = {
  boxShadow: 'none',
  position: 'static',
  bgcolor: 'blue010.main',
  justifyContent: 'center',
  height: 70,
} as const;

const BoxStyle = {
  flexGrow: 1,
  position: 'sticky',
  top: 0,
} as const;

const TextStyle = {
  flexGrow: 1,
  fontSize: '1.5rem',
  fontFamily: 'KOHIBaeum',
  color: 'blue050.main',
  textAlign: 'center',
} as const;

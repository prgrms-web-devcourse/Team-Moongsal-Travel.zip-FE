import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={BoxStyle}>
      <AppBar sx={AppBarStyle}>
        <Toolbar>
          <Typography variant='h1' component='h1' sx={TextStyle}>
            🛫Travel.zip
          </Typography>
          <Button color='black'>검색</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

const AppBarStyle = {
  height: 70,
  boxShadow: 'none',
  position: 'static',
  bgcolor: 'blue010.main',
} as const;

const BoxStyle = {
  flexGrow: 1,
  height: 70,
  position: 'sticky',
  top: 0,
} as const;

const TextStyle = {
  flexGrow: 1,
  fontSize: '1.5rem',
  fontFamily: 'KOHIBaeum',
  color: 'blue050.main',
  textAlign: 'center',
};

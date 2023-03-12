import {
  AddCircle as AddCircleIcon,
  ConnectingAirports as ConnectingAirportsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

const GNB = () => {
  const [value, setValue] = useState<'home' | 'add' | 'profile'>('home');

  return (
    <StyledBottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)}>
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<ConnectingAirportsIcon />}
      />
      <BottomNavigationAction label='Add' value='add' icon={<AddCircleIcon />} />
      <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} />
    </StyledBottomNavigation>
  );
};

export default GNB;

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    width: 390,
  },
  [theme.breakpoints.up('mobile')]: {
    width: 414,
  },
  position: 'fixed',
  bottom: 0,
  backgroundColor: theme.palette.blue010.main,
  minHeight: 65,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
}));

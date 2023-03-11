import {
  AddCircle as AddCircleIcon,
  ConnectingAirports as ConnectingAirportsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

const GNB = () => {
  const [value, setValue] = useState<'home' | 'add' | 'profile'>('home');

  return (
    <BottomNavigation
      sx={{
        position: 'sticky',
        bottom: 0,
        bgcolor: 'blue010.main',
        zIndex: '1201',
      }}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}>
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<ConnectingAirportsIcon />}
      />
      <BottomNavigationAction label='Add' value='add' icon={<AddCircleIcon />} />
      <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default GNB;

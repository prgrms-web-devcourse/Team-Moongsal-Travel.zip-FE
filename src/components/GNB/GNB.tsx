import {
  AddCircle as AddCircleIcon,
  ConnectingAirports as ConnectingAirportsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { PATH_ROUTER } from '@/constants/path';

const GNB = () => {
  const router = useRouter();

  const [value, setValue] = useState<keyof typeof PATH_ROUTER>('home');
  const onChangeNavigationRoute = (_: unknown, newValue: keyof typeof PATH_ROUTER) => {
    setValue(newValue);
    router.push(PATH_ROUTER[newValue]);
  };

  return (
    <StyledBottomNavigation value={value} onChange={onChangeNavigationRoute}>
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

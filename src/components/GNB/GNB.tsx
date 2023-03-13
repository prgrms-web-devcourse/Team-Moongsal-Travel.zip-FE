import {
  AddCircle as AddCircleIcon,
  AddLocationAlt as AddLocationAltIcon,
  ConnectingAirports as ConnectingAirportsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { PATH_ROUTER } from '@/constants/path';
import useAuth from '@/hooks/useAuth';
import { PathRouterType } from '@/types/common';
import { getInitialPathName } from '@/utils/helper';

const GNB = () => {
  const router = useRouter();
  const [value, setValue] = useState<PathRouterType>(
    getInitialPathName(router.pathname as PathRouterType),
  );
  const { handleOpenAuthConfirmModal } = useAuth();

  const onChangeNavigationRoute = (_: unknown, newValue: PathRouterType) => {
    if (
      (newValue === 'add' || newValue === 'profile' || newValue === 'place') &&
      handleOpenAuthConfirmModal()
    ) {
      return;
    }

    if (value === newValue) {
      return;
    }

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
      <BottomNavigationAction label='Place' value='place' icon={<AddLocationAltIcon />} />
      <BottomNavigationAction label='Profile' value='profile' icon={<PersonIcon />} />
    </StyledBottomNavigation>
  );
};

export default GNB;

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  // [theme.breakpoints.down('mobile')]: {
  //   width: 390,
  // },
  // [theme.breakpoints.up('mobile')]: {
  //   width: 414,
  // },
  width: '414px',
  position: 'fixed',
  bottom: 0,
  backgroundColor: theme.palette.blue010.main,
  minHeight: 65,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
}));

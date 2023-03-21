import {
  CreateOutlined as CreateOutlinedIcon,
  FolderOutlined as FolderIcon,
  HomeOutlined as HomeIcon,
  PersonOutlined as PersonIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { PATH_ROUTER } from '@/constants/path';
import useAuth from '@/hooks/auth/useAuth';
import { PathRouterType } from '@/types/common';
import { getInitialPathName } from '@/utils/helper';

const GNB = () => {
  const router = useRouter();
  const [value, setValue] = useState<PathRouterType>(
    getInitialPathName(router.pathname as PathRouterType),
  );
  const { handleOpenAuthConfirmModal } = useAuth();

  useEffect(() => {
    if (router.isReady) {
      const newValue = Object.keys(PATH_ROUTER).find(
        (key) => PATH_ROUTER[key as PathRouterType] === router.route,
      ) as PathRouterType;
      setValue(newValue);
    }
  }, [router]);

  const onChangeNavigationRoute = (_: unknown, newValue: PathRouterType) => {
    if (
      (newValue === 'add' || newValue === 'member' || newValue === 'scrap') &&
      handleOpenAuthConfirmModal()
    ) {
      return;
    }

    if (value === newValue) {
      return;
    }

    router.push(PATH_ROUTER[newValue]);
  };

  return (
    <StyledBottomNavigation value={value} showLabels onChange={onChangeNavigationRoute}>
      <BottomNavigationAction
        label='홈'
        value='home'
        disableRipple
        icon={<HomeIcon fontSize='medium' />}
        sx={GNBActionStyle}
      />
      <BottomNavigationAction
        label='작성'
        value='add'
        disableRipple
        icon={<CreateOutlinedIcon fontSize='medium' />}
        sx={GNBActionStyle}
      />
      <BottomNavigationAction
        label='스크랩'
        value='scrap'
        disableRipple
        icon={<FolderIcon fontSize='medium' />}
        sx={GNBActionStyle}
      />
      <BottomNavigationAction
        label='나의 여행'
        value='member'
        disableRipple
        icon={<PersonIcon fontSize='medium' />}
        sx={GNBActionStyle}
      />
    </StyledBottomNavigation>
  );
};

export default GNB;

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: theme.palette.white.main,
  height: 65,
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.up('sm')]: {
    minWidth: '390px',
    maxWidth: '414px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '340px',
    maxWidth: '600px',
  },
}));

const GNBActionStyle = {
  color: 'gray030.main',
  '&.Mui-selected': {
    color: 'blue070.main',
  },
} as const;

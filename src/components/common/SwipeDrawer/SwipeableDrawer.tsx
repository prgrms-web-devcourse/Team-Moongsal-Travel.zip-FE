import { SwipeableDrawer as MuiSwipeableDrawer } from '@mui/material';
import { ReactNode } from 'react';

import { swipeStyle } from '@/styles/commonStyle';

import { Puller } from '.';

interface SwipeableDrawer {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
  children: ReactNode;
}

const SwipeableDrawer = ({ open, toggleDrawer, children }: SwipeableDrawer) => {
  return (
    <MuiSwipeableDrawer
      container={() => document.body}
      anchor='bottom'
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableScrollLock
      sx={swipeStyle}
      ModalProps={{
        keepMounted: false,
      }}>
      <Puller />
      {children}
    </MuiSwipeableDrawer>
  );
};

export default SwipeableDrawer;

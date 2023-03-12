import { Close as CloseIcon } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { flexCenterStyle, mobileModalLayoutStyle } from '@/styles/commonStyle';

interface MobileAppBarLayoutProps {
  handleClose?: () => void;
}

const MobileAppBarLayout = ({ handleClose }: MobileAppBarLayoutProps) => {
  return (
    <MobileSizeAppBar>
      <Toolbar sx={{ ...flexCenterStyle, px: 0 }}>
        <IconButton
          edge='start'
          onClick={handleClose}
          sx={{ flex: 1, borderRadius: '4px' }}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ textAlign: 'center', flex: 2 }}>프로필 수정</Typography>
        <Button
          autoFocus
          color='inherit'
          onClick={handleClose && handleClose}
          sx={{ flex: 1 }}>
          완료
        </Button>
      </Toolbar>
    </MobileSizeAppBar>
  );
};

export default MobileAppBarLayout;

const MobileSizeAppBar = styled(AppBar)(({ theme }) => ({
  ...mobileModalLayoutStyle,
  backgroundColor: theme.palette.blue070.main,
}));

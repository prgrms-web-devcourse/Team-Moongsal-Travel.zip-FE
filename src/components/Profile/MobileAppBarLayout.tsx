import { Close as CloseIcon } from '@mui/icons-material';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useUserInformation } from '@/api/hooks/profile';
import { flexCenterStyle, mobileModalLayoutStyle } from '@/styles/commonStyle';

interface MobileAppBarLayoutProps {
  handleClose?: () => void;
}

const MobileAppBarLayout = ({ handleClose }: MobileAppBarLayoutProps) => {
  const {
    userInformation: { errorMessage },
    handleChangeUserInformation,
  } = useUserInformation();

  return (
    <MobileSizeAppBar>
      <Toolbar sx={{ ...flexCenterStyle, px: 0 }}>
        <IconButton
          edge='start'
          onClick={handleClose && handleClose}
          sx={{ flex: 1, borderRadius: '4px' }}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ textAlign: 'center', flex: 2 }}>프로필 수정</Typography>
        <Button
          autoFocus
          color='inherit'
          disabled={!!errorMessage}
          onClick={() => {
            handleClose && handleClose();
            handleChangeUserInformation();
          }}
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

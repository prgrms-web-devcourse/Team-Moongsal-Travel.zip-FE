import { Error as ErrorIcon } from '@mui/icons-material';
import { DialogContentText, Typography } from '@mui/material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { flexCenterStyle } from '@/styles/CenterStyle';

interface SigninLeadModalProps {
  open: boolean;
  handleClickClose: () => void;
}

const SigninLeadModal = ({ open, handleClickClose }: SigninLeadModalProps) => {
  return (
    <Dialog open={open} onClose={handleClickClose}>
      <DialogTitle className='readable-hidden'>로그인 유도 모달</DialogTitle>

      <DialogContent
        sx={{
          ...flexCenterStyle,
          flexDirection: 'column',
          minWidth: 300,
          minHeight: 125,
          p: 0,
        }}>
        <DialogContentText sx={{ py: 3 }}>
          <ErrorIcon
            sx={{
              ...flexCenterStyle,
              fontSize: '3.5rem',
              color: 'blue040.main',
            }}
          />
        </DialogContentText>
        <DialogContentText sx={modalTextStyle}>
          <Typography component='span' sx={{ ...modalTextStyle, color: 'blue050.main' }}>
            로그인
          </Typography>
          &nbsp;하시겠습니까?
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default SigninLeadModal;

const modalTextStyle = { fontSize: '1.25rem', fontWeight: 'bold' };

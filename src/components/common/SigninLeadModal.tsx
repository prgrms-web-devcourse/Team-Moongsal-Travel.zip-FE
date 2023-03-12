import { Error as ErrorIcon } from '@mui/icons-material';
import { DialogActions, DialogContentText, Typography } from '@mui/material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useRouter } from 'next/router';

import { CommonButton } from '@/components/common';
import { flexCenterStyle } from '@/styles/commonStyle';

interface SigninLeadModalProps {
  open: boolean;
  handleClickClose: () => void;
}

const SigninLeadModal = ({ open, handleClickClose }: SigninLeadModalProps) => {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onClose={handleClickClose}
      PaperProps={{ style: { borderRadius: 12 } }}>
      <DialogTitle className='readable-hidden'>로그인 유도 모달</DialogTitle>

      <DialogContent
        sx={{
          ...flexCenterStyle,
          flexDirection: 'column',
          minWidth: 300,
          minHeight: 125,
          p: 0,
          borderRadius: 20,
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
      <DialogActions sx={{ mb: 1, px: 4, py: 2.5 }}>
        <CommonButton
          content='로그인'
          customStyle={buttonStyle}
          handleClick={() => router.push('/auth/login')}
        />
        <CommonButton
          content='취소'
          customStyle={{ ...buttonStyle, bgcolor: 'gray010.main', color: 'dark.main' }}
          handleClick={() => handleClickClose()}
        />
      </DialogActions>
    </Dialog>
  );
};

export default SigninLeadModal;

const modalTextStyle = { fontSize: '1.25rem', fontWeight: 'bold' };
const buttonStyle = { height: '50px', m: 0 };

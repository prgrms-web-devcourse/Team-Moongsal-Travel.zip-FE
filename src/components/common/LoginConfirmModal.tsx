import { Error as ErrorIcon } from '@mui/icons-material';
import { Button, DialogActions, DialogContentText, Typography } from '@mui/material';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { logoBlue } from 'public/images';

import { CommonButton } from '@/components/common';
import useAuth from '@/hooks/auth/useAuth';
import { flexCenterStyle } from '@/styles/commonStyle';

const LoginConfirmModal = () => {
  const { isAuthConfirmModal, setIsAuthConfirmModal } = useAuth();

  const router = useRouter();

  const onClickClose = () => {
    setIsAuthConfirmModal(false);
  };

  return (
    <Dialog
      open={isAuthConfirmModal}
      onClose={onClickClose}
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
        <DialogContentText sx={{ pt: 3 }}>
          <ErrorIcon
            sx={{
              ...flexCenterStyle,
              fontSize: '2rem',
              color: 'blue040.main',
            }}
          />
        </DialogContentText>
        <Image src={logoBlue} width={180} alt='' style={{ padding: '20px' }} />
        <DialogContentText sx={modalTextStyle}>
          <Typography component='span' sx={{ ...modalTextStyle, color: 'blue040.main' }}>
            로그인
          </Typography>
          이 필요한 서비스입니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ mb: 1, px: 4, py: 2.5 }}>
        <CommonButton
          content='로그인'
          customStyle={{ ...buttonStyle, backgroundColor: 'blue050.main' }}
          handleClick={() => {
            router.push('/auth/login');
            onClickClose();
          }}
        />
        {/* <CommonButton
          content='취소'
          isVariant={false}
          customStyle={{ ...buttonStyle, bgcolor: 'gray005.main', color: 'dark.main' }}
          handleClick={onClickClose}
        /> */}
        <Button variant='outlined' sx={{ ...buttonStyle }} onClick={onClickClose}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginConfirmModal;

const modalTextStyle = { fontSize: '16px', fontWeight: 'bold' };
const buttonStyle = { height: '50px', m: 0, width: '80%' };

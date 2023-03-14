import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { bigLogo, worldMap } from 'public/images';

interface AuthHeaderProps {
  text: string;
}

const AuthHeader = ({ text }: AuthHeaderProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'blue070.main',
        borderRadius: '0 0 10px 10px',
        width: '100%',
        height: '250px',
        textAlign: 'center',
      }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          top: '10px',
          left: '0',
          opacity: '0.4',
        }}>
        <Image
          src={worldMap}
          height={220}
          alt='logo'
          style={{ width: '100%' }}
          priority
        />
      </Box>
      <Image src={bigLogo} height={170} alt='logo' style={{ width: '100%' }} priority />
      <Typography
        component='h1'
        variant='h6'
        color='white.main'
        sx={{
          position: 'absolute',
          top: '140px',
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: '100%',
          color: 'blue010.main',
          fontSize: '18px',
        }}>
        내가 가진 여행 기억의 모음집
      </Typography>
      <Typography
        component='h2'
        variant='h5'
        sx={{ fontWeight: '600', color: 'white.main', mt: '30px' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default AuthHeader;

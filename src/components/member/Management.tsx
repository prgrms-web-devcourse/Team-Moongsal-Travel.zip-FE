import { Box, Button, Stack, Typography } from '@mui/material';

import { ProfileAvatar } from '@/components/common';
import { useUserInformation } from '@/hooks/query/member';
import { fontStyle } from '@/styles/commonStyle';

interface ManagementProps {
  handleOpenEditModal: () => void;
}

const Management = ({ handleOpenEditModal }: ManagementProps) => {
  const {
    userInformation: { nickname, profileImageUrl, email },
    isLoading,
  } = useUserInformation();

  return (
    <Stack
      spacing={2}
      minHeight={150}
      alignItems='center'
      justifyContent='center'
      bgcolor='white.main'>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'start',
          alignItems: 'center',
          px: '15px',
          boxSizing: 'border-box',
          gap: 2.5,
        }}>
        <ProfileAvatar
          url={profileImageUrl}
          size={75}
          iconSize={75}
          isLoading={isLoading}
        />
        <Stack>
          <Typography variant='h2' component='h2' sx={{ ...fontStyle, fontSize: '16px' }}>
            {nickname}
          </Typography>
          <Typography
            component='span'
            sx={{ mt: '5px', fontSize: '13px', color: 'gray030.main' }}>
            {email}
          </Typography>
          <Button variant='outlined' sx={buttonStyle} onClick={handleOpenEditModal}>
            프로필 수정
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Management;

const buttonStyle = {
  width: '105px',
  height: '30px',
  mt: '8px',
  borderRadius: '4px',
  borderColor: 'blue070.main',
  fontWeight: '400',
} as const;

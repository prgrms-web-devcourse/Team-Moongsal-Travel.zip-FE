import { Box, Stack, Typography } from '@mui/material';

import { useUserInformation } from '@/api/hooks/profile';
import { CommonButton, ProfileAvatar } from '@/components/common';

interface ManagementProps {
  handleOpenEditModal: () => void;
}

const Management = ({ handleOpenEditModal }: ManagementProps) => {
  const {
    userInformation: { nickname, profileImageUrl },
    isLoading,
  } = useUserInformation();

  return (
    <Stack
      spacing={2}
      minHeight={175}
      alignItems='center'
      justifyContent='center'
      bgcolor='white.main'>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'start',
          alignItems: 'center',
          px: 5,
          boxSizing: 'border-box',
          gap: 2.5,
        }}>
        <ProfileAvatar
          url={profileImageUrl}
          size={75}
          iconSize={5}
          isLoading={isLoading}
        />
        <Typography
          variant='h2'
          component='h2'
          sx={{ font: '1.25rem bold', color: 'dark.main' }}>
          {nickname}
        </Typography>
      </Box>

      <CommonButton
        content='프로필 수정'
        customStyle={{ height: 40, bgcolor: 'blue050.main' }}
        handleClick={handleOpenEditModal}
      />
    </Stack>
  );
};

export default Management;

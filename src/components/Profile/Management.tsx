import { Stack, Typography } from '@mui/material';

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
      minHeight={350}
      alignItems='center'
      justifyContent='center'
      bgcolor='gray005.main'>
      <ProfileAvatar
        url={profileImageUrl}
        size={100}
        iconSize={5}
        isLoading={isLoading}
      />
      <Typography
        variant='h2'
        component='h2'
        sx={{ font: '1.25rem bold', color: 'dark.main' }}>
        {nickname}
      </Typography>
      <CommonButton
        content='프로필 수정'
        customStyle={{ height: 40 }}
        handleClick={handleOpenEditModal}
      />
    </Stack>
  );
};

export default Management;

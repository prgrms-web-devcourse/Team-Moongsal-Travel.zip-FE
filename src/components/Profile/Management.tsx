import { Stack, Typography } from '@mui/material';

import { CommonButton, ProfileAvatar } from '@/components/common';

interface ManagementProps {
  nickname: string;
  profileImage: string;
  isLoading: boolean;
}

const Management = ({ nickname, profileImage, isLoading }: ManagementProps) => {
  return (
    <Stack
      spacing={2}
      minHeight={350}
      alignItems='center'
      justifyContent='center'
      bgcolor='gray005.main'>
      <ProfileAvatar url={profileImage} size={100} iconSize={5} isLoading={isLoading} />
      <Typography
        variant='h2'
        component='h2'
        sx={{ font: '1.25rem bold', color: 'dark.main' }}>
        {nickname}
      </Typography>
      <CommonButton content='프로필 수정' customStyle={{ height: 40 }} />
    </Stack>
  );
};

export default Management;

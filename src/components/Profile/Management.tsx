import { Stack, Typography } from '@mui/material';

import { CommonButton, ProfileAvatar } from '@/components/common';

interface ManagementProps {
  nickname: string;
  profileImage: string;
}

const Management = ({ nickname, profileImage }: ManagementProps) => {
  return (
    <Stack spacing={1} alignItems='center'>
      <ProfileAvatar url={profileImage} size={100} iconSize={5} />
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

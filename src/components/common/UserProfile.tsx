import { Stack, Typography } from '@mui/material';

import ProfileAvatar from '@/components/common/ProfileAvatar';
import { fontStyle } from '@/styles/commonStyle';

interface UserProfileProps {
  profileImageUrl: string;
  nickname: string;
}

const UserProfile = ({ profileImageUrl, nickname }: UserProfileProps) => {
  return (
    <Stack direction='row' alignItems='center' spacing={0.8}>
      <ProfileAvatar url={profileImageUrl} size={28} iconSize={28} isLoading={false} />
      <Typography component='span' sx={fontStyle}>
        {nickname}
      </Typography>
    </Stack>
  );
};

export default UserProfile;

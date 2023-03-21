import { Stack, Typography } from '@mui/material';

import Avatar from '@/components/common/UserProfile/Avatar';
import { fontStyle } from '@/styles/commonStyle';

interface UserProfileProps {
  profileImageUrl: string;
  nickname: string;
  color?: string;
  fontSize?: string;
}

const UserProfile = ({
  profileImageUrl,
  nickname,
  color,
  fontSize,
}: UserProfileProps) => {
  return (
    <Stack direction='row' alignItems='center' spacing={0.8}>
      <Avatar url={profileImageUrl} size={28} iconSize={28} isLoading={false} />
      <Typography component='span' sx={{ ...fontStyle, color, fontSize }}>
        {nickname}
      </Typography>
    </Stack>
  );
};

export default UserProfile;

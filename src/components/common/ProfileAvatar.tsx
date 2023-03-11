import { Person as PersonIcon } from '@mui/icons-material';
import { Avatar, Skeleton } from '@mui/material';

interface ProfileAvatarProps {
  url: string;
  size: number;
  iconSize: number;
  isLoading: boolean;
}

const ProfileAvatar = ({ url, size, iconSize, isLoading }: ProfileAvatarProps) => {
  if (isLoading) {
    return <Skeleton variant='circular' width={size} height={size} />;
  }

  return (
    <Avatar
      src={url !== 'default' ? url : undefined}
      sx={{ bgcolor: 'gray020.main', width: size, height: size }}>
      {url === 'default' && <PersonIcon sx={{ fontSize: `${iconSize}rem` }} />}
    </Avatar>
  );
};

export default ProfileAvatar;

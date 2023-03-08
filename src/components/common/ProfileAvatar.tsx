import { Person as PersonIcon } from '@mui/icons-material';
import { Avatar } from '@mui/material';

interface ProfileAvatarProps {
  url: string;
  size: number;
  iconSize: number;
}

const ProfileAvatar = ({ url, size, iconSize }: ProfileAvatarProps) => {
  return (
    <Avatar
      src={url !== 'default' ? url : undefined}
      sx={{ bgcolor: 'gray020.main', width: size, height: size }}>
      {url === 'default' && <PersonIcon sx={{ fontSize: `${iconSize}rem` }} />}
    </Avatar>
  );
};

export default ProfileAvatar;

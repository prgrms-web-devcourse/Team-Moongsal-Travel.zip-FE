import { Avatar, Skeleton } from '@mui/material';
import Image from 'next/image';
import { avatar } from 'public/images';

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
      sx={{ bgcolor: 'gray020.main', width: size, height: size, textAlign: 'center' }}>
      {url === 'default' && <Image src={avatar} width={iconSize} alt='' />}
    </Avatar>
  );
};

export default ProfileAvatar;

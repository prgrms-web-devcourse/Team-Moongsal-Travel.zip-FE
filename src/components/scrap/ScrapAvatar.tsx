import { Avatar, ListItemAvatar } from '@mui/material';
import Image from 'next/image';

interface ScrapAvatar {
  image: string;
}

const ScrapAvatar = ({ image }: ScrapAvatar) => {
  return (
    <ListItemAvatar sx={{ mr: 1 }}>
      <Avatar
        sx={{
          bgcolor: 'transparent',
          borderRadius: 0,
          width: '3rem',
          height: '3rem',
        }}>
        <Image src={image} alt='document' fill />
      </Avatar>
    </ListItemAvatar>
  );
};

export default ScrapAvatar;

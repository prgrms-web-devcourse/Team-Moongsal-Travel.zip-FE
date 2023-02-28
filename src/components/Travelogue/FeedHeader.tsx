import { Person, Room as Marker } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';

interface FeedHeaderProps {
  profileImage: string;
  country: string;
  nickname: string;
}

const FeedHeader = ({ profileImage = 'default', country, nickname }: FeedHeaderProps) => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Stack direction='row' alignItems='center' spacing={0.5}>
        <Avatar
          src={profileImage !== 'default' ? profileImage : undefined}
          sx={{ bgcolor: 'gray020.main', width: 20, height: 20 }}>
          {profileImage === 'default' && <Person sx={{ fontSize: '1rem' }} />}
        </Avatar>
        <Typography component='span' sx={{ color: 'gray030.main', fontSize: '0.75rem' }}>
          {nickname}
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' color='blue050.main'>
        <Marker />
        <Typography component='span'>{country}</Typography>
      </Stack>
    </Stack>
  );
};

export default FeedHeader;

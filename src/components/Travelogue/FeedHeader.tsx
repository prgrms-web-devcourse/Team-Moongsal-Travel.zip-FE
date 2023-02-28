import { Person, Room as Marker } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';

interface FeedHeaderProps {
  profileImage: string;
  country: string;
}

const FeedHeader = ({ profileImage = 'default', country }: FeedHeaderProps) => {
  // 프로필 사진이 없는 경우
  if (profileImage === 'default') {
    return (
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={0.5}>
          <Avatar sx={{ bgcolor: 'gray020.main', width: 20, height: 20 }}>
            <Person sx={{ fontSize: '1rem' }} />
          </Avatar>
          <Typography
            component='span'
            sx={{ color: 'gray030.main', fontSize: '0.75rem' }}>
            닉네임
          </Typography>
        </Stack>
        <Stack direction='row' alignItems='center' color='blue050.main'>
          <Marker />
          <Typography component='span'>{country}</Typography>
        </Stack>
      </Stack>
    );
  }

  // 프로필 사진이 있는 경우
  return <Avatar sx={{ bgcolor: 'gray020.main', width: 20, height: 20 }}></Avatar>;
};

export default FeedHeader;

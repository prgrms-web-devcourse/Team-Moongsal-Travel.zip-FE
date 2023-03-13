import { Person } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { location } from 'public/images';

import { TravelogueFeedType } from '@/types/travelogue';

type FeedHeaderProps = TravelogueFeedType['member'] & {
  country: TravelogueFeedType['country'];
};

const FeedHeader = ({
  profileImageUrl = 'default',
  country,
  nickname,
}: FeedHeaderProps) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      my={0.8}
      sx={{ height: '30px' }}>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Avatar
          src={profileImageUrl !== 'default' ? profileImageUrl : undefined}
          sx={{ bgcolor: 'gray020.main', width: 25, height: 25, textAlign: 'center' }}>
          {profileImageUrl === 'default' && <Person sx={{ fontSize: '1.1rem' }} />}
        </Avatar>
        <Typography component='span' sx={{ color: 'dark.main', ...fontStyle }}>
          {nickname}
        </Typography>
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        color='blue050.main'
        spacing={0.5}
        sx={{
          backgroundColor: 'blue010.main',
          width: 'fit-content',
          borderRadius: '20px',
          textAlign: 'center',
          px: '10px',
        }}>
        <Image src={location} width={12} alt='' />
        <Typography component='span' sx={{ ...fontStyle, color: 'blue050.main' }}>
          {country}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeedHeader;

const fontStyle = {
  fontSize: '14px',
  fontWeight: '500',
};

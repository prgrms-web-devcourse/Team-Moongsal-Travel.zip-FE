import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { location } from 'public/images';

import { UserProfile } from '@/components/common/UserProfile';
import { TravelogueFeedType } from '@/types/main';

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
      <UserProfile profileImageUrl={profileImageUrl} nickname={nickname} />
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
        <Typography
          component='span'
          sx={{ fontWeight: '500', pb: '3px', color: 'blue050.main', fontSize: '14px' }}>
          {country}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeedHeader;

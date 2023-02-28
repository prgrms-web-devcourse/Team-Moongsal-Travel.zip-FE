import { Stack } from '@mui/material';
import React from 'react';

import { FeedHeader, FeedImage } from '@/components/Travelogue';

const DUMMY_DATA = {
  title: '일본 오사카 여행기',
  nights: 3,
  days: 4,
  totalCost: 400000,
  country: '일본',
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/junglee-habit.appspot.com/o/challanges%2FIMQBHIsoNIMngElt9sRf%2F0aWv3BRsSVJMcz5yU4uS?alt=media&token=6dce71b4-e11f-4fa3-9b5a-fab54bb100d8',
  member: {
    nickname: 'nickname',
    profileImageUrl: 'default',
  },
};

const TravelogueFeed = () => {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: '90%', height: 300, border: '1px solid black' }}>
      <FeedHeader
        profileImage={DUMMY_DATA.member.profileImageUrl}
        country={DUMMY_DATA.country}
      />
      <FeedImage thumbnailURL={DUMMY_DATA.thumbnail} ImageAlt={DUMMY_DATA.title} />
    </Stack>
  );
};

export default TravelogueFeed;

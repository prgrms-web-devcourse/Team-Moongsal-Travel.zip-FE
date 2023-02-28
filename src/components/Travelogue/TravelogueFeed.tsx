import { Stack } from '@mui/material';
import React from 'react';

import { FeedHeader } from '@/components/Travelogue';

const DUMMY_DATA = {
  title: '일본 오사카 여행기',
  nights: 3,
  days: 4,
  totalCost: 400000,
  country: '일본',
  thumbnail:
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80',
  member: {
    nickname: 'nickname',
    profileImageUrl: 'default',
  },
} as const;

const TravelogueFeed = () => {
  return (
    <Stack sx={{ maxWidth: '90%', border: '1px solid black' }}>
      <FeedHeader
        profileImage={DUMMY_DATA.member.profileImageUrl}
        country={DUMMY_DATA.country}
      />
    </Stack>
  );
};

export default TravelogueFeed;

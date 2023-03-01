import { Stack } from '@mui/material';
import React from 'react';

import { useGetRecentTravelogue } from '@/api/hooks/travelogue';

import TravelogueFeed from './TravelogueFeed';

const TravelogueList = () => {
  const { data: travelogues } = useGetRecentTravelogue();

  console.log(travelogues);

  if (!travelogues || travelogues.length === 0) {
    return null;
  }

  return (
    <Stack>
      {travelogues.map((travelogue) => {
        return <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />;
      })}
    </Stack>
  );
};

export default TravelogueList;

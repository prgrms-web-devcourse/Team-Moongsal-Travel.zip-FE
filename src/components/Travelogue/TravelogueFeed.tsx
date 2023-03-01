import { Stack } from '@mui/material';

import { FeedContent, FeedHeader, FeedImage } from '@/components/Travelogue';

import { TravelogueFeed as TravelogueFeedType } from './type';

const TravelogueFeed = ({ data }: { data: TravelogueFeedType }) => {
  console.log('hello');

  return (
    <Stack spacing={1.5} sx={{ maxWidth: '90%', height: 300, margin: '0 auto', pb: 3 }}>
      <FeedHeader
        profileImageUrl={data.member.profileImageUrl}
        nickname={data.member.nickname}
        country={data.country}
      />
      <FeedImage thumbnailURL={data.thumbnail} ImageAlt={data.title} />
      <FeedContent
        title={data.title}
        totalCost={data.totalCost}
        nights={data.nights}
        days={data.days}
      />
    </Stack>
  );
};

export default TravelogueFeed;

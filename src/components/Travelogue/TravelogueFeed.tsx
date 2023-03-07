import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import { FeedContent, FeedHeader, FeedImage } from '@/components/Travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

const TravelogueFeed = ({ data }: { data: TravelogueFeedType }) => {
  const router = useRouter();

  return (
    <Stack
      spacing={1.5}
      sx={{ maxWidth: '90%', height: 300, margin: '0 auto', pb: 3, cursor: 'pointer' }}
      onClick={() =>
        router.push({
          pathname: '/detail',
          query: { travelogueId: data.travelogueId },
        })
      }>
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

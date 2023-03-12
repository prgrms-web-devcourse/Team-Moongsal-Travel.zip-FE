import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import { FeedContent, FeedHeader, FeedImage } from '@/components/Travelogue';
import useAuth from '@/hooks/useAuth';
import { TravelogueFeedType } from '@/types/travelogue';

interface TravelogueFeedProps {
  data: TravelogueFeedType;
  isBottomPadding?: boolean;
}

const TravelogueFeed = ({ data, isBottomPadding = false }: TravelogueFeedProps) => {
  const router = useRouter();
  const { handleOpenAuthConfirmModal } = useAuth();

  const onClickFeed = () => {
    if (handleOpenAuthConfirmModal()) {
      return;
    }

    router.push({
      pathname: '/detail',
      query: { travelogueId: data.travelogueId },
    });
  };

  return (
    <Stack
      spacing={0.25}
      sx={{ maxWidth: '100%', cursor: 'pointer', pb: isBottomPadding ? 3 : 1.5 }}
      onClick={onClickFeed}>
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

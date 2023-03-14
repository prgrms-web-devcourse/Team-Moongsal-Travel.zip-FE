import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

import { FeedContent, FeedHeader, FeedImage } from '@/components/Travelogue';
import useAuth from '@/hooks/useAuth';
import { TravelogueFeedType } from '@/types/travelogue';
import { setItem } from '@/utils/storage';

interface TravelogueFeedProps {
  data: TravelogueFeedType;
  isBottomPadding?: boolean;
  isTemp?: boolean;
}

const TravelogueFeed = ({
  data,
  isBottomPadding = false,
  isTemp = false,
}: TravelogueFeedProps) => {
  const router = useRouter();
  const { handleOpenAuthConfirmModal } = useAuth();

  const onClickFeed = () => {
    if (handleOpenAuthConfirmModal()) {
      return;
    }

    if (isTemp) {
      const { days, travelogueId } = data;
      const subsId = ['1', '2'];
      setItem(`temp-data-${travelogueId}`, { days, subsId });
      router.push({
        pathname: '/post/first',
        query: { travelogueId, temp: true },
      });
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
      sx={{
        maxWidth: '100%',
        cursor: 'pointer',
        borderRadius: '15px',
        boxShadow: '0 3px 7px #6c6c6c38',
        padding: '20px',
        pb: isBottomPadding ? 3 : '20px',
        margin: '10px 15px',
      }}
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
